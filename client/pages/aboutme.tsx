import SiteNav from "@/components/portfolio/SiteNav";
import MarqueeAlongSvgPath from "@/components/ui/marquee-along-svg-path";
import { TextEffect } from "@/components/ui/text-effect";
import ShortSlideRight from "@/components/ui/short-slide-right";


const block =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const aboutText = [
  {
    title: "A little about me",
    description:
      "Born and raised in Delhi, I'm currently pursuing a B.Tech in Computer Science and Engineering (Data Science) at GGSIPU. I enjoy bringing together analytical thinking and creative exploration in the things I do.",
  },
  {
    title: "Behind the screen",
    description:
      "When I'm not working on designs, you'll probably find me experimenting in the kitchen, trying new recipes, or capturing random moments through photography. I enjoy finding beauty in the little things that often go unnoticed.",
  },
  {
    title: "An eye for visuals",
    description:
      "I've always been drawn to editorial design, magazine layouts, and the way typography and imagery come together to tell a story. I'm fascinated by how small visual details can shape the way we experience something.",
  },
  {
    title: "Why this portfolio?",
    description:
      "My love for editorial layouts and visual storytelling inspired me to approach this portfolio as more than a collection of projects. I wanted it to feel like a little publication of its own, with each section having its own character while still feeling connected.",
  },
];

const tail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const sub1Text = block.repeat(3) + tail;
const sub2Text = block.repeat(2) + tail;
const TEXT =
  "font-satoshi text-[20px] font-normal leading-[42px] tracking-[0.02em] text-black/80";  

// The wave the cards travel along (1920 x 480 design space, starts and ends off-screen)
const bannerPath =
  "M -1400 340 C -1181 340, -1094 140, -875 140 S -569 340, -350 340 S -44 140, 175 140 S 481 340, 700 340 S 1006 140, 1225 140 S 1531 340, 1750 340 S 2056 140, 2275 140 S 2581 340, 2800 340 S 3106 140, 3325 140";

  const bannerImages = Array.from(
  { length: 20 },
  (_, i) => `/images/about/${i + 1}.png`
);

export default function AboutMe() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

            {/* Banner: cards drifting along a wave, full width, 480px tall on laptop and desktop */}
      <MarqueeAlongSvgPath
  path={bannerPath}
  viewBox="0 0 1920 480"
  responsive
  fit="cover"
  repeat={1}
  baseVelocity={1.25}
  slowdownOnHover
  draggable
  grabCursor
  className="h-[220px] w-full overflow-hidden sm:h-[320px] lg:h-[480px]"
>
  {bannerImages.map((src, i) => (
    <img
      key={src}
      src={src}
      alt={`Photo ${i + 1}`}
      draggable={false}
      className="h-[216px] w-[156px] rounded-[20px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
    />
  ))}
</MarqueeAlongSvgPath>


      <main className="flex flex-col gap-10 px-6 pb-32 pt-8 sm:px-10 lg:px-20">
        {/* Name + role */}
        <section className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
  <TextEffect
    as="h1"
    per="char"
    preset="blur"
    className="whitespace-nowrap font-melodrama text-[clamp(2.25rem,7.34vw,141px)] font-normal leading-[1.064] text-portfolio-ink"
  >
    ABHINOOR SINGH
  </TextEffect>

  <p className="whitespace-nowrap font-melodrama text-[clamp(1.75rem,5.21vw,100px)] font-normal leading-[1.5] text-portfolio-ink">
  <ShortSlideRight
    phrases={["Designer", "Developer", "Analyst"]}
    interval={2500}
  />
</p>
</section>

<section className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_36.36%] lg:items-center lg:gap-x-[clamp(2rem,4.48vw,86px)]">  <div className="flex flex-col gap-8">
    {aboutText.map((item, index) => (
      <div key={index} className="flex flex-col gap-2">
        <h3 className="font-satoshi text-[20px] font-semibold tracking-[0.02em] text-black">
          <span className="mr-3 text-black/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.title}
        </h3>

        <p className="font-satoshi text-[20px] font-normal leading-[1.8] tracking-[0.02em] text-black/80">
          {item.description}
        </p>
      </div>
    ))}
  </div>

<img
  src="/images/about-top-right.jpg"
  alt="Abhinoor Singh"
  className="aspect-[640/480] w-full rounded-[20px] object-cover object-center"
/>

        </section>
      </main>
    </div>
  );
}