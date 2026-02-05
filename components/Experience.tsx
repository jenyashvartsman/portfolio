import { experience } from '@/content/site';

export default function Experience() {
  return (
    <section id="experience" className="container-page py-20 sm:py-28">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <p className="mt-3 text-lg muted">
          Roles focused on frontend architecture, platform ownership, and
          building dependable UI for real products.
        </p>
      </div>

      <div className="space-y-10">
        {experience.map((company) => (
          <div key={company.company} className="card p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">
                {company.companyUrl ? (
                  <a
                    href={company.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ring-focus rounded-lg hover:underline"
                  >
                    {company.company}
                  </a>
                ) : (
                  company.company
                )}
              </h3>
            </div>

            <div className="space-y-6">
              {company.roles.map((role) => (
                <div key={`${company.company}-${role.title}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-medium">{role.title}</h4>
                    <span className="text-sm muted">{role.period}</span>
                  </div>
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
