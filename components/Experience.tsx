import { experience } from '@/content/site';

export default function Experience() {
  return (
    <section id="experience" className="container-page pb-15">
      {/* experience */}
      <div className="mb-12 max-w-2xl">
        {/* title */}
        <h2 className="text-3xl font-bold tracking-tight">
          {experience.title}
        </h2>

        {/* description */}
        <p className="mt-3 text-lg muted">{experience.description}</p>
      </div>

      {/* experience roles */}
      <div className="space-y-10">
        {experience.roles.map((company) => (
          <div key={company.company} className="card p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              {/* company */}
              <h3 className="text-lg font-semibold">
                <a
                  href={company.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ring-focus rounded-lg hover:underline"
                >
                  {company.company}
                </a>
              </h3>
            </div>

            <div className="space-y-6">
              {/* roles */}
              {company.roles.map((role) => (
                <div key={`${company.company}-${role.title}`}>
                  {/* role */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-medium">{role.title}</h4>
                    <span className="text-sm muted">{role.period}</span>
                  </div>

                  {/* description */}
                  <p className="mt-2 muted">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
