import SiteNav from "@/components/portfolio/SiteNav";
import ProjectCard from "@/components/portfolio/projectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />
      <main className="flex flex-col gap-24 px-6 pb-32 sm:px-10 lg:px-20">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </main>
    </div>
  );
}