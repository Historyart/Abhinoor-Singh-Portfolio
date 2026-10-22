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
      
    </div>
  );
}