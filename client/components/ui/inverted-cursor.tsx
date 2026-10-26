import * as React from "react";

interface CursorProps {
  /** Diameter of the circle, in px. */
  size?: number;
}

export const Cursor: React.FC<CursorProps> = ({ size = 60 }) => {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);

  // Only on devices with a real mouse. Touch screens keep their normal behaviour.
  React.useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (!enabled) return;
    const el = cursorRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ease = reduceMotion ? 1 : 0.2; // how closely the circle trails the pointer

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let seen = false;
    let raf = 0;

    const render = () => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX - size / 2;
      targetY = e.clientY - size / 2;
      if (!seen) {
        // First movement: start at the pointer instead of flying in from the corner.
        seen = true;
        x = targetX;
        y = targetY;
        render();
      }
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const dx = targetX - x;
      const dy = targetY - y;
      if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) return; // settled
      x += dx * ease;
      y += dy * ease;
      render();
    };

    // Hides the native cursor everywhere, including over links and buttons.
    document.documentElement.classList.add("custom-cursor");
    document.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [enabled, size]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white opacity-0 mix-blend-difference transition-opacity duration-300"
      style={{ width: size, height: size, willChange: "transform" }}
    />
  );
};

export default Cursor;