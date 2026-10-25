import SiteNav from "@/components/portfolio/SiteNav";
import HeroSlideshow from "@/components/portfolio/HeroSlideshow";
import FlowButton from "@/components/ui/flow-button";

const experienceItems = [
    {
        company: "NeuSpaarX Technologies Pvt Ltd.",
        duration: "6 months",
        images: [
            { src: "/images/imac-24.png", alt: "iMac 24 inch mockup" },
            { src: "/images/nokia-xr21.png", alt: "Nokia XR21 mockup" },
        ],
        bgClassName: "bg-[#ECF1C4]",
        link: "/experience/neuspaarx",
    },
    {
        company: "Akdenar\nLabs",
        duration: "4 months",
        images: [
            { src: "/images/akdenar-iphone-13-pro.png", alt: "iPhone 13 Pro mockup" },
            { src: "/images/akdenar-iphone-15-pro.png", alt: "iPhone 15 Pro mockup" },
            { src: "/images/akdenar-iphone-14.png", alt: "iPhone 14 mockup" },
        ],
        bgClassName: "bg-[#F1DBC5]",
        link: "/experience/akdenar",
    },
];

function ExperienceBlock({
    company,
    duration,
    images,
    bgClassName,
    link,
}: {
    company: string;
    duration: string;
    images: { src: string; alt: string }[];
    bgClassName: string;
    link: string;
}) {
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <HeroSlideshow
                slides={images}
                bgClassName={bgClassName}
                className="aspect-[880/580] w-full flex-none rounded-[20px] lg:w-[45.8%] lg:max-w-[880px]"
            />

            <div className="flex flex-1 flex-col justify-between gap-8 lg:gap-0">
                <h2 className="whitespace-pre-line text-right font-melodrama text-[clamp(2.5rem,7.34vw,8.8125rem)] font-medium leading-[1.06] tracking-[0.012em] text-portfolio-ink">
                    {company}
                </h2>

                <div className="flex items-end justify-between">
                    <FlowButton text="KNOW MORE" to={link} />

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