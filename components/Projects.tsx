import Image from 'next/image';
import { projects } from '@/content/site';

export default function Projects() {
  return (
    <section id="projects" className="container-page py-20 sm:py-28">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mt-3 text-lg muted">
          A selection of product work across enterprise SaaS, platforms, and
          client-facing applications.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group card overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-[rgb(var(--bg))]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <a
                href={project.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="ring-focus inline-block text-base font-semibold hover:underline"
              >
                {project.title}
              </a>

              <p className="mt-1 text-xs font-medium text-[rgb(var(--primary))]">
                {project.role}
              </p>

              <p className="mt-3 text-sm muted">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
