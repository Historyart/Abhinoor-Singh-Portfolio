const links = [
  { label: "Behance", href: "https://www.behance.net/abhinoorsingh3", newTab: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ab-singh-j1106/", newTab: true },
  { label: "Resume", href: "/Abhinoor_Singh_Resume.pdf", newTab: true },
  {
  label: "Mail",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=panesarab@gmail.com",
  newTab: true,
},
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative flex w-full flex-col overflow-hidden bg-[#D9D9D9] px-6 py-10 sm:px-10 sm:py-14 lg:px-[100px] lg:py-[50px]"
    >
      {/* Background image at 40% opacity */}
      <img
        src="/images/footer-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />

      {/* Very light dark-grey tint */}
      <div className="pointer-events-none absolute inset-0 bg-[#4A4A4A]/10" />

      {/* Back to top: in the flow on phone/tablet, pinned top-right on desktop */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative z-10 mb-8 flex items-center gap-3 self-end border-0 bg-transparent p-0 sm:gap-5 lg:absolute lg:right-[100px] lg:top-[50px] lg:mb-0"
        aria-label="Back to top"
      >
        <span className="font-satoshi text-sm font-bold tracking-[0.05em] text-black sm:text-xl lg:text-[clamp(1.25rem,1.72vw,33px)]">
          BACK TO TOP
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black sm:h-14 sm:w-14 lg:h-[80px] lg:w-[80px]">
                    <svg
            viewBox="0 0 38 38"
            fill="none"
            aria-hidden="true"
            className="h-5 w-5 sm:h-7 sm:w-7 lg:h-[38px] lg:w-[38px]"
          >
            <path d="M19 30V8" stroke="white" strokeWidth="4" strokeLinecap="round" />
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

      {/* Main content sits above the image and tint */}
            <div className="relative z-10 flex flex-col gap-10 sm:gap-14 lg:gap-[40px]">
        <div className="flex flex-col gap-6 sm:gap-10 lg:gap-[40px]">
          <h2 className="font-satoshi text-[clamp(2.75rem,12vw,5rem)] font-medium leading-[1.06] text-black lg:text-[clamp(5rem,7.34vw,141px)]">
            LET’S TALK
          </h2>

          <div className="flex flex-wrap items-start gap-x-6 gap-y-4 sm:gap-x-[35px]">
            {links.map((l) => (
                            <a
                key={l.label}
                href={l.href}
                target={l.newTab ? "_blank" : undefined}
                rel={l.newTab ? "noopener noreferrer" : undefined}
                className="w-fit border-b border-black pb-2 font-satoshi text-base font-normal leading-[1.6] tracking-[0.02em] text-black no-underline sm:pb-3 sm:text-xl lg:pb-[20px] lg:text-[22px] lg:leading-[58px]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="m-0 font-satoshi text-sm leading-[1.8] tracking-[0.03em] text-black sm:text-base lg:text-[20px] lg:leading-[40px]">
            © 2026 ABHINOOR SINGH
          </p>
          <p className="m-0 font-satoshi text-sm leading-[1.8] tracking-[0.03em] text-black sm:text-right sm:text-base lg:text-[20px] lg:leading-[40px]">
            Designed and Developed
            <br />
            by <span className="font-bold">Abhinoor Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}