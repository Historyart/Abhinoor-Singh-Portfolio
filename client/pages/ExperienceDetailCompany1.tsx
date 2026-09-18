import SiteNav from "@/components/portfolio/SiteNav";

export default function ExperienceDetailCompany1() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

      <main className="flex flex-col gap-24 px-6 pb-32 sm:px-10 lg:px-20">
        {/* Part 1 — hero block, no "Know more" */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="aspect-[880/580] w-full flex-none bg-portfolio-gray200 lg:w-[45.8%] lg:max-w-[880px]" />

          <div className="flex flex-1 flex-col justify-between gap-8 lg:gap-0">
            <h2 className="text-right font-melodrama text-[clamp(2.5rem,7.34vw,8.8125rem)] font-medium leading-[1.06] tracking-[0.012em] text-portfolio-ink">
              NeuSpaarX Tehnologies Pvt Ltd.
            </h2>

            <p className="whitespace-nowrap text-right font-satoshi text-[clamp(1.25rem,2.4vw,2.875rem)] font-medium leading-[1.087] tracking-[0.012em] text-black">
              Duration
              <br />
              Lorem Ipsum
            </p>
          </div>
        </div>

        {/* Part 2 — Task performed (left) + image (right) */}
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex-1">
            <h3 className="font-satoshi text-[clamp(1.75rem,2.4vw,2.875rem)] font-medium leading-[1.087] tracking-[0.012em] text-black">
              Task I have performed
            </h3>

            <div className="mt-10 flex flex-col gap-10">
              <p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>

              <p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>

          <div className="aspect-[1000/487] w-full flex-none bg-portfolio-gray200 lg:w-[52.08%] lg:max-w-[1000px]" />
        </section>

        {/* Part 3 — rectangle (left) + Technologies used (right) */}
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="aspect-[680/487] w-full flex-none bg-portfolio-gray200 lg:w-[35.42%] lg:max-w-[680px]" />

          <div className="flex flex-1 flex-col gap-10 lg:gap-[106px]">
            <h3 className="font-satoshi text-[clamp(1.75rem,2.4vw,2.875rem)] font-medium leading-[1.087] tracking-[0.012em] text-black">
              Technologies used
            </h3>

            <div className="flex gap-8 lg:gap-[57px]">
              <div className="aspect-[295.36/348] max-w-[295.36px] flex-1 bg-portfolio-gray200" />
              <div className="aspect-[295.36/348] max-w-[295.36px] flex-1 bg-portfolio-gray200" />
              <div className="aspect-[295.36/348] max-w-[295.36px] flex-1 bg-portfolio-gray200" />
            </div>
          </div>
        </section>

        {/* Part 4 — left cluster (big rect + 2 smaller) + right tall rect */}
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-10">
          <div className="flex flex-1 flex-col gap-10">
            <div className="aspect-[1061/727] w-full bg-portfolio-gray200" />

            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="aspect-[356/561] w-full flex-none bg-portfolio-gray200 lg:w-[33.55%] lg:max-w-[356px]" />
              <div className="aspect-[665/561] w-full flex-1 bg-portfolio-gray200" />
            </div>
          </div>

          <div className="aspect-[648/1327] w-full flex-none bg-portfolio-gray200 lg:w-[33.75%] lg:max-w-[648px]" />
        </section>
      </main>
    </div>
  );
}