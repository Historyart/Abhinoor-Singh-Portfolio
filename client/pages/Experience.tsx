import SiteNav from "@/components/portfolio/SiteNav";

const experienceItems = [
    {
        company: "NeuSpaarX Tehnologies Pvt Ltd.",
        duration: "Lorem Ipsum",
        image: "",
    },
    {
        company: "NeuSpaarX Tehnologies Pvt Ltd.",
        duration: "Lorem Ipsum",
        image: "",
    },
];

function ExperienceBlock({
    company,
    duration,
    image,
}: {
    company: string;
    duration: string;
    image: string;
}) {
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div
                className="aspect-[880/580] w-full flex-none bg-portfolio-gray200 lg:w-[45.8%] lg:max-w-[880px]"
                style={
                    image
                        ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
                        : undefined
                }
            />

            <div className="flex flex-1 flex-col justify-between gap-8 lg:gap-0">
                <h2 className="text-right font-melodrama text-[clamp(2.5rem,7.34vw,8.8125rem)] font-medium leading-[1.06] tracking-[0.012em] text-portfolio-ink">
                    {company}
                </h2>

                <div className="flex items-end justify-between">

                    href="#"
                    className="w-fit border-b border-black pb-[20px] font-satoshi text-[33px] tracking-[0.02em] text-black no-underline"
                    <a>
                        KNOW MORE
                    </a>

                    <p className="text-right font-satoshi text-[clamp(1.25rem,2.4vw,2.875rem)] font-medium leading-[1.087] tracking-[0.012em] text-black">
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