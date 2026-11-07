import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  ServerCog,
  CheckCircle2,
} from "lucide-react";

import Reveal from "../components/animations/Reveal";

const skills = [
  {
    icon: Code2,
    title: "Backend Development",
    technologies: "C#, ASP.NET Core, .NET",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Layers3,
    title: "Frontend Development",
    technologies: "Angular, React, TypeScript",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Database,
    title: "Database Development",
    technologies: "SQL Server, Entity Framework Core",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: ServerCog,
    title: "API & Architecture",
    technologies: "REST APIs, integrations, scalable design",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const principles = [
  "Understand the business before building.",
  "Keep communication simple and transparent.",
  "Build maintainable and scalable solutions.",
  "Focus on long-term business value.",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-orange-200/60 blur-3xl" />

            <motion.div
              whileHover={{ rotate: -1 }}
              className="relative rounded-[2rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-2xl shadow-indigo-200 sm:p-10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                <Code2 size={34} />
              </div>

              <p className="mt-9 text-sm font-bold uppercase tracking-[0.18em] text-violet-200">
                My philosophy
              </p>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                Good software should make business easier.
              </h3>

              <p className="mt-5 leading-7 text-indigo-100">
                Understand the problem first. Build a practical solution.
                Keep improving it as the business grows.
              </p>

              <div className="mt-9 border-t border-white/20 pt-6">
                <p className="text-sm text-indigo-100">
                  Focused on
                </p>

                <p className="mt-2 text-xl font-bold">
                  Clarity · Reliability · Collaboration
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.15}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
            WHO'S BEHIND THE CODE?
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
            I believe technology should make business easier, not more
            complicated.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Hello Avinash Kunnure, a software developer
            specializing in business applications and custom software
            solutions.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            I work with modern technologies to help businesses transform
            manual processes into organized, efficient, and reliable digital
            solutions.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            My focus is not just writing code. It's understanding business
            challenges, identifying the right approach, and building software
            that delivers practical value.
          </p>

          <h3 className="mt-8 text-lg font-bold text-slate-900">
            My technical expertise
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl p-2 ${skill.color}`}>
                    <skill.icon size={21} />
                  </div>

                  <h4 className="text-sm font-bold text-slate-800">
                    {skill.title}
                  </h4>
                </div>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  {skill.technologies}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-bold text-slate-900">
            How I work
          </h3>

          <div className="mt-4 space-y-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-3 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-emerald-600"
                />
                {principle}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}