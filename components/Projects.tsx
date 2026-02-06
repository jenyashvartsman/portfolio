import Image from 'next/image';
import { projects } from '@/content/site';
import { withBasePath } from '@/libs/asset';

export default function Projects() {
  return (
    <section id="projects" className="container-page pb-15">
      {/* title & description */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">{projects.title}</h2>
        <p className="mt-3 text-lg muted">{projects.description}</p>
      </div>

      {/* projects grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.projects.map((project) => (
          <article
            key={project.slug}
            className="group card overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* image */}
            <div className="relative h-56 overflow-hidden bg-[rgb(var(--bg))]">
              <Image
                src={withBasePath(project.image)}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* content */}
            <div className="p-5">
              {/* company link */}
              <a
                href={project.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="ring-focus inline-block text-base font-semibold hover:underline"
              >
                {project.title}
              </a>

              {/* role */}
              <p className="mt-1 text-xs font-medium text-[rgb(var(--primary))]">
                {project.role}
              </p>

              {/* description */}
              <p className="mt-3 text-sm muted">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
