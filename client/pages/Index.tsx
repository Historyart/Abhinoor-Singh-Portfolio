import React from "react";
import SiteNav from "@/components/portfolio/SiteNav";
import HeroSlideshow from "@/components/portfolio/HeroSlideshow";
import HelixGallery from "@/components/portfolio/HelixGallery";
import { Link } from "react-router-dom";

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
    <div className="relative flex w-full flex-col gap-10 border border-black bg-white p-6 pt-10 sm:p-8 sm:pt-12">
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

      <h3 className="font-satoshi text-[33px] font-bold leading-[40px] tracking-[0.05em] text-black">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <p className="font-satoshi text-[20px] font-normal leading-[30px] tracking-[0.05em] text-black">
          {skills.map((skill, i) => (
            <React.Fragment key={skill}>
              {skill}
              {i < skills.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        <p className="font-satoshi text-[20px] font-normal leading-[30px] tracking-[0.05em] text-black">
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

      <main id="home" className="flex flex-col gap-32 px-6 sm:px-10 md:gap-40 lg:gap-[162px] lg:px-20">
        {/* Hero */}
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

    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[clamp(1rem,2vw,40px)]">
      <Link
        to="/projects"
        className="w-fit flex-none border-b border-black pb-3 font-satoshi text-xl tracking-[0.02em] text-black no-underline sm:text-2xl lg:pb-5 lg:text-[clamp(1.25rem,1.72vw,33px)]"
      >
        KNOW MORE
      </Link>

      <p className="font-satoshi text-base leading-loose tracking-[0.02em] text-black/80 sm:text-lg lg:text-[clamp(14px,1.04vw,20px)] lg:leading-[2]">
   From building PawPlanner from the ground up to reimagining existing digital experiences, each project is an opportunity to explore ideas and solve problems through design. Beyond product design, I've also created magazine covers, visual identities, and graphics for college societies. Different projects, different challenges, all connected by a love for thoughtful design and visual storytelling.
      </p>
    </div>
  </div>
  </div>
</section>

        {/* Skills */}
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {designSystems.map((colors, i) => (
            <DesignSystemCard key={i} {...colors} index={i} />
          ))}
        </section>

        {/* About */}
        <section id="about" className="flex flex-col gap-12 lg:flex-row lg:gap-14">
          <div className="flex flex-row items-start gap-4 sm:gap-6 lg:flex-col">
            <div className="flex-1 flex flex-col gap-10 pl-[11px] pr-[19px] pt-[80px] pb-0 text-center">              {"ABOUT".split("").map((l, i) => (
              <div
                key={i}
                className="font-satoshi text-[141px] font-medium leading-[0.95] text-black"
              >
                {l}
              </div>
            ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-10 rounded-t-[30px] bg-portfolio-gray300 pl-[11px] pr-[19px] pt-[80px] text-center sm:rounded-t-[50px] lg:h-auto lg:max-w-[14rem]">
            {"ME".split("").map((l, i) => (
              <div
                key={i}
                className="font-satoshi text-[141px] font-medium leading-[0.95] text-black"
              >
                {l}
              </div>
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-16 pt-[80px] lg:h-auto lg:max-w-[32.5rem]">
            <p className="font-satoshi text-base leading-loose tracking-wide text-black sm:text-lg">
              I’m Abhinoor, a UI/UX designer with a background in computer science.
              I enjoy bringing together design and technology to create digital
              experiences that feel simple, clear and thoughtful.
            </p>

            <p className="font-satoshi text-base leading-loose tracking-wide text-black sm:text-lg">
              <span className="text-[24px] font-semibold leading-[30px]">
                Education
              </span>
              <br />
              B.Tech — Computer Science & Data Science
              <br />
              Guru Gobind Singh Indraprastha University
              <br />
              2023 — 2027
            </p>
          </div>

          <div className="flex flex-1 flex-col items-end lg:-mr-20">
            <div className="flex flex-col sm:flex-row">
              <div className="h-[391px] w-[543.78px] rounded-l-[50px] bg-portfolio-gray100" />
              <div className="h-[392px] w-[269.35px] bg-portfolio-gray300" />
            </div>
            <div className="h-[432px] w-[704.37px] bg-portfolio-gray400" />
            <div className="h-[323px] w-[813px] rounded-tl-[50px] bg-portfolio-gray300" />
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
