// components/Skills.tsx
import { skills } from '@/content/site';

export default function Skills() {
  return (
    <section id="skills" className="container-page py-20 sm:py-28">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="mt-3 text-lg muted">
          The tools and patterns I use to ship maintainable, scalable product
          UI.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title} className="card p-6">
            <h3 className="text-sm font-semibold">{group.title}</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-[rgb(var(--bg))] px-3 py-1 text-xs muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
