import SiteNav from "@/components/portfolio/SiteNav";
import { projects } from "@/lib/projects";
import RingCarousel from "@/components/portfolio/RingCarousel";

// Which project this page shows (title + description come from lib/projects.ts).
const PROJECT_SLUG = "project-three";

// Shared two-column row: left column flexible, right column 664 / 1760 of the width.
const ROW =
  "grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_37.73%] lg:items-start lg:gap-x-8";

const part2Text =
  "SWASS is an eco-tech society focused on environmental awareness, sustainability, and recycling. As a member of its design team, I created visual assets to communicate the society's initiatives and support its events and activities. I also contributed to the society's website, helping bring its identity and work to life in a digital format.";
const part3Text =
  "As Design Lead at Quantum Quorum, I worked on editorial design and visual communication for the society. My contributions included designing magazine covers, working on magazine layouts, and overseeing design assets for various events organised by the society. The role allowed me to combine creative exploration with design coordination, ensuring visual consistency across different projects.";


export default function ProjectsDetail3() {
  const project = projects.find((p) => p.slug === PROJECT_SLUG);

  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

      <main className="flex flex-col gap-20 px-6 pb-32 sm:px-10 lg:px-20">
        {/* Part 1 — banner, title, description */}
        <section className="flex flex-col gap-10">
<img
  src="/images/college-banner.png"
  alt="College banner"
  className="aspect-[1760/480] w-full rounded-[20px] bg-portfolio-gray200 object-cover object-center"
/>
          <div className={ROW}>
            <h1 className="whitespace-nowrap font-melodrama text-[clamp(3rem,11.88vw,14.25rem)] font-medium leading-none tracking-[0.01em] text-portfolio-ink">
              College
            </h1>

            <p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
              During college, I was part of two student societies, contributing to their design teams and creating visual assets for various events. My work included posters, ID cards, event banners, and other promotional materials, giving me opportunities to explore graphic design and visual communication beyond digital products.
            </p>
          </div>
        </section>

                {/* Part 2 — heading + text (left), 697 x 413 rectangle (right) */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_39.6%] lg:items-start lg:gap-x-[clamp(2rem,4.48vw,86px)]">
          {/* Left: heading, then text */}
          <div className="flex flex-col gap-10">
            <h2 className="whitespace-nowrap font-satoshi text-[clamp(1.5rem,4.2vw,80px)] font-medium leading-[1.064] tracking-normal text-black">
              SWASS
            </h2>

            <p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
  {part2Text}
</p>

<a
  href="https://swaas-gtbit.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-fit border-b border-black pb-3 font-satoshi text-xl tracking-[0.02em] text-black no-underline transition-opacity hover:opacity-60 sm:text-2xl lg:pb-[20px] lg:text-[33px]"
>
  VISIT THERE WEBSITE
</a>
          </div>

          {/* Right: 697 x 413 */}
<img
  src="/images/swass-website.png"
  alt="SWASS website screenshot"
  className="h-auto w-full rounded-[20px]"
/>
        </section>

                {/* Part 3 — heading, text, wide rectangle */}
        <section className="flex flex-col gap-10">
          <h2 className="whitespace-nowrap text-center font-satoshi text-[clamp(1.5rem,4.2vw,80px)] font-medium leading-[1.064] tracking-normal text-black">
            QUANTUM QUORUM
          </h2>

          <p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
  {part3Text}
</p>

          {/* 1794 x 440 */}
<RingCarousel
  images={Array.from({ length: 21 }, (_, i) => `/images/ring/${i + 1}.jpg`)}
  cardSize={0.46}
  className="-mx-6 aspect-[4/3] sm:-mx-10 lg:-mx-20 lg:aspect-[1920/682]"
/>

</section>

      </main>
    </div>
  );
}