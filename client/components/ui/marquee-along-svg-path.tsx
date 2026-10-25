import * as React from "react";
import {
  motion,
  type MotionValue,
  type SpringOptions,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

// Wraps `value` into the range [min, max).
const wrap = (min: number, max: number, value: number): number => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

type PreserveAspectRatioAlign =
  | "none"
  | "xMinYMin"
  | "xMidYMin"
  | "xMaxYMin"
  | "xMinYMid"
  | "xMidYMid"
  | "xMaxYMid"
  | "xMinYMax"
  | "xMidYMax"
  | "xMaxYMax";

type PreserveAspectRatioMeetOrSlice = "meet" | "slice";

type PreserveAspectRatio =
  | PreserveAspectRatioAlign
  | `${Exclude<PreserveAspectRatioAlign, "none">} ${PreserveAspectRatioMeetOrSlice}`;

export interface MarqueeAlongSvgPathProps {
  children: React.ReactNode;
  className?: string;

  // Path
  /** SVG path data the items travel along (in `viewBox` units). */
  path: string;
  pathId?: string;
  preserveAspectRatio?: PreserveAspectRatio;
  showPath?: boolean;

  // SVG
  width?: string | number;
  height?: string | number;
  viewBox?: string;

  // Marquee
  /** Speed, as a percentage of the path length per second. */
  baseVelocity?: number;
  direction?: "normal" | "reverse";
  easing?: (value: number) => number;
  slowdownOnHover?: boolean;
  slowDownFactor?: number;
  slowDownSpringConfig?: SpringOptions;

  // Scroll
  useScrollVelocity?: boolean;
  scrollAwareDirection?: boolean;
  scrollSpringConfig?: SpringOptions;
  scrollContainer?: React.RefObject<HTMLElement | null>;

  /** How many times the children are repeated along the path. */
  repeat?: number;

  // Drag
  draggable?: boolean;
  dragSensitivity?: number;
  dragVelocityDecay?: number;
  dragAwareDirection?: boolean;
  grabCursor?: boolean;

  // Stacking order along the path
  enableRollingZIndex?: boolean;
  zIndexBase?: number;
  zIndexRange?: number;

  /** Scale the whole path to fit the box (needs a sized, overflow-hidden parent). */
  responsive?: boolean;
  /**
   * `contain`: the whole path fits inside the box.
   * `cover`: the path fills the box and is cropped (best for wide banners).
   */
  fit?: "contain" | "cover";
}

interface MarqueeItemProps {
  baseOffset: MotionValue<number>;
  itemIndex: number;
  total: number;
  path: string;
  easing?: (value: number) => number;
  rollingZIndex: boolean;
  zIndexBase: number;
  zIndexRange: number;
  grab: boolean;
  hidden: boolean;
  onHover: (hovered: boolean) => void;
  children: React.ReactNode;
}

function MarqueeItem({
  baseOffset,
  itemIndex,
  total,
  path,
  easing,
  rollingZIndex,
  zIndexBase,
  zIndexRange,
  grab,
  hidden,
  onHover,
  children,
}: MarqueeItemProps) {
  // How far along the path this item is, as a percentage.
  const distance = (v: number) => {
    const wrapped = wrap(0, 100, v + (itemIndex * 100) / total);
    return easing ? easing(wrapped / 100) * 100 : wrapped;
  };

  const offsetDistance = useTransform(baseOffset, (v) => `${distance(v)}%`);
  const zIndex = useTransform(baseOffset, (v) =>
    Math.floor(zIndexBase + (distance(v) / 100) * zIndexRange),
  );

  return (
    <motion.div
      className={cn("absolute left-0 top-0", grab && "cursor-grab")}
      style={{
        offsetPath: `path('${path}')`,
        offsetDistance,
        zIndex: rollingZIndex ? zIndex : undefined,
        willChange: "offset-distance",
        backfaceVisibility: "hidden",
      }}
      aria-hidden={hidden || undefined}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {children}
    </motion.div>
  );
}

const MarqueeAlongSvgPath = ({
  children,
  className,

  path,
  pathId,
  preserveAspectRatio = "xMidYMid meet",
  showPath = false,

  width = "100%",
  height = "100%",
  viewBox = "0 0 100 100",

  baseVelocity = 5,
  direction = "normal",
  easing,
  slowdownOnHover = false,
  slowDownFactor = 0.3,
  slowDownSpringConfig = { damping: 50, stiffness: 400 },

  useScrollVelocity = false,
  scrollAwareDirection = false,
  scrollSpringConfig = { damping: 50, stiffness: 400 },
  scrollContainer,

  repeat = 3,

  draggable = false,
  dragSensitivity = 0.2,
  dragVelocityDecay = 0.96,
  dragAwareDirection = false,
  grabCursor = false,

  enableRollingZIndex = true,
  zIndexBase = 1,
  zIndexRange = 10,

  responsive = false,
  fit = "contain",
}: MarqueeAlongSvgPathProps) => {
  const container = React.useRef<HTMLDivElement>(null);
  const marqueeContainerRef = React.useRef<HTMLDivElement>(null);
  const baseOffset = useMotionValue(0);
  const autoId = React.useId();
  const id = pathId ?? `marquee-path-${autoId.replace(/:/g, "")}`;

  // Responsive scaling by direct DOM updates (no re-renders).
  React.useEffect(() => {
    if (!responsive) return;
    const wrapper = container.current;
    const inner = marqueeContainerRef.current;
    if (!wrapper || !inner) return;

    const [, , vbWidth, vbHeight] = viewBox.trim().split(/[\s,]+/).map(Number);
    const baseW = vbWidth || 100;
    const baseH = vbHeight || 100;

    const update = () => {
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      if (!w || !h) return;

      const scaleX = w / baseW;
      const scaleY = h / baseH;
      const scale =
        fit === "cover" ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);

      // Centre the scaled path inside the box.
      const offsetX = (w - baseW * scale) / 2;
      const offsetY = (h - baseH * scale) / 2;

      inner.style.width = `${baseW}px`;
      inner.style.height = `${baseH}px`;
      inner.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
      inner.style.transformOrigin = "top left";
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(wrapper);
    return () => resizeObserver.disconnect();
  }, [responsive, viewBox, fit]);

  // Each child is repeated `repeat` times along the path.
  const items = React.useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.flatMap((child, childIndex) =>
      Array.from({ length: repeat }, (_, repeatIndex) => ({
        child,
        repeatIndex,
        itemIndex: repeatIndex * childrenArray.length + childIndex,
        key: `${childIndex}-${repeatIndex}`,
      })),
    );
  }, [children, repeat]);

  // Scroll velocity can speed the marquee up and flip its direction.
  const { scrollY } = useScroll(
    scrollContainer ? { container: scrollContainer } : undefined,
  );
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, scrollSpringConfig);

  const isHovered = React.useRef(false);
  const isDragging = React.useRef(false);
  const dragVelocity = React.useRef(0);
  const directionFactor = React.useRef(direction === "normal" ? 1 : -1);

  const hoverFactorValue = useMotionValue(1);
  const defaultVelocity = useMotionValue(1);
  const smoothHoverFactor = useSpring(hoverFactorValue, slowDownSpringConfig);

  const velocityFactor = useTransform(
    useScrollVelocity ? smoothVelocity : defaultVelocity,
    [0, 1000],
    [0, 5],
    { clamp: false },
  );

  useAnimationFrame((_, delta) => {
    if (isDragging.current && draggable) {
      baseOffset.set(baseOffset.get() + dragVelocity.current);

      dragVelocity.current *= 0.9;
      if (Math.abs(dragVelocity.current) < 0.01) dragVelocity.current = 0;
      return;
    }

    hoverFactorValue.set(
      isHovered.current && slowdownOnHover ? slowDownFactor : 1,
    );

    let moveBy =
      directionFactor.current *
      baseVelocity *
      (delta / 1000) *
      smoothHoverFactor.get();

    if (scrollAwareDirection && !isDragging.current) {
      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    if (draggable) {
      moveBy += dragVelocity.current;

      if (dragAwareDirection && Math.abs(dragVelocity.current) > 0.1) {
        directionFactor.current = Math.sign(dragVelocity.current);
      }

      // Let a drag's momentum fade back to zero.
      if (!isDragging.current && Math.abs(dragVelocity.current) > 0.01) {
        dragVelocity.current *= dragVelocityDecay;
      } else if (!isDragging.current) {
        dragVelocity.current = 0;
      }
    }

    baseOffset.set(baseOffset.get() + moveBy);
  });

  // Pointer handlers for dragging.
  const lastPointerPosition = React.useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    if (grabCursor) e.currentTarget.style.cursor = "grabbing";

    isDragging.current = true;
    lastPointerPosition.current = { x: e.clientX, y: e.clientY };
    dragVelocity.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable || !isDragging.current) return;

    const deltaX = e.clientX - lastPointerPosition.current.x;
    const deltaY = e.clientY - lastPointerPosition.current.y;

    // Moving right pushes items forward along the path, left pulls them back.
    const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    dragVelocity.current =
      (deltaX > 0 ? magnitude : -magnitude) * dragSensitivity;

    lastPointerPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    isDragging.current = false;
    if (grabCursor) e.currentTarget.style.cursor = "grab";
  };

  return (
    <div
      ref={container}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={cn("relative", draggable && grabCursor && "cursor-grab", className)}
      // Let the page still scroll vertically when dragging sideways on touch screens.
      style={{ touchAction: draggable ? "pan-y" : undefined }}
    >
      <div
        ref={marqueeContainerRef}
        className="relative"
        style={{ contain: "layout style" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={viewBox}
          preserveAspectRatio={preserveAspectRatio}
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            id={id}
            d={path}
            stroke={showPath ? "currentColor" : "none"}
            fill="none"
          />
        </svg>

        {items.map(({ child, repeatIndex, itemIndex, key }) => (
          <MarqueeItem
            key={key}
            baseOffset={baseOffset}
            itemIndex={itemIndex}
            total={items.length}
            path={path}
            easing={easing}
            rollingZIndex={enableRollingZIndex}
            zIndexBase={zIndexBase}
            zIndexRange={zIndexRange}
            grab={draggable && grabCursor}
            hidden={repeatIndex > 0}
            onHover={(hovered) => {
              isHovered.current = hovered;
            }}
          >
            {child}
          </MarqueeItem>
        ))}
      </div>
    </div>
  );
};

export default MarqueeAlongSvgPath;