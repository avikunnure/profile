import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  TrendingUp,
  Clock3,
  Workflow,
  BarChart3,
  Zap,
} from "lucide-react";

import Reveal from "../components/animations/Reveal";
import Floating from "../components/animations/Floating";
import Button from "../components/ui/Button";

function DashboardPreview() {
  const activities = [
    "Business report generated",
    "Inventory records updated",
    "Approval request completed",
  ];

  return (
    <Floating>
      <div className="relative mx-auto max-w-lg">
        <div className="absolute-right-8-top-8 h-40 w-40 rounded-full bg-fuchsia-300/40 blur-3xl" />
        <div className="absolute-bottom-8-left-8 h-40 w-40 rounded-full bg-sky-300/50 blur-3xl" />

        <div className="relative rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-indigo-200/60 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Your workspace</p>
              <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                Business Overview
              </h3>
            </div>

            <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-700">
              <TrendingUp size={24} />
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-violet-50 p-4">
              <div className="flex items-center justify-between">
                <Workflow size={20} className="text-violet-600" />
                <span className="text-xs text-violet-600">Workflow</span>
              </div>
              <p className="mt-4 text-2xl font-extrabold text-slate-900">
                Organized
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Processes in one place
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-4">
              <div className="flex items-center justify-between">
                <BarChart3 size={20} className="text-sky-600" />
                <span className="text-xs text-sky-600">Reports</span>
              </div>
              <p className="mt-4 text-2xl font-extrabold text-slate-900">
                Clear
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Better business visibility
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-100 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-bold text-slate-800">Recent Activity</h4>
              <Clock3 size={18} className="text-slate-400" />
            </div>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-500"
                  />
                  <span className="text-sm text-slate-600">
                    {activity}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-7 -left-4 flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-left-8 sm:p-7"
        >
          <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
            <Zap size={21} />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">
              Work smarter
            </p>
            <p className="text-xs text-slate-500">
              Less manual effort
            </p>
          </div>
        </motion.div>
      </div>
    </Floating>
  );
}

export default function HeroSection() {
  return (
    <section id="home"className="relative overflow-hidden bg-gradient-to-br from-violet-500 via-white to-sky-100">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-28">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Practical software for growing businesses
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Less busywork.
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                More room to grow.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              I help businesses simplify their operations, automate
              repetitive tasks, and build custom software that makes
              everyday work easier.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">
                Let's Discuss Your Project
                <ArrowRight size={18} />
              </Button>

              <Button href="#solutions" variant="secondary">
                Explore My Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Business-focused solutions",
                "Clear communication",
                "Ongoing support",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2 size={17} className="text-emerald-600" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <a
            href="#solutions"
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-fuchsia-700"
          >
            Discover how I can help
            <ArrowDown size={16} />
          </a>
        </div>

        <Reveal direction="left" delay={0.2}>
          <DashboardPreview />
        </Reveal>
      </div>
    </section>
  );
}