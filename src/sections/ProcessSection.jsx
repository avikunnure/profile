import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionHeading from "../components/ui/SectionHeading";
import  StaggerContainer from "../components/animations/StaggerContainer";
import  staggerItem from "../components/animations/StaggerItem";
import { processSteps } from "../data/process";

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="HOW WE WORK TOGETHER"
          title="A clear process from idea to delivery."
          description="You don't need to know the technical details. I'll guide you through the process, explain the options, and keep you informed at every stage."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-xl hover:shadow-indigo-100/50"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-2xl p-3 ${step.color}`}>
                  <step.icon size={25} />
                </div>

                <span className="text-3xl font-black text-slate-100">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>

              {index !== processSteps.length - 1 && (
                <ArrowRight
                  size={20}
                  className="absolute -right-3 top-12 z-10 hidden text-indigo-400 lg:block"
                />
              )}
            </motion.article>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Have an idea but don't know where to start?
          </p>

          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 font-bold text-indigo-700 hover:text-fuchsia-700"
          >
            Let's discuss your requirements
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}