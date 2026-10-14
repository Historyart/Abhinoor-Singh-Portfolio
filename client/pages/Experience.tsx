import SiteNav from "@/components/portfolio/SiteNav";
import HeroSlideshow from "@/components/portfolio/HeroSlideshow";

const experienceItems = [
    {
        company: "NeuSpaarX Tehnologies Pvt Ltd.",
        duration: "6 months",
        images: [
            { src: "/images/imac-24.png", alt: "iMac 24 inch mockup" },
            { src: "/images/nokia-xr21.png", alt: "Nokia XR21 mockup" },
        ],
        link: "/experience/neuspaarx",
    },
    {
        company: "NeuSpaarX Tehnologies Pvt Ltd.",
        duration: "4 months",
        images: [],
        link: "#",
    },
];

function ExperienceBlock({
    company,
    duration,
    images,
    link,
}: {
    company: string;
    duration: string;
    images: { src: string; alt: string }[];
    link: string;
}) {
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                                    <HeroSlideshow
                slides={images}
                bgClassName="bg-[#ECF1C4]"
                className="aspect-[880/580] w-full flex-none rounded-[20px] lg:w-[45.8%] lg:max-w-[880px]"
            />

            <div className="flex flex-1 flex-col justify-between gap-8 lg:gap-0">
                <h2 className="text-right font-melodrama text-[clamp(2.5rem,7.34vw,8.8125rem)] font-medium leading-[1.06] tracking-[0.012em] text-portfolio-ink">
                    {company}
                </h2>

                <div className="flex items-end justify-between">
                    <a
                        href={link}
                        className="w-fit border-b border-black pb-[20px] font-satoshi text-[33px] tracking-[0.02em] text-black no-underline"
                    >
                        KNOW MORE
                    </a>

                    <p className="whitespace-nowrap text-right font-satoshi text-[clamp(1.25rem,2.4vw,2.875rem)] font-medium leading-[1.087] tracking-[0.012em] text-black">
                        Duration
                        <br />
                        {duration}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-portfolio-bg">
            <SiteNav />

            <main className="flex flex-col gap-24 px-6 pb-32 sm:px-10 lg:px-20">
                {experienceItems.map((item, i) => (
                    <ExperienceBlock key={i} {...item} />
                ))}
            </main>
        </div>
    );
}