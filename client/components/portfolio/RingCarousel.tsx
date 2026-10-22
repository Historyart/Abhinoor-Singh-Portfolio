import { useEffect, useRef, useState } from "react";

type RingCarouselProps = {
  /** Image URLs, ideally portrait (about 13:18). Without this, 10 colour placeholders show. */
  images?: string[];
  className?: string;
  /** Drift speed in cards per second. Positive drifts left, negative right, 0 = off. */
  speed?: number;
  /** Card height as a share of the box height (0.4 = 40%). Bigger = bigger cards. */
  cardSize?: number;
  label?: string;
};

const PLACEHOLDER_COLORS = [
  "#f7e27a",
  "#c9a8f0",
  "#b9f0cf",
  "#d9737f",
  "#f9d95c",
  "#3fe0d0",
  "#f7b27f",
  "#aab6f8",
  "#f08aa0",
  "#c9a8f0",
];

const CARD_ASPECT = 130 / 180; // card width / height
const GAP_RATIO = 1.16; // distance between card centres, as a multiple of card width
const SAG_RATIO = 0.8; // how far the arc drops at the box edges, as a share of box height
const TOP_PAD_RATIO = 0.1; // space above the top card, as a share of box height

export default function RingCarousel({
  images,
  className = "",
  speed = 0.5,
  cardSize = 0.4,
  label = "Rotating carousel of project images",
}: RingCarouselProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const hasImages = Boolean(images && images.length > 0);
  const slides = hasImages ? (images as string[]) : PLACEHOLDER_COLORS;
  const N = slides.length;

  // Cards around the whole ring. Always a multiple of N, so the picture order
  // repeats cleanly with no seam. Recalculated whenever the box is resized.
  const [count, setCount] = useState(N * 5);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const autoSpeed = reduceMotion ? 0 : speed;

    // Layout, recalculated from the box size.
    let W = 0;
    let H = 0;
    let cardW = 0;
    let cardH = 0;
    let R = 1; // ring radius
    let step = 6; // degrees between neighbouring cards
    let n = N * 5; // cards on the ring
    let ringY = 0; // y of the ring centre
    let diag = 0; // half the card diagonal, for off-screen culling

    // Motion state.
    let rot = 0; // ring rotation, degrees
    let vel = 0; // flick momentum, degrees per second
    let auto = 1; // 1 = drifting, eases to 0 while a card is hovered or dragged
    let overCard = false; // mouse is over a card
    let graceUntil = 0; // short grace period, so crossing the gap between cards doesn't restart it
    let dragging = false;
    let lastX = 0;
    let lastT = 0;

    let inView = true;
    let dirty = true;
    let lastRot = Number.NaN;
    let raf = 0;
    let prev = performance.now();

    const measure = () => {
      W = scene.clientWidth;
      H = scene.clientHeight;
      if (!W || !H) return;

      cardH = H * cardSize;
      cardW = cardH * CARD_ASPECT;
      const spacing = cardW * GAP_RATIO;

      // Radius so the arc drops SAG_RATIO * H at the box edges.
      const halfW = W / 2;
      const sag = H * SAG_RATIO;
      const idealR = (halfW * halfW + sag * sag) / (2 * sag);

            // Smallest number of laps that keeps the ring at least ~90% of the ideal
      // radius, so the arc always reaches both edges of the box.
      const turns = Math.max(
        1,
        Math.ceil((0.9 * 2 * Math.PI * idealR) / spacing / N),
      );
      n = N * turns;
      R = (n * spacing) / (2 * Math.PI);
      step = 360 / n;
      diag = Math.hypot(cardW, cardH) / 2;
      ringY = cardH / 2 + H * TOP_PAD_RATIO + R;

      scene.style.setProperty("--card-w", `${cardW}px`);
      scene.style.setProperty("--card-h", `${cardH}px`);
      setCount((c) => (c === n ? c : n));
      dirty = true;
    };

    const render = () => {
      const cards = cardRefs.current;
      const halfW = W / 2;

      for (let i = 0; i < n; i++) {
        const el = cards[i];
        if (!el) continue;

        // This card's angle around the ring, wrapped to (-180, 180].
        let a = (rot + i * step) % 360;
        if (a > 180) a -= 360;
        else if (a <= -180) a += 360;

        const rad = (a * Math.PI) / 180;
        const x = halfW + R * Math.sin(rad);
        const y = ringY - R * Math.cos(rad);

        // Only the cards inside the box are drawn.
        const visible = x > -diag && x < W + diag && y > -diag && y < H + diag;
        const display = visible ? "" : "none";
        if (el.style.display !== display) el.style.display = display;

        if (visible) {
          el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${a.toFixed(2)}deg)`;
        }
      }
    };

    const setOver = (value: boolean) => {
      if (overCard && !value) graceUntil = performance.now() + 150;
      overCard = value;
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      if (!inView) return;

      const hovered = overCard || now < graceUntil;
      const targetAuto = hovered || dragging ? 0 : 1;
      auto += (targetAuto - auto) * Math.min(1, dt * 6);
      if (targetAuto === 0 && auto < 0.001) auto = 0;

      if (!dragging) {
        rot += (-autoSpeed * step * auto + vel) * dt;
        vel *= Math.pow(0.04, dt);
        if (Math.abs(vel) < 0.01) vel = 0;
      }

      if (dirty || rot !== lastRot) {
        render();
        lastRot = rot;
        dirty = false;
      }
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      vel = 0;
      lastX = e.clientX;
      lastT = performance.now();
      scene.setPointerCapture(e.pointerId);
      scene.style.cursor = "grabbing";
    };

    const onMove = (e: PointerEvent) => {
      if (!dragging) {
        if (e.pointerType === "mouse") {
          setOver(!!(e.target as HTMLElement).closest("[data-card]"));
        }
        return;
      }
      const now = performance.now();
      // The card under the pointer follows it exactly.
      const dDeg = ((e.clientX - lastX) / R) * (180 / Math.PI);
      rot += dDeg;
      vel = dDeg / Math.max((now - lastT) / 1000, 0.001);
      lastX = e.clientX;
      lastT = now;
    };

    const onUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      scene.style.cursor = "grab";
      if (performance.now() - lastT > 80) vel = 0;
      const maxVel = step * 8; // at most about 8 cards per second
      vel = Math.max(-maxVel, Math.min(maxVel, vel));
      // Re-check what is under the pointer, so hover can't get stuck after a drag.
      const under = document.elementFromPoint(e.clientX, e.clientY);
      setOver(e.pointerType === "mouse" && !!under?.closest("[data-card]"));
    };

    const onLeave = () => setOver(false);

    scene.addEventListener("pointerdown", onDown);
    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerup", onUp);
    scene.addEventListener("pointercancel", onUp);
    scene.addEventListener("pointerleave", onLeave);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(scene);

    // Pause while the carousel is scrolled out of view.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    intersectionObserver.observe(scene);

    measure();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      scene.removeEventListener("pointerdown", onDown);
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerup", onUp);
      scene.removeEventListener("pointercancel", onUp);
      scene.removeEventListener("pointerleave", onLeave);
    };
  }, [N, speed, cardSize]);

  return (
    <div
      ref={sceneRef}
      role="img"
      aria-label={label}
      className={`relative select-none overflow-hidden ${className}`}
      style={{ touchAction: "pan-y", cursor: "grab" }}
    >
      {Array.from({ length: count }, (_, i) => {
        const slide = slides[i % N];
        return (
          <div
            key={i}
            data-card=""
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="absolute left-0 top-0 overflow-hidden rounded-[10px] shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
            style={{
              display: "none",
              width: "var(--card-w)",
              height: "var(--card-h)",
              marginLeft: "calc(var(--card-w) / -2)",
              marginTop: "calc(var(--card-h) / -2)",
              willChange: "transform",
              background: hasImages ? undefined : slide,
            }}
          >
            {hasImages && (
              <img
                src={slide}
                alt=""
                draggable={false}
                className="pointer-events-none block h-full w-full object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}