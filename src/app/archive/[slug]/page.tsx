import { projects } from "@/lib/projects";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage() {
  return <ProjectClient />;
}
