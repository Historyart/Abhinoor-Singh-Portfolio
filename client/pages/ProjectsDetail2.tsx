import SiteNav from "@/components/portfolio/SiteNav";
import { projects } from "@/lib/projects";
import HeroSlideshow from "@/components/portfolio/HeroSlideshow";

// Which project this page shows (title + description come from lib/projects.ts).
const PROJECT_SLUG = "zensoma";

// Shared two-column row: left column flexible, right column 664 / 1760 of the width.
const ROW =
  "grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_37.73%] lg:items-start lg:gap-x-8";

const intro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const bullets = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

const part2Intro =
  "I redesigned the TripAdvisor page as part of my daily design challenges, exploring ways to make the travel discovery experience more engaging, interactive, and visually organised. My approach focused on simplifying how users explore destinations, compare options, and navigate travel information.";

const part2Bullets = [
  "Introduced an interactive card system that flips to reveal brief information about destinations and listings.",
  "Added category tags to help users identify and distinguish different travel options.",
  "Designed a price-range slider to make filtering options more intuitive and convenient.",
  "Refined the layout and visual hierarchy to make information easier to scan and explore.",
  "Focused on combining interactive elements with a clean interface to create a more engaging browsing experience.",
];

const part3Intro =
  "My first design challenge was a redesign of Lufthansa's website, where I explored ways to make the booking experience simpler and more approachable. As a beginner, I focused on creating a straightforward user flow, using prominent buttons and clear navigation to help users move through the interface with ease.";

const part3Bullets = [
  "Simplified the overall flow to make navigation more intuitive.",
  "Used larger, prominent buttons to make key actions easier to identify.",
  "Focused on clear layouts and straightforward interactions.",
  "Explored visual hierarchy to guide users through the booking process.",
  "Used this project as an opportunity to learn the fundamentals of interface design and build confidence working in Figma.",
];

export default function ProjectsDetail2() {
  const project = projects.find((p) => p.slug === PROJECT_SLUG);

  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      <SiteNav />

      <main className="flex flex-col gap-20 px-6 pb-32 sm:px-10 lg:px-20">
        {/* Part 1 — banner, title, description */}
        <section className="flex flex-col gap-10">
<img
  src="/images/banner-2.png"
  alt="Zensoma banner"
  className="h-auto w-full rounded-[20px]"
/>
          <div className={ROW}>
            <h1 className="whitespace-nowrap font-melodrama text-[clamp(3rem,11.88vw,14.25rem)] font-medium leading-none tracking-[0.01em] text-portfolio-ink">
              Redesign
            </h1>

            <p className="font-satoshi text-[20px] font-normal leading-[2] tracking-[0.02em] text-black/80">
              From reimagining TripAdvisor's travel discovery experience to exploring a refreshed digital experience for Lufthansa, these projects challenged me to rethink existing interfaces, simplify interactions, and bring a fresh visual perspective to familiar platforms. Each redesign was an opportunity to explore how thoughtful design can make digital experiences more intuitive, engaging, and user-friendly.
            </p>
          </div>
        </section>

        {/* Part 2 — text (left) + 664 x 700 rectangle (right) */}
        <section className={ROW}>
                    <div className="flex flex-col gap-10 font-satoshi text-[20px] font-normal leading-[43px] tracking-[0.02em] text-black">
            <p>{part2Intro}</p>

            <ul className="list-disc space-y-5 pl-6">
              {part2Bullets.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>

<HeroSlideshow
  slides={[
    { src: "/images/imac-24.mp4", alt: "Zensoma walkthrough", type: "video" },
    { src: "/images/frame-13-1.png", alt: "Zensoma screen 1",fit: "contain" },
    { src: "/images/frame-13.png", alt: "Zensoma screen 2",fit: "contain" },
  ]}
  bgClassName="bg-portfolio-bg"
  className="aspect-[664/700] w-full rounded-[20px]"
/>
        </section>

        {/* Part 3  — text (left) + 664 x 700 rectangle (right) */}
        <section className={ROW}>
                    <div className="flex flex-col gap-10 font-satoshi text-[20px] font-normal leading-[43px] tracking-[0.02em] text-black">
            <p>{part3Intro}</p>

            <ul className="list-disc space-y-5 pl-6">
              {part3Bullets.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>

<HeroSlideshow
  slides={[
    { src: "/images/flight-homepage.png", alt: "Flight app homepage", fit: "contain" },
        { src: "/images/login.png", alt: "Login screen", fit: "contain" },
            { src: "/images/search-flight.png", alt: "Search flight screen", fit: "contain" },
            { src: "/images/flight-details.png", alt: "Flight details, economy", fit: "contain" },
                { src: "/images/book-now.png", alt: "Book now screen", fit: "contain" },
                    { src: "/images/payment-method.png", alt: "Payment method screen", fit: "contain" },
    { src: "/images/payment-successful.png", alt: "Payment successful screen", fit: "contain" },
  ]}
    bgClassName="bg-portfolio-bg"
  className="aspect-[664/500] w-full rounded-[20px]"
/>        </section>
      </main>
    </div>
  );
}