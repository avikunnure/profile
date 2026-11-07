import {
  Github,
  Linkedin,
  ArrowUpRight, 
  Mail,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "My Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Business Automation",
  "Custom Software",
  "Business Dashboards",
  "API Integration",
  "Ongoing Support",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-fuchsia-500 text-lg font-black">
                P
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                Avinash Kunnure<span className="text-fuchsia-400">.</span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              I help businesses simplify their operations, automate repetitive
              work, and build software that supports long-term growth.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-950"
            >
              Let's work together
              <ArrowUpRight size={16} />
            </a>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-indigo-400 hover:bg-indigo-500 hover:text-white"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-indigo-400 hover:bg-indigo-500 hover:text-white"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-indigo-400 hover:bg-indigo-500 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 transition hover:pl-1 hover:text-white" >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              What I Do
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a href="#solutions" className="text-sm text-slate-400 transition hover:text-white" >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {currentYear} Avinash Kunnure. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built with purpose. Designed for growth.
          </p>

          <a href="#home" aria-label="Back to top" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white hover:text-slate-950">
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}