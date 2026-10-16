import SiteNav from "@/components/portfolio/SiteNav";
import HeroSlideshow from "@/components/portfolio/HeroSlideshow";

export default function ExperienceDetailCompany1() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

      <main className="flex flex-col gap-24 px-6 pb-32 sm:px-10 lg:px-20">
        {/* Part 1 — hero block, no "Know more" */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <HeroSlideshow
            slides={[
              { src: "/images/imac-24.png", alt: "iMac 24 inch mockup" },
              { src: "/images/nokia-xr21.png", alt: "Nokia XR21 mockup" },
            ]}
            bgClassName="bg-[#ECF1C4]"
            className="aspect-[880/580] w-full flex-none rounded-[20px] lg:w-[45.8%] lg:max-w-[880px]"
          />

          <div className="flex flex-1 flex-col justify-between gap-8 lg:gap-0">
            <h2 className="text-right font-melodrama text-[clamp(2.5rem,7.34vw,8.8125rem)] font-medium leading-[1.06] tracking-[0.012em] text-portfolio-ink">
              NeuSpaarX Technologies Pvt Ltd.
            </h2>

            <p className="whitespace-nowrap text-right font-satoshi text-[clamp(1.25rem,2.4vw,2.875rem)] font-medium leading-[1.087] tracking-[0.012em] text-black">
              Duration
              <br />
              6 months
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
  At Zensoma, I worked across web applications, dashboards,
  landing pages, and mobile applications, translating ideas and
  requirements into thoughtful digital experiences. My work
  spanned the design process, from structuring information and
  mapping user flows to designing intuitive interfaces, building
  interactive prototypes, and developing design systems. I also
  incorporated motion and animations to bring interfaces to life
  while maintaining visual consistency and usability across
  different platforms.
</p>

<p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
  As the sole designer, I took ownership of projects from initial
  concepts to developer handoff. I worked closely with my manager
  and the development team, exploring design solutions, considering
  user needs, and refining interfaces through feedback. I focused
  on creating experiences that balanced visual appeal with
  functionality, clarity, and ease of use.
</p>

<p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
  Beyond individual screens, I considered how users would navigate
  and interact with each product, ensuring that layouts, features,
  and interactions worked together cohesively. From establishing
  reusable design components to prototyping interactions and adding
  subtle motion, I aimed to create consistent, engaging experiences
  while ensuring designs were practical for developers to implement.
</p>
            </div>
          </div>

          <HeroSlideshow
  slides={[
    { src: "/images/task-video.mp4", alt: "Product walkthrough", type: "video" },
    { src: "/images/login-step-3.png", alt: "Log in, step 3" },
    { src: "/images/login-step-4.png", alt: "Log in, step 4" },
    { src: "/images/dashboard.png", alt: "Dashboard" }
  ]}
  imgClassName="object-cover object-top"
  className="aspect-[1440/1400] w-full flex-none rounded-[20px] lg:w-[52.08%] lg:max-w-[1000px] lg:self-start"
/>
        </section>

                {/* Part 3 — rectangle (left) + Technologies used (right) */}
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
<HeroSlideshow
  slides={[
    { src: "/images/dell-xps-1.png", alt: "Dell XPS mockup 1" },
    { src: "/images/dell-xps-3.png", alt: "Dell XPS mockup 3" },
    { src: "/images/dell-xps-2.png", alt: "Dell XPS mockup 2" },
  ]}
  bgClassName="bg-[#ECF1C4]"
  imgClassName="object-contain p-6"
  className="aspect-[680/487] w-full flex-none rounded-[20px] lg:w-[35.42%] lg:max-w-[680px]"
/>
          <div className="flex flex-1 flex-col gap-10">
            <h3 className="font-satoshi text-[clamp(1.75rem,2.4vw,2.875rem)] font-medium leading-[1.087] tracking-[0.012em] text-black">
              Technologies used
            </h3>

            <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:gap-10">
              {/* Text */}
              <div className="flex flex-1 flex-col gap-6 font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
                <p>
                  Figma was my primary tool for designing user interfaces,
                  creating wireframes, mapping user flows, building
                  interactive prototypes, and developing design systems. It
                  allowed me to explore ideas, refine layouts, and create
                  consistent experiences across web and mobile platforms.
                </p>
                <p>
                  I also used Affinity for visual design and graphic assets,
                  refining visual elements to complement the overall
                  interface. Together, these tools helped me translate ideas
                  into polished designs, balancing functionality, visual
                  appeal, and attention to detail.
                </p>
              </div>

              {/* Two staggered rectangles */}
              <div className="grid grid-cols-2 gap-4 lg:w-[55%] lg:min-h-[420px] lg:flex-none lg:gap-0">
                <video
  src="/images/figma-motion.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="aspect-[280/275] w-full max-w-[280px] self-start rounded-[20px] bg-portfolio-gray200 object-cover"
/>
<video
  src="/images/affinity-motion.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="aspect-[280/275] w-full max-w-[280px] self-end justify-self-end rounded-[20px] bg-portfolio-gray200 object-cover"
/>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4 — left cluster (1 on top, 3 + 4 below) + right tall (2) */}
<section className="grid grid-cols-1 gap-10 lg:grid-cols-[1061fr_648fr]">
  {/* Left cluster */}
  <div className="flex flex-col gap-10">
    {/* 1 — 1061×727 */}
    <div className="aspect-[1061/727] w-full rounded-[20px] bg-portfolio-gray200" />

    {/* 3 + 4 */}
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[356fr_665fr]">
      {/* 3 — 356×561 */}
      <div className="aspect-[356/561] w-full rounded-[20px] bg-portfolio-gray200" />

      {/* 4 — 665×561 (iPhone 13 Pro) */}
<div className="relative aspect-[665/561] w-full overflow-hidden rounded-[20px] bg-[#ECF1C4] lg:aspect-auto">        <img
          src="/images/iphone-13-pro.png"
          alt="iPhone 13 Pro mockup"
          className="absolute inset-0 h-full w-full object-contain object-center p-10"
        />
      </div>
    </div>
  </div>

  {/* 2 — 648×1327 (Android) */}
  <div className="relative aspect-[648/1327] w-full overflow-hidden rounded-[20px] bg-portfolio-gray200 lg:aspect-auto">
    <img
  src="/images/android-compact.png"
  alt="Android app screen"
  className="absolute inset-0 h-full w-full object-cover object-top"
/>
  </div>
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