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
      {/* Footer */}
      <footer
        id="footer"
        className="relative w-full bg-[#D9D9D9] px-[100px] pt-[100px] pb-[100px]"
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
          {/* Let's Talk */}
          <div className="flex flex-col gap-[90px]">
            <h2 className="font-satoshi text-[141px] font-medium leading-[150px] tracking-normal text-black">
              LET’S TALK
            </h2>

            {/* Links */}
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
            {/* Copyright */}
            <p className="m-0 font-satoshi text-[20px] font-normal leading-[40px] tracking-[0.03em] text-black">
              © 2026 ABHINOOR SINGH
            </p>

            {/* Designed and developed */}
            <p className="m-0 font-satoshi text-[20px] font-normal leading-[40px] tracking-[0.03em] text-black">
              Designed and Developed
              <br />
              by{" "}
              <span className="font-bold">
                Abhinoor Singh
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}