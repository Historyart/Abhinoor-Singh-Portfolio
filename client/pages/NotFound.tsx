import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SiteNav from "@/components/portfolio/SiteNav";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SiteNav />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="font-melodrama text-6xl text-portfolio-ink sm:text-8xl">
          404
        </h1>
        <p className="font-satoshi text-lg text-portfolio-ink/80">
          This page hasn't been built yet. Keep prompting to fill it in.
        </p>
        <Link
          to="/"
          className="font-satoshi text-sm tracking-[0.15em] text-portfolio-ink underline underline-offset-4"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
