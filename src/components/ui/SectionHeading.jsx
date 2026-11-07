
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={`mx-auto mb-14 max-w-3xl ${
        alignmentClasses[align] || alignmentClasses.center
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
          {eyebrow}
        </span>
      )}
 
      {title && (
        <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
