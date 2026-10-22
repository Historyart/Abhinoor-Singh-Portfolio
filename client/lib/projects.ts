export interface Project {
  slug: string;
  name: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "pawplanner",
    name: "PawPlanner",
    image: "/images/pawplanner-banner.png",
  },
  {
    slug: "Redesign",
    name: "Redesign",
    image: "/images/zensoma-banner.png",
  },
  {
    slug: "project-three",
    name: "College",
    image: "/images/college-banner.png",
  },
];