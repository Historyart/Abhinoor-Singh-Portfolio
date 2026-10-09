import { Link } from "react-router-dom";

export default function ProjectCard({
  slug,
  name,
  description,
}: {
  slug: string;
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <div className="relative aspect-[1760/480] w-full bg-portfolio-gray200">
        <h2 className="absolute bottom-0 left-0 font-melodrama text-[15vw] font-medium leading-[0.85] tracking-[0.01em] text-portfolio-ink lg:bottom-0 lg:text-[228px] lg:tracking-[0.01em]">
          {name}
        </h2>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        <div className="flex-none">
          <Link
            to={`/projects/${slug}`}
            className="w-fit border-b border-black pb-[20px] font-satoshi text-[22px] font-normal leading-[58px] tracking-[0.02em] text-black no-underline"
          >
            KNOW MORE
          </Link>
        </div>

        <p className="flex-1 font-satoshi text-[20px] font-normal leading-[31px] tracking-[0.02em] text-black/80 lg:max-w-[760px]">
          {description}
        </p>
      </div>
    </div>
  );
}