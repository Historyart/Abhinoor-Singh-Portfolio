import SiteNav from "@/components/portfolio/SiteNav";

const block =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const aboutText =
  block.repeat(5) +
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const tail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const sub1Text = block.repeat(3) + tail;
const sub2Text = block.repeat(2) + tail;
const TEXT =
  "font-satoshi text-[20px] font-normal leading-[42px] tracking-[0.02em] text-black/80";  

export default function AboutMe() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

      {/* Banner: full width, 480px tall on laptop and desktop */}
      <div className="h-[220px] w-full bg-portfolio-gray100 sm:h-[320px] lg:h-[480px]" />

      <main className="flex flex-col gap-10 px-6 pb-32 pt-8 sm:px-10 lg:px-20">
        {/* Name + role */}
        <section className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <h1 className="whitespace-nowrap font-melodrama text-[clamp(2.25rem,7.34vw,141px)] font-normal leading-[1.064] text-portfolio-ink">
            ABHINOOR SINGH
          </h1>

          <p className="whitespace-nowrap font-melodrama text-[clamp(1.75rem,5.21vw,100px)] font-normal leading-[1.5] text-portfolio-ink">
            Designer
          </p>
        </section>

        {/* Text (left) + 640 x 480 rectangle (right) */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_36.36%] lg:items-start lg:gap-x-[clamp(2rem,4.48vw,86px)]">
          <p className="font-satoshi text-[20px] font-normal leading-[42px] tracking-[0.02em] text-black/80">
            {aboutText}
          </p>

          <div className="aspect-[640/480] w-full rounded-[20px] bg-portfolio-gray100" />
        </section>

                {/* More sections: three sub-sections, 80px apart */}
        <section className="flex flex-col gap-10 lg:mt-10 lg:gap-20">
          {/* 1: 479 x 280 rectangle + text, 80px apart */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[27.22%_minmax(0,1fr)] lg:items-start lg:gap-x-[clamp(2rem,4.17vw,80px)]">
            <div className="aspect-[479/280] w-full rounded-[20px] bg-portfolio-gray100" />
            <p className={TEXT}>{sub1Text}</p>
          </div>

          {/* 2: text + two 560 x 400 rectangles, 60px apart */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_31.82%_31.82%] lg:items-start lg:gap-x-[clamp(1.5rem,3.125vw,60px)]">
            <p className={TEXT}>{sub2Text}</p>
            <div className="aspect-[560/400] w-full rounded-[20px] bg-portfolio-gray100" />
            <div className="aspect-[560/400] w-full rounded-[20px] bg-portfolio-gray100" />
          </div>

          {/* 3: 479 x 400 and 1199 x 400 rectangles, 80px apart */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[27.22%_minmax(0,1fr)] lg:gap-x-[clamp(2rem,4.17vw,80px)]">
            <div className="aspect-[479/400] w-full rounded-[20px] bg-portfolio-gray100 lg:self-start" />
            <div className="aspect-[1199/400] w-full rounded-[20px] bg-portfolio-gray100 lg:aspect-auto lg:h-full" />
          </div>
        </section>

      </main>
    </div>
  );
}