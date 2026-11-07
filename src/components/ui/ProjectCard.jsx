
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  if (!project) return null;

  const Icon = project.icon;

  const stats = Array.isArray(project.previewStats)
    ? project.previewStats
    : Object.entries(project.previewStats || {}).map(([label, value]) => ({
        label,
        value,
      }));

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-100"
    >
      {/* Preview */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 p-6 sm:p-8">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-fuchsia-200/40 blur-3xl" />

        <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-200/50 blur-3xl" />

        <div className="relative rounded-2xl border border-white/80 bg-white/90 p-5 shadow-xl shadow-indigo-100/60 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {Icon && (
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Icon size={20} />
                </span>
              )}

              <div>
                <p className="text-sm font-bold text-slate-800">
                  {project.previewTitle || project.title}
                </p>
                <p className="text-xs text-slate-400">
                  Dashboard preview
                </p>
              </div>
            </div> 
          </div>

          {stats.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.slice(0, 4).map((stat, statIndex) => (
                <div
                  key={`${stat.label}-${statIndex}`}
                  className="rounded-xl bg-slate-50 p-3"
                >
                  <p className="text-xs text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xl font-extrabold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          <p className="mt-3 text-center text-[10px] text-slate-400">
            Illustrative interface with sample data
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-extrabold text-slate-900 transition group-hover:text-indigo-600">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          {project.description}
        </p>

        {project.benefits?.length > 0 && (
          <ul className="mt-5 space-y-2">
            {project.benefits.slice(0, 3).map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {project.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition hover:gap-3"
        >
          Discuss a similar project
          <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}
