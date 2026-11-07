import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";

import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="SELECTED WORK & PROJECT IDEAS"
          title="Practical solutions. Real business possibilities."
          description="Explore examples of business applications and solutions I can build. Every project starts with understanding the problem and creating software that makes a meaningful difference."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm leading-7 text-slate-500">
            These are illustrative project concepts. Actual project
            screenshots, demos, and case studies will be added as completed
            work becomes available.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 font-bold text-indigo-700 hover:text-fuchsia-700"
          >
            Have a similar project in mind?
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}