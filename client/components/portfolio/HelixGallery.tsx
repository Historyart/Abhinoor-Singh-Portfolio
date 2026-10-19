import { useEffect, useRef } from "react";


type HelixGalleryProps = {
  /** Image URLs. Use 2:3 portrait pictures. Without this, 10 colour placeholders show. */
  images?: string[];
  className?: string;
  /** Cards in one full turn of the spiral. */
  itemsPerTurn?: number;
  /** Vertical rise per card, in px at scale 1. */
  pitch?: number;
  /** Space between neighbouring cards along the arc, in px at scale 1. */
  gap?: number;
  /** Autoplay speed in cards per second. 0 turns autoplay off. */
  speed?: number;
  label?: string;
};

const pawplannerImages = [
  "/images/pawplanner/1.png",
  "/images/pawplanner/2.png",
  "/images/pawplanner/3.png",
  "/images/pawplanner/4.png",
  "/images/pawplanner/5.png",
  "/images/pawplanner/6.png",
  "/images/pawplanner/7.png",
  "/images/pawplanner/8.png",
  "/images/pawplanner/9.png",
  "/images/pawplanner/10.png",
];

const PLACEHOLDER_COLORS = [
  "#b9a0e6",
  "#bfe9cd",
  "#f4a6b0",
  "#7fe0d3",
  "#f6ac86",
  "#aeb9f7",
  "#f1d77a",
  "#a9d8f2",
  "#f9c1a8",
  "#c9e56f",
];

const CARD_W = 350;
const CARD_H = 525; 
const PERSPECTIVE = 1900;
const POOL_TARGET = 48;

export default function HelixGallery({
  images,
  className = "",
  itemsPerTurn = 8,
  pitch = 165,
  gap = 0,
  speed = 0.4,
  label = "Rotating gallery of project images",
}: HelixGalleryProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const helixRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const hasImages = Boolean(images && images.length > 0);
  const slides = hasImages ? (images as string[]) : PLACEHOLDER_COLORS;
  const N = slides.length;
  // A multiple of N, so a given card slot always shows the same picture.
  const pool = N * Math.max(1, Math.round(POOL_TARGET / N));

  useEffect(() => {
    const scene = sceneRef.current;
    const helix = helixRef.current;
    if (!scene || !helix) return;

    const cards = cardRefs.current.slice(0, pool);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const autoplay = reduceMotion ? 0 : speed;

    const step = (2 * Math.PI) / itemsPerTurn;
    const maxHalf = Math.floor((pool - 2) / 2);
    const radiusAtScale1 = (itemsPerTurn * (CARD_W + gap)) / (2 * Math.PI);

    let w = 0;
    let h = 0;
    let ch = CARD_H;
    let spacing = CARD_W + gap;
    let radius = radiusAtScale1;
    let pitchPx = pitch;

    let pos = 0; // current progress, in cards
    let target = 0; // where progress is heading
    let dirty = true;
    let frame = 0;
    const seen: number[] = new Array(pool).fill(0);
    const shown: boolean[] = new Array(pool).fill(false);

    let dragging = false;
    let hovering = false;
    let lastX = 0;
    let lastT = 0;
    let vel = 0;
    let inView = true;
    let raf = 0;
    let last = performance.now();

    const layout = () => {
      w = scene.clientWidth;
      h = scene.clientHeight;
      if (!w || !h) return;

      // Scale so the whole spiral fits the box width.
      const fit = (w * 0.92) / (2 * radiusAtScale1 + CARD_W);
const u = Math.max(0.2, Math.min(1.3, fit));

      const cw = CARD_W * u;
      ch = CARD_H * u;
      spacing = cw + gap * u;
      radius = (itemsPerTurn * spacing) / (2 * Math.PI);
      pitchPx = pitch * u;

      scene.style.perspective = `${PERSPECTIVE * u}px`;
      for (const el of cards) {
        if (!el) continue;
        el.style.width = `${cw}px`;
        el.style.height = `${ch}px`;
        el.style.marginLeft = `${-cw / 2}px`;
        el.style.marginTop = `${-ch / 2}px`;
      }
      dirty = true;
    };

    const render = () => {
      frame++;
      const reach = h / 2 + ch * 1.3;
      const half = Math.min(
        maxHalf,
        Math.ceil(reach / Math.max(pitchPx, 1)) + 1,
      );
      const base = Math.floor(pos);

      for (let k = base - half; k <= base + half + 1; k++) {
        const t = k - pos;
        const y = t * pitchPx;
        if (Math.abs(y) > reach) continue;

        const idx = ((k % pool) + pool) % pool;
        const el = cards[idx];
        if (!el) continue;

        const angle = t * step;
        // Cards on the far side of the spiral fade back, so it reads as depth.
        const depth = (Math.cos(angle) + 1) / 2;

        seen[idx] = frame;
        if (!shown[idx]) {
          el.style.display = "";
          shown[idx] = true;
        }
        el.style.opacity = (0.3 + 0.7 * depth).toFixed(3);
        el.style.transform = `translateY(${y.toFixed(2)}px) rotateY(${angle.toFixed(5)}rad) translateZ(${radius.toFixed(2)}px)`;
      }

      for (let i = 0; i < pool; i++) {
        if (seen[i] !== frame && shown[i]) {
          const el = cards[i];
          if (el) el.style.display = "none";
          shown[i] = false;
        }
      }
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!inView) return;

if (!dragging && !hovering && autoplay) target += autoplay * dt;

      const rate = dragging ? 38 : 9; // tight while dragging, floaty after
      const d = target - pos;
      if (Math.abs(d) > 1e-4) {
        pos += d * (1 - Math.exp(-dt * rate));
        dirty = true;
      } else if (d !== 0) {
        pos = target;
        dirty = true;
      }
      if (dirty) {
        render();
        dirty = false;
      }
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastT = performance.now();
      vel = 0;
      scene.setPointerCapture(e.pointerId);
      scene.style.cursor = "grabbing";
    };

    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dt = Math.max(1, now - lastT) / 1000;
      // Dragging one card-spacing moves the spiral by exactly one card.
      target -= dx / spacing;
      vel = vel * 0.6 + (-dx / spacing / dt) * 0.4; // cards per second
      lastX = e.clientX;
      lastT = now;
    };

    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      scene.style.cursor = "grab";
      if (performance.now() - lastT < 90) target += vel * 0.3; // flick
    };

    scene.addEventListener("pointerdown", onDown);
    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerup", onUp);
    scene.addEventListener("pointercancel", onUp);

    // Pause autoplay while the mouse is over a card.
const onEnter = (e: PointerEvent) => {
  if (e.pointerType === "mouse") hovering = true;
};
const onLeave = () => {
  hovering = false;
};
for (const el of cards) {
  el?.addEventListener("pointerenter", onEnter);
  el?.addEventListener("pointerleave", onLeave);
}
scene.addEventListener("pointerleave", onLeave);

    const resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(scene);

    // Pause the animation while the gallery is scrolled out of view.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    intersectionObserver.observe(scene);

    layout();
    raf = requestAnimationFrame(tick);

    return () => {
  cancelAnimationFrame(raf);
  resizeObserver.disconnect();
  intersectionObserver.disconnect();
  scene.removeEventListener("pointerdown", onDown);
  scene.removeEventListener("pointermove", onMove);
  scene.removeEventListener("pointerup", onUp);
  scene.removeEventListener("pointercancel", onUp);

  // hover cleanup
  for (const el of cards) {
    el?.removeEventListener("pointerenter", onEnter);
    el?.removeEventListener("pointerleave", onLeave);
  }
  scene.removeEventListener("pointerleave", onLeave);
};
  }, [pool, itemsPerTurn, pitch, gap, speed]);

  return (
    <div
      ref={sceneRef}
      role="img"
      aria-label={label}
      className={`relative select-none overflow-hidden ${className}`}
      style={{ touchAction: "pan-y", cursor: "grab" }}
    >
      <div
        ref={helixRef}
        className="absolute left-1/2 top-1/2 h-0 w-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {Array.from({ length: pool }, (_, s) => {
          const slide = slides[s % N];
          return (
            <div
              key={s}
              ref={(el) => {
                cardRefs.current[s] = el;
              }}
              className="absolute left-0 top-0"
              style={{ display: "none", willChange: "transform" }}
            >
              {hasImages ? (
                <img
                  src={slide}
                  alt=""
                  draggable={false}
                  className="pointer-events-none block h-full w-full rounded-[10px] object-cover"
                />
              ) : (
                <div
                  className="pointer-events-none flex h-full w-full items-center justify-center rounded-[10px] font-satoshi text-2xl font-medium text-black/50"
                  style={{ background: slide }}
                >
                  {(s % N) + 1}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}