const variants = {
  primary:
    "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-200/40 hover:shadow-xl dark:shadow-indigo-950/40",

  secondary:
    "border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-indigo-500 dark:hover:bg-slate-700",

  dark:
    "bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500",

  outline:
    "border-2 border-indigo-600 bg-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white",
};
export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50";

  const classes = `${baseClasses} ${
    variants[variant] || variants.primary
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}