import { projects } from "@/lib/projects";
import FlowButton from "@/components/ui/flow-button";

export default function ProjectCard({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  const name = project?.name ?? slug;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-portfolio-gray200 sm:aspect-[16/9] md:aspect-[1760/480]">
      {project?.image && (
        <img
          src={project.image}
          alt={`${name} banner`}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />
      )}

      {/* Black tint: strongest at the bottom, fading upward */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Phone/tablet: name with KNOW MORE below it. Desktop (md+): name left, button right. */}
      <div className="absolute inset-0 flex flex-col items-start justify-end gap-5 px-6 pb-6 sm:px-8 sm:pb-8 md:flex-row md:items-end md:justify-between md:gap-6">
        <h2 className="whitespace-nowrap font-melodrama text-[clamp(2.5rem,12vw,5rem)] font-medium leading-none tracking-[0.01em] text-white md:text-[clamp(3rem,11.88vw,14.25rem)]">
          {name}
        </h2>

        <FlowButton
  text="KNOW MORE"
  to={`/projects/${slug}`}
  className="border-white text-white [&_svg]:stroke-white"
/>

      </div>
    </div>
  );
}