import React from "react";
import SiteNav from "@/components/portfolio/SiteNav";
import HeroSlideshow from "@/components/portfolio/HeroSlideshow";
import HelixGallery from "@/components/portfolio/HelixGallery";
import { Link } from "react-router-dom";
import FlowButton from "@/components/ui/flow-button";

const VINYL_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/ab9bf6eee4fafd16c856cf6e47db1fa9057ad71a?width=700";

const vinylItems = [
  {
    title: "UI/UX INTERN",
    copy: "4-month internship focused on designing digital interfaces, user flows, and product experiences.",
    offset: "",
  },
  {
    title: "UI/UX INTERN",
    copy: "6-month internship working across product interfaces, design systems, and usability.",
    offset: "",
  },
  {
    title: "DESIGN LEAD",
    copy: "Exploring product design through college society projects, design systems, and interface experiments.",
    offset: "",
  },
];


const designSystems = [
  { top: "#2A9D8F", corner: "#264653", side: "#E9C46A" },
  { top: "#F4A261", corner: "#8FA06F", side: "#2A9D8F" },
  { top: "#E63946", corner: "#9A6873", side: "#4D96FF" },
  { top: "#DC6B5E", corner: "#9B9193", side: "#5AB7C7" },
];

function VinylCard({
  title,
  copy,
  offset,
}: {
  title: string;
  copy: string;
  offset: string;
}) {
  return (
    <div
      className={`flex w-full max-w-[350px] flex-col items-start gap-6 sm:gap-8 ${offset}`}
    >
            <img
        src={VINYL_IMG}
        alt=""
        className="vinyl-spin aspect-square w-40 rounded-full object-cover sm:w-52 lg:w-full"
      />

      <div className="flex flex-col gap-2 text-center sm:gap-4">
        <h3 className="font-satoshi text-2xl font-medium tracking-[0.05em] text-black sm:text-4xl lg:text-[38px]">
          {title}
        </h3>

        <p className="font-satoshi text-[20px] leading-relaxed text-black/80">
          {copy}
        </p>
      </div>
    </div>
  );
}

function DesignSystemCard({
  top,
  corner,
  side,
  index,
}: {
  top: string;
  corner: string;
  side: string;
  index: number;
}) {
  const cardContent = [
    {
      title: "DESIGN",
      skills: ["UI/UX", "Product Design", "Wireframing", "Prototyping"],
      applied: ["PawPlanner", "Zensoma"],
    },
    {
      title: "DEVELOPMENT",
      skills: ["HTML / CSS", "JavaScript", "React", "MERN"],
      applied: ["Academic Projects", "Personal Work"],
    },
    {
      title: "DATA",
      skills: ["Python", "SQL", "DBMS", "Data Analysis"],
      applied: ["Academic Projects", "B.Tech Coursework"],
    },
    {
      title: "TOOLS",
      skills: ["Figma", "FigJam", "Git", "GitHub"],
      applied: ["Internships", "Personal Work"],
    },
  ];

  const { title, skills, applied } = cardContent[index];

    return (
    <div className="relative flex w-full min-w-0 flex-col gap-6 border border-black bg-white pb-6 pl-[46px] pr-5 pt-10 sm:gap-10 sm:p-8 sm:pt-12">
      <span
        className="absolute left-0 top-0 h-[30px] w-[30px]"
        style={{ background: corner }}
      />

      <span
        className="absolute left-[30px] right-0 top-0 h-[30px]"
        style={{ background: top }}
      />

      <span
        className="absolute left-0 top-[30px] h-[calc(100%-30px)] w-[30px]"
        style={{ background: side }}
      />

      <h3 className="font-satoshi text-2xl font-bold leading-[1.2] tracking-[0.05em] text-black sm:text-[28px] lg:text-[33px] lg:leading-[40px]">
        {title}
      </h3>

      {/* Columns sit side by side when there's room, and stack when there isn't */}
      <div className="flex flex-wrap gap-x-6 gap-y-6">
        <p className="min-w-0 flex-1 basis-[130px] font-satoshi text-base font-normal leading-[26px] tracking-[0.05em] text-black sm:text-[18px] sm:leading-[28px] lg:text-[20px] lg:leading-[30px]">
          {skills.map((skill, i) => (
            <React.Fragment key={skill}>
              {skill}
              {i < skills.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        <p className="min-w-0 flex-1 basis-[130px] font-satoshi text-base font-normal leading-[26px] tracking-[0.05em] text-black sm:text-[18px] sm:leading-[28px] lg:text-[20px] lg:leading-[30px]">
          <span className="underline">Applied in</span>
          <br />
          {applied.map((item, i) => (
            <React.Fragment key={item}>
              {item}
              {i < applied.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

const pawplannerImages = [
  "/images/pawplanner/1.png",
  "/images/pawplanner/2.png",
  "/images/pawplanner/3.png",
  "/images/pawplanner/4.png",
  "/images/pawplanner/5.png",
  "/images/pawplanner/6.png",
  "/images/pawplanner/7.png",
  "/images/pawplanner/8.png",
  "/images/pawplanner/9.png",
  "/images/pawplanner/10.png",
];

const projectSlides = [
  { src: "/images/projects/slide-1.png", alt: "PawPlanner screen" },
  { src: "/images/projects/slide-2.png", alt: "PawPlanner banner" },
  { src: "/images/projects/slide-3.png", alt: "PawPlanner frame" },
];

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

<main id="home" className="flex flex-col gap-32 px-6 pb-[100px] sm:px-10 md:gap-40 lg:gap-[162px] lg:px-20">        {/* Hero */}
        <section className="flex flex-col gap-16">
          <h1 className="-ml-1 font-melodrama text-[3.5rem] font-medium leading-none tracking-wide text-portfolio-ink sm:-ml-5 sm:text-[6rem] md:text-[9rem] lg:-ml-[60px] lg:text-[14.25rem]">
            PORTFOLIO
          </h1>

          <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-12">
            <HeroSlideshow className="h-[280px] w-full rounded-tr-[60px] rounded-bl-[30px] sm:h-[420px] lg:-ml-20 lg:h-[667px] lg:flex-1 lg:rounded-none lg:rounded-tr-[100px] lg:rounded-br-[50px]" />

                        <div className="flex w-full flex-col justify-between gap-10 lg:h-[667px] lg:w-[600px] lg:flex-none lg:gap-0">
              <div className="flex flex-col gap-6 sm:gap-10">
                <h2 className="whitespace-nowrap font-satoshi text-4xl font-light tracking-wide text-portfolio-ink sm:text-6xl lg:text-[5.4375rem]">
                  Abhinoor Singh
                </h2>
                <p className="font-satoshi text-base leading-loose tracking-wide text-portfolio-ink sm:text-lg lg:text-xl">
                  I am a 4th-year B.Tech (CSE-DS) student from GGSIPU, working
                  in UI/UX design with a focus on product design and usability.
                </p>
              </div>

<div className="mt-10 h-[220px] w-full overflow-hidden rounded-[20px] bg-portfolio-gray100 sm:h-[300px] lg:mt-0 lg:h-[415px] lg:w-[600px] lg:flex-none">                <img
                  src="/images/profile.jpg"
                  alt="Abhinoor Singh"
className="h-full w-full object-cover object-center"                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience: vinyl records */}
        <section
          id="experience"
          className="flex flex-col items-center gap-16 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-between lg:gap-8"
        >
          {vinylItems.map((item, i) => (
            <VinylCard key={i} {...item} />
          ))}
        </section>

                {/* Projects */}
<section className="-mx-6 flex flex-col gap-6 sm:-mx-10 lg:-mx-20 lg:flex-row lg:gap-0">
  {/* Left: helix gallery */}
<div className="relative order-2 aspect-[4/3] w-full overflow-hidden bg-portfolio-bg lg:order-none lg:aspect-[868/916] lg:w-[45.21%] lg:flex-none">
  <HelixGallery images={pawplannerImages} className="h-full w-full" />

  {/* Subtle inner shadow, top and bottom */}
  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_14px_14px_-14px_rgba(0,0,0,0.12),inset_0_-14px_14px_-14px_rgba(0,0,0,0.12)]" />
</div>

       {/* Right column: text, vertically centered */}
  <div className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col">
    <div className="order-1 flex flex-col justify-center gap-8 px-6 shadow-[inset_0_14px_14px_-14px_rgba(0,0,0,0.12)] sm:px-10 lg:order-none lg:flex-1 lg:gap-16 lg:px-[30px] lg:py-[30px]">
      <h3 className="font-melodrama text-[clamp(2.25rem,9vw,4rem)] leading-[1.05] text-black lg:text-[clamp(2rem,4.53vw,87px)] lg:leading-[1.04]">
        <span className="font-medium">Designing experiences, exploring creativity</span>
      </h3>

      <div className="flex flex-col gap-8">
        <p className="font-satoshi text-base leading-loose tracking-[0.02em] text-black/80 sm:text-lg lg:text-[clamp(14px,1.04vw,20px)] lg:leading-[2]">
          From building PawPlanner from the ground up to reimagining existing digital experiences, each project is an opportunity to explore ideas and solve problems through design. Beyond product design, I've also created magazine covers, visual identities, and graphics for college societies. Different projects, different challenges, all connected by a love for thoughtful design and visual storytelling.
        </p>

        <FlowButton text="KNOW MORE" to="/projects" />
      </div>
    </div>
  </div>
</section>

        {/* Skills */}
<section className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-2 2xl:grid-cols-4">
  {designSystems.map((colors, i) => (
    <DesignSystemCard key={i} {...colors} index={i} />
  ))}
</section>

      </main>
      
          </div>
  );
}
