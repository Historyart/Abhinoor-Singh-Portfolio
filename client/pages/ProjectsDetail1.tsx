import { useParams, Link } from "react-router-dom";
import SiteNav from "@/components/portfolio/SiteNav";
import { projects } from "@/lib/projects";
import { useLayoutEffect, useRef, useState } from "react";

function cellPos(n: number) {
  const row = Math.ceil(n / 6);
  const col = ((n - 1) % 6) + 1;
  return { col, row };
}
const loopItems = ["Daily Routines", "Health Tracking", "Task Management"];
export default function ProjectsDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
    const gridRef = useRef<HTMLElement>(null);
  const [gridBox, setGridBox] = useState({ w: 0, h: 0 });
  const [cellOffsets, setCellOffsets] = useState<
    Record<number, { x: number; y: number }>
  >({});

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const measure = () => {
      const g = grid.getBoundingClientRect();
      const next: Record<number, { x: number; y: number }> = {};
      grid.querySelectorAll<HTMLElement>("[data-cell]").forEach((el) => {
        const r = el.getBoundingClientRect();
        next[Number(el.dataset.cell)] = { x: r.left - g.left, y: r.top - g.top };
      });
      setGridBox({ w: g.width, h: g.height });
      setCellOffsets(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
        <SiteNav />
        <main className="px-6 py-32 text-center sm:px-10 lg:px-20">
          <p className="font-satoshi text-xl text-black">
            Project not found.
          </p>
          <Link to="/projects" className="underline">
            Back to projects
          </Link>
        </main>
      </div>
    );
  }

  const absorbed = new Set([14, 15, 19, 20, 21, 17, 18]);

  const plainCells = Array.from({ length: 30 }, (_, i) => i + 1).filter(
    (n) => !absorbed.has(n) && n !== 13 && n !== 16
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

      <main className="flex flex-col gap-16 px-6 pb-32 sm:px-10 lg:px-20">

        {/* Part 1 — Project Header */}
        <section className="flex flex-col gap-10">
                    <img
            src="/images/pawplanner-banner.png"
            alt="PawPlanner banner"
            className="aspect-[1760/480] w-full rounded-[20px] bg-portfolio-gray200 object-cover object-center"
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
            <h1 className="flex-none whitespace-nowrap font-melodrama text-[clamp(3rem,11.88vw,14.25rem)] font-medium leading-none tracking-[0.01em] text-portfolio-ink">
              {project.name}
            </h1>

            <p className="min-w-0 flex-1 font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
              PawPlanner is a dog-care companion designed to bring everyday pet responsibilities into one organised space. It helps owners manage daily routines, schedule recurring tasks, maintain health and vaccination records, and track walks and activities. Designed with first-time and busy dog parents in mind, it aims to make caring for a dog more manageable and less overwhelming. Explore the Figma Design
            </p>
          </div>
        </section>

        {/* Part 2 — Project Overview Grid */}
        <section
          ref={gridRef}
          className="grid grid-cols-6 gap-x-[21px] gap-y-[22px]"
        >
          {/* Large visual — cells 13, 14, 15, 19, 20, 21 */}
                    <img
            src="/images/pawplanner-overview.png"
            alt="PawPlanner interface"
            className="h-full w-full rounded-[20px] bg-portfolio-gray200 object-cover object-center"
            style={{ gridColumn: "1 / span 3", gridRow: "3 / span 2" }}
          />

          {/* Overview paragraph — cells 16, 17, 18 */}
          <div
            className="flex items-center"
            style={{ gridColumn: "4 / span 3", gridRow: "3 / span 1" }}
          >
            <p className="font-satoshi text-[20px] font-normal leading-[2.15] tracking-[0.02em] text-black">
              Caring for a dog involves juggling multiple responsibilities, from remembering feeding times and walks to keeping track of vaccinations, grooming, and vet visits. These details can easily become scattered across notes, reminders, and separate apps. Existing solutions may address individual needs, but owners can still lack a single, cohesive place to manage their dog's everyday care and maintain a consistent routine.
            </p>
          </div>

          {/* Other grid cells */}
                    {plainCells.map((n) => {
            const { col, row } = cellPos(n);
            const off = cellOffsets[n];

            return (
              <div
                key={n}
                data-cell={n}
                className="relative aspect-[275.66/142.22] w-full overflow-hidden rounded-[20px] bg-portfolio-gray200/20"
                style={{ gridColumn: col, gridRow: row }}
              >
                {off && gridBox.w > 0 && (
                  <img
  src="/images/pawplanner-grid.jpg"
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute max-w-none object-cover opacity-40"
  style={{
    width: gridBox.w,
    height: gridBox.h,
    left: -off.x,
    top: -off.y,
  }}
/>
                )}

                {n === 1 && (
                  <p className="absolute left-0 top-0 p-4 font-satoshi text-[clamp(20px,2.08vw,40px)] font-medium leading-tight tracking-[0.012em] text-black">
                    THE
                    <br />
                    PROBLEM
                  </p>
                )}

                {n === 7 && (
                  <div className="relative h-full w-full overflow-hidden px-4 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                    <div className="vertical-loop flex flex-col font-satoshi text-[clamp(14px,1.35vw,26px)] font-medium tracking-[0.012em] text-black">
                      {[...loopItems, ...loopItems].map((text, i) => (
                        <p
                          key={i}
                          className="flex h-[2.2em] flex-none items-center whitespace-nowrap"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

                {/* Part 3 — User Research */}
        <section className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-[clamp(2rem,4.48vw,86px)]">
          {/* Left side: title + paragraph */}
          <div className="flex min-w-0 flex-1 flex-col gap-12">
            <h2 className="whitespace-nowrap font-satoshi text-[clamp(1.5rem,4.2vw,80px)] font-medium leading-[1.064] tracking-normal text-black">
              User Research
            </h2>

            <p className="font-satoshi text-[20px] font-normal leading-[43px] tracking-[0.02em] text-black">
To understand the existing pet-care ecosystem, I studied apps like Vetic, Sploot, PetBacker, and Woofz, exploring their core features and approaches to supporting pet owners. Vetic inspired the health-record and preventive-care aspects, Sploot highlighted the convenience of accessing pet services, PetBacker demonstrated the value of reliable pet-care support, and Woofz offered ideas around structured routines and activity tracking.
This research helped me identify an opportunity to focus PawPlanner on everyday dog-care management, bringing recurring tasks, personalised routines, and essential health information together in one organised experience. Rather than centring the product around bookings or training alone, I wanted to make daily care simpler and more manageable, especially for first-time dog owners.
            </p>
          </div>

                    {/* Right side: 2 x 2 grid, each block 240 x 200, 40px gaps */}
          <div className="grid w-full flex-none grid-cols-2 gap-[clamp(1rem,2.08vw,40px)] lg:w-[29.55%]">
            <img
              src="/images/vetic.png"
              alt="Vetic"
              className="aspect-[240/200] w-full rounded-[20px] bg-transparent object-cover"
            />
            <img
              src="/images/research-4.png"
              alt="Research reference"
              className="aspect-[240/200] w-full rounded-[20px] bg-transparent object-cover"
            />
            <img
              src="/images/woofz.png"
              alt="Woofz"
              className="aspect-[240/200] w-full rounded-[20px] bg-transparent object-cover"
            />
            <img
              src="/images/sploot.png"
              alt="Sploot"
              className="aspect-[240/200] w-full rounded-[20px] bg-transparent object-cover"
            />
          </div>
        </section>

        {/* Part 4 — Design Process */}
        <section className="flex flex-col gap-10 [--g:clamp(1rem,4.48vw,86px)] lg:flex-row lg:items-end lg:gap-[var(--g)]">

          {/* Left side */}
          <div className="flex flex-1 flex-col gap-12">
            <h2 className="whitespace-nowrap font-satoshi text-[clamp(1.5rem,4.2vw,80px)] font-medium leading-[1.064] tracking-normal text-black">
              Designed around dog care
            </h2>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-[var(--g)]">

              {/* Paragraph and two smaller visuals */}
              <div className="flex flex-1 flex-col gap-12">
                <p className="font-satoshi text-[20px] font-normal leading-[43px] tracking-[0.02em] text-black">
                  PawPlanner approaches these challenges by bringing routine planning, recurring reminders, health records, and activity tracking into one connected experience. Rather than treating each responsibility as a separate task, the design brings essential care information together around the dog's daily needs. Customisable routines help owners organise their schedules, while dedicated health records keep important information accessible. The goal is to reduce the effort of staying organised and make consistent care easier to maintain.
                </p>

                <div className="flex items-end gap-[var(--g)]">
                  <div className="aspect-[309.13/250] flex-1 overflow-hidden rounded-[20px] bg-[#FFEEDF]">
  <img
    src="/images/vector.png"
    alt="Vector"
    className="h-full w-full object-contain object-center p-4"
  />
</div>

                  <div className="aspect-[309.42/400] flex-1 rounded-[20px] bg-portfolio-gray200">
                    {/* Add wireframes or design explorations here */}
                  </div>
                </div>
              </div>

              {/* Tall visual */}
              <div className="aspect-[309.13/600] w-full flex-none overflow-hidden rounded-[20px] bg-[#FFEEDF] lg:w-[28.08%]">
  <img
  src="/images/iphone-16-pro.png"
  alt="iPhone 16 Pro mockup"
  className="h-full w-full scale-[1.7] object-contain object-center p-4"
/>
</div>
            </div>
          </div>

          {/* Large visual on the right */}
          <div className="aspect-[520/840] w-full flex-none overflow-hidden rounded-[20px] bg-portfolio-gray200 lg:w-[29.55%]">
  <img
    src="/images/hand-iphone-16-pro.png"
    alt="Hand holding an iPhone 16 Pro"
    className="h-full w-full object-cover object-center"
  />
</div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="footer"
        className="relative w-full bg-[#D9D9D9] px-[100px] pb-[100px] pt-[100px]"
      >
        {/* Back to top */}
        <div className="absolute right-[100px] top-[100px] flex items-center gap-5">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="group flex items-center gap-5 border-0 bg-transparent p-0"
            aria-label="Back to top"
          >
            <span className="font-satoshi text-[33px] font-bold leading-[40px] tracking-[0.05em] text-black">
              BACK TO TOP
            </span>

            <span className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#A49B9D]">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M19 30V8"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M8 19L19 8L30 19"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col gap-[90px]">
          <div className="flex flex-col gap-[90px]">
            <h2 className="font-satoshi text-[141px] font-medium leading-[150px] tracking-normal text-black">
              LET’S TALK
            </h2>

            <div className="flex items-start gap-[35px]">
              <a
                href="#"
                className="w-fit border-b border-black pb-[20px] font-satoshi text-[22px] font-normal leading-[58px] tracking-[0.02em] text-black no-underline"
              >
                GitHub
              </a>

              <a
                href="#"
                className="w-fit border-b border-black pb-[20px] font-satoshi text-[22px] font-normal leading-[58px] tracking-[0.02em] text-black no-underline"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="w-fit border-b border-black pb-[20px] font-satoshi text-[22px] font-normal leading-[58px] tracking-[0.02em] text-black no-underline"
              >
                Resume
              </a>

              <a
                href="#"
                className="w-fit border-b border-black pb-[20px] font-satoshi text-[22px] font-normal leading-[58px] tracking-[0.02em] text-black no-underline"
              >
                Mail
              </a>
            </div>
          </div>

          {/* Bottom information */}
          <div className="flex items-end justify-between">
            <p className="m-0 font-satoshi text-[20px] font-normal leading-[40px] tracking-[0.03em] text-black">
              © 2026 ABHINOOR SINGH
            </p>

            <p className="m-0 font-satoshi text-[20px] font-normal leading-[40px] tracking-[0.03em] text-black">
              Designed and Developed
              <br />
              by <span className="font-bold">Abhinoor Singh</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}