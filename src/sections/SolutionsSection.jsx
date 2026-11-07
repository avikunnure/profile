import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import Reveal from "../components/animations/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import  StaggerContainer  from "../components/animations/StaggerContainer";
import staggerItem from "../components/animations/StaggerItem"

import { services } from "../data/services";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="WHAT I CAN DO FOR YOU"
          title="Technology that solves real business problems."
          description="Every business has different challenges. Instead of offering one-size-fits-all software, I build solutions around your processes, goals, and requirements."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={staggerItem}
              whileHover={{ y: -7 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-2xl p-3 ${service.color}`}>
                  <service.icon size={26} />
                </div>

                <span className="text-sm font-bold text-slate-300">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 space-y-3">
                {service.examples.map((example) => (
                  <div
                    key={example}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-500"
                    />
                    {example}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 transition-colors group-hover:text-fuchsia-700"
              >
                Discuss this solution
                <ArrowUpRight size={17} />
              </a>
            </motion.article>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white sm:p-10">
            <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-extrabold sm:text-3xl">
                  Have a unique business challenge?
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-indigo-100">
                  Even if your requirements don't fit into these categories,
                  let's discuss your idea and explore the right solution.
                </p>
              </div>

              <a
                href="#contact"
                className="shrink-0 rounded-full bg-white px-7 py-3.5 font-bold text-indigo-700 transition hover:bg-indigo-50"
              >
                Tell Me About It
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}