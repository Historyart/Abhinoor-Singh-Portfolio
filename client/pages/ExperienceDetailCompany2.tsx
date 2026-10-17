import SiteNav from "@/components/portfolio/SiteNav";
import HeroSlideshow from "@/components/portfolio/HeroSlideshow";

export default function ExperienceDetailCompany2() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

      <main className="flex flex-col gap-24 px-6 pb-32 sm:px-10 lg:px-20">
        {/* Part 1 — hero block, no "Know more" */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <HeroSlideshow
  slides={[
    { src: "/images/macbook-air-1.png", alt: "MacBook Air 15 inch mockup 1" },
    { src: "/images/macbook-air-2.png", alt: "MacBook Air 15 inch mockup 2" },
  ]}
  bgClassName="bg-[#F1DBC5]"
  className="aspect-[880/580] w-full flex-none rounded-[20px] lg:w-[45.8%] lg:max-w-[880px]"
/>

          <div className="flex flex-1 flex-col justify-between gap-8 lg:gap-0">
            <h2 className="whitespace-pre-line text-right font-melodrama text-[clamp(2.5rem,7.34vw,8.8125rem)] font-medium leading-[1.06] tracking-[0.012em] text-portfolio-ink">
    Akdenar Labs
</h2>

            <p className="whitespace-nowrap text-right font-satoshi text-[clamp(1.25rem,2.4vw,2.875rem)] font-medium leading-[1.087] tracking-[0.012em] text-black">
              Duration
              <br />
              4 months
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
  At Akdenar Labs, I worked as a UI/UX Designer on Deshmitra, a multi-sided commerce platform, collaborating with a design team to create experiences for sellers, administrators, and buyers. My work involved designing desktop and mobile interfaces, structuring information, and creating interactive prototypes. I contributed to different areas of the platform, including brand and warehouse management, advertisements and promotions, product discovery, and purchasing workflows.
</p>

<p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
  On the seller side, I designed interfaces for Brand Management and Warehouse Management, focusing on clear data organization and efficient task completion. I worked on structuring layouts that helped sellers manage products, inventory, and brand-related information while creating interactive prototypes to demonstrate key workflows.
</p>

<p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
  On the buyer side, I designed product listing and product detail pages, along with the complete purchasing journey, profile management, and order history. I also contributed to the admin side by designing Ads and Promotions management pages in collaboration with the design team. Throughout the project, I focused on creating intuitive, responsive, and consistent interfaces that supported the needs of different users across the platform.
</p>
            </div>
          </div>

          <HeroSlideshow
  slides={[
    { src: "/images/home-2.png", alt: "Home screen" },
    { src: "/images/product.png", alt: "Product screen" },
    { src: "/images/cart.png", alt: "Cart screen" },
  ]}
  imgClassName="object-cover object-top"
  className="aspect-[1440/1400] w-full flex-none rounded-[20px] lg:w-[52.08%] lg:max-w-[1000px] lg:self-start"
/>
        </section>

        {/* Part 3 — rectangle (left) + Technologies used (right) */}
<section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
  <HeroSlideshow
  slides={[
    { src: "/images/mac-studio.png", alt: "Mac Studio mockup" },
    { src: "/images/imac-24-2.png", alt: "iMac 24 inch mockup" },
  ]}
  bgClassName="bg-[#F1DBC5]"
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
          Figma was my primary tool for designing interfaces across the seller, admin, and buyer sides of Deshmitra. I used it to create wireframes, develop high-fidelity designs, organize interface components, and build interactive prototypes for desktop and mobile experiences.
        </p>
        <p>
          Working in Figma also allowed me to collaborate with the design team, refine layouts, and maintain consistency across different sections of the platform. From designing management dashboards to developing responsive shopping experiences, I used the tool to translate product requirements into structured, user-friendly interfaces and communicate design solutions effectively.
        </p>
      </div>

      {/* Single rectangle */}
      <div className="lg:w-[280px] lg:flex-none">
        <video
          src="/images/figma-motion.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="aspect-[280/275] w-full max-w-[280px] rounded-[20px] bg-portfolio-gray200 object-cover"
        />
      </div>
    </div>
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