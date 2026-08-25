import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "HOME", href: "#home" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ABOUT", href: "#about" },
];

export default function SiteNav() {
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 flex justify-end gap-8 bg-portfolio-bg/90 px-6 pt-[50px] pb-6 backdrop-blur-sm sm:gap-12 sm:px-10 md:gap-16 lg:px-20">
      {links.map((link) =>
        onHome ? (
          <a
            key={link.label}
            href={link.href}
            className="font-satoshi text-sm tracking-[0.15em] text-portfolio-ink transition-opacity hover:opacity-60 sm:text-base md:text-lg"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.label}
            to={`/${link.href}`}
            className="font-satoshi text-sm tracking-[0.15em] text-portfolio-ink transition-opacity hover:opacity-60 sm:text-base md:text-lg"
          >
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
}
