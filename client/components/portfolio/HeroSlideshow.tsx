import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  type?: "image" | "video";
  fit?: "cover" | "contain";
};

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
  imgClassName = "object-cover",
}: {
  className?: string;
  slides?: Slide[];
  bgClassName?: string;
  imgClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const isVideo = slides[index]?.type === "video";

  // Image slides advance on a timer; video slides advance when the video ends.
  useEffect(() => {
    if (paused || slides.length < 2 || isVideo) return;
    const id = setTimeout(next, INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, paused, isVideo, slides.length]);

  // Play the active video from the start; stop and rewind the others.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        if (paused) video.pause();
        else video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [index, paused]);

  return (
    <div
      className={`relative overflow-hidden ${bgClassName} ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
                        const fitClass =
          slide.fit === "contain"
            ? "object-contain"
            : slide.fit === "cover"
              ? "object-cover"
              : imgClassName;

        const visibility = `absolute inset-0 h-full w-full ${fitClass} transition-opacity duration-700 ${
          i === index ? "opacity-100" : "opacity-0"
        }`;

        return slide.type === "video" ? (
          <video
            key={slide.src}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            src={slide.src}
            muted
            playsInline
            preload="auto"
            loop={slides.length < 2}
            onEnded={next}
            onError={next}
            aria-label={slide.alt}
            className={visibility}
          />
        ) : (
          <img key={slide.src} src={slide.src} alt={slide.alt} className={visibility} />
        );
      })}

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