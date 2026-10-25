import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowButtonProps {
  text?: string;
  to?: string; // internal route -> <Link>
  href?: string; // external URL -> <a>
  onClick?: React.MouseEventHandler;
  className?: string;
}

export default function FlowButton({
  text = "KNOW MORE",
  to,
  href,
  onClick,
  className,
}: FlowButtonProps) {
  const classes = cn(
    "w-fit flex-none font-satoshi text-xl tracking-[0.02em] text-black no-underline",
    "sm:text-2xl lg:text-[clamp(1.25rem,1.72vw,33px)]",
    "group relative inline-flex items-center overflow-hidden",
    "rounded-full border-[1.5px] border-black px-[1.6em] py-[0.7em] leading-none",
    "transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
    "hover:rounded-[12px] hover:text-white active:scale-[0.97]",
    className
  );

  const inner = (
    <>
      <ArrowRight className="absolute left-[-25%] z-[9] h-[1em] w-[1em] stroke-black transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-[1em] group-hover:stroke-white" />

      <span className="relative z-[1] -translate-x-[0.5em] transition-transform duration-[800ms] ease-out group-hover:translate-x-[0.9em]">
        {text}
      </span>

      <span className="absolute left-1/2 top-1/2 aspect-square w-[130%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-black transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100" />

      <ArrowRight className="absolute right-[1em] z-[9] h-[1em] w-[1em] stroke-black transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:stroke-white" />
    </>
  );

  if (to)
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  return (
    <button type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}