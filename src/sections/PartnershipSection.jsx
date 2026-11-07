import {
  CheckCircle2,
  CalendarCheck,
  MessageSquareText,
  Wrench,
} from "lucide-react";
import Reveal from "../components/animations/Reveal";
import Button from "../components/ui/Button";

const benefits = [
  {
    icon: Wrench,
    title: "Regular improvements",
    description:
      "Add features and refine workflows as your business changes.",
  },
  {
    icon: CalendarCheck,
    title: "Planned maintenance",
    description:
      "Schedule maintenance, fixes, and updates rather than waiting for issues to grow.",
  },
  {
    icon: MessageSquareText,
    title: "A familiar development partner",
    description:
      "Work with someone who understands your application and its history.",
  },
];

export default function PartnershipSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
            Beyond the first delivery
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            A development partner, not just a one-time contractor.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Your business keeps evolving. I can help you maintain, improve,
            and extend your software so it continues to serve your team.
          </p>

          <div className="mt-8 space-y-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-indigo-700 shadow-sm">
                  <benefit.icon size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button href="#contact" className="mt-9">
            Explore ongoing support
          </Button>
        </Reveal>

        <Reveal direction="left" delay={0.15}>
          <div className="relative rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-indigo-200 sm:p-10">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-2xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-300">
                Built for the long term
              </span>

              <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
                Start with one problem.
                <span className="mt-1 block text-violet-300">
                  Improve over time.
                </span>
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Begin with a focused project, then decide whether ongoing
                development or maintenance makes sense for your business.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Clear scope and priorities",
                  "Regular progress updates",
                  "Planned future enhancements",
                  "Support arrangements agreed in advance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-emerald-400"
                    />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}