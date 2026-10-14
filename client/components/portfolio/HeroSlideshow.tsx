import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

const defaultSlides: Slide[] = [
  { src: "/images/macbook-air.png", alt: "MacBook Air mockup" },
  { src: "/images/bode.png", alt: "Bode project" },
  { src: "/images/poster.png", alt: "Poster design" },
];

const INTERVAL_MS = 4000;

export default function HeroSlideshow({
  className = "",
  slides = defaultSlides,
  bgClassName = "bg-portfolio-gray200",
}: {
  className?: string;
  slides?: Slide[];
  bgClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [paused, slides.length]);

    return (
    <div
      className={`relative overflow-hidden ${bgClassName} ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full border border-black/60 p-0 transition-colors ${
                i === index ? "bg-black" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}