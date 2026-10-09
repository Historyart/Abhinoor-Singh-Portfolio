import { useParams, Link } from "react-router-dom";
import SiteNav from "@/components/portfolio/SiteNav";
import { projects } from "@/lib/projects";

function cellPos(n: number) {
  const row = Math.ceil(n / 6);
  const col = ((n - 1) % 6) + 1;
  return { col, row };
}

export default function ProjectsDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
        <SiteNav />
        <main className="px-6 py-32 text-center sm:px-10 lg:px-20">
          <p className="font-satoshi text-xl text-black">Project not found.</p>
          <Link to="/projects" className="underline">
            Back to projects
          </Link>
        </main>
      </div>
    );
  }

  const absorbed = new Set([14, 15, 19, 20, 21, 17, 18]);

  const plainCells = Array.from({ length: 30 }, (_, i) => i + 1).filter(
    (n) => !absorbed.has(n) && n !== 13 && n !== 16,
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

      <main className="flex flex-col gap-16 px-6 pb-32 sm:px-10 lg:px-20">
        {/* Part 1 — head (solid rectangle) */}
        <section className="flex flex-col gap-10">
          <div className="aspect-[1760/480] w-full bg-portfolio-gray200" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
            <h1 className="flex-none whitespace-nowrap font-melodrama text-[clamp(3rem,11.88vw,14.25rem)] font-medium leading-none tracking-[0.01em] text-portfolio-ink">
              {project.name}
            </h1>

            <p className="min-w-0 flex-1 font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
              {project.description}
            </p>
          </div>
        </section>

        {/* Part 2 — grid: merge A stays solid, grid cells are transparent */}
        <section className="grid grid-cols-6 gap-x-[21px] gap-y-[22px]">
          {/* Merge A (cells 13,14,15,19,20,21) — stays SOLID */}
          <div
            className="bg-portfolio-gray200"
            style={{ gridColumn: "1 / span 3", gridRow: "3 / span 2" }}
          />

          {/* Merge B spot (cells 16,17,18) — no background, paragraph only */}
          <div
            className="flex items-center"
            style={{ gridColumn: "4 / span 3", gridRow: "3 / span 1" }}
          >
            <p className="font-satoshi text-[20px] font-normal leading-[2.15] tracking-[0.02em] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* All other grid cells — TRANSPARENT (bg opacity 0) */}
          {plainCells.map((n) => {
            const { col, row } = cellPos(n);
            return (
              <div
                key={n}
                className="relative aspect-[275.66/142.22] w-full overflow-hidden bg-portfolio-gray200/20"
                style={{ gridColumn: col, gridRow: row }}
              >
                {n === 1 && (
                  <p className="absolute left-0 top-0 whitespace-nowrap p-4 font-satoshi text-[40px] font-medium leading-tight tracking-[0.012em] text-black">
                    Lorem Ipsum
                  </p>
                )}

                {n === 7 && (
                  <div className="flex h-full w-full flex-col justify-center gap-1 p-4 font-satoshi text-[33px] font-medium leading-tight tracking-[0.012em] text-black">
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                  </div>
                )}

                {(n === 10 || n === 11 || n === 12) && (
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="font-satoshi text-[80px] font-medium leading-none tracking-[0.012em] text-black">
                      Lor
                    </p>
                  </div>
                )}

                {n === 23 && (
                  <p className="absolute bottom-0 left-0 whitespace-nowrap p-4 font-satoshi text-[40px] font-medium leading-tight tracking-[0.012em] text-black">
                    Lorem Ipsum
                  </p>
                )}
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}