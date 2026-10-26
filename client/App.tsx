import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import ExperienceDetailCompany1 from "./pages/ExperienceDetailCompany1";
import ExperienceDetailCompany2 from "@/pages/ExperienceDetailCompany2";
import Projects from "./pages/Projects";
import ProjectsDetail1 from "./pages/ProjectsDetail1";
import ProjectsDetail2 from "./pages/ProjectsDetail2";
import ProjectsDetail3 from "./pages/ProjectsDetail3";
import Layout from "@/components/portfolio/Layout";
import AboutMe from "./pages/aboutme";
import NotFound from "./pages/NotFound";
import Cursor from "@/components/ui/inverted-cursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
            <BrowserRouter>
        <Cursor />
        <Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Index />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/experience/neuspaarx" element={<ExperienceDetailCompany1 />} />
    <Route path="/experience/akdenar" element={<ExperienceDetailCompany2 />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/pawplanner" element={<ProjectsDetail1 />} />
    <Route path="/projects/redesign" element={<ProjectsDetail2 />} />
    <Route path="/projects/project-three" element={<ProjectsDetail3 />} />
    <Route path="/about" element={<AboutMe />} />
  </Route>

  {/* Outside the layout, so the 404 page has no footer */}
  <Route path="*" element={<NotFound />} />
</Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);