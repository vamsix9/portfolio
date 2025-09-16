const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "TailwindCSS",
  "Testing",
  "CI/CD",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-sm">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


