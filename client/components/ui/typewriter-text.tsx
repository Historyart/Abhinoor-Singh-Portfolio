import * as React from "react";

export interface TypewriterProps {
  /** One string, or several to cycle through. */
  text: string | string[];
  /** Milliseconds per typed character. */
  speed?: number;
  cursor?: string;
  /** Delete and retype (cycling through `text`) instead of stopping when done. */
  loop?: boolean;
  /** Milliseconds per deleted character. */
  deleteSpeed?: number;
  /** Pause before deleting, in milliseconds. */
  delay?: number;
  className?: string;
}

export function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
}: TypewriterProps) {
  const words = Array.isArray(text) ? text : [text];

  const [wordIndex, setWordIndex] = React.useState(0);
  const [length, setLength] = React.useState(0); // characters currently showing
  const [deleting, setDeleting] = React.useState(false);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const current = words[wordIndex] ?? "";

  React.useEffect(() => {
    if (reduceMotion || !current) return;

    let id: number | undefined;

    if (!deleting) {
      if (length < current.length) {
        id = window.setTimeout(() => setLength((l) => l + 1), speed);
      } else if (loop) {
        id = window.setTimeout(() => setDeleting(true), delay);
      }
    } else if (length > 0) {
      id = window.setTimeout(() => setLength((l) => l - 1), deleteSpeed);
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => window.clearTimeout(id);
  }, [
    length,
    deleting,
    current,
    loop,
    speed,
    deleteSpeed,
    delay,
    words.length,
    reduceMotion,
  ]);

  // People who prefer reduced motion just get the finished text.
  if (reduceMotion) return <span className={className}>{words[0]}</span>;

  return (
    <span className={className}>
      {current.slice(0, length)}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
}

export default Typewriter;