import { hero } from '@/content/site';

export default function Hero() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium text-[rgb(var(--primary))]">
          {hero.eyebrow}
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {hero.headline}
        </h1>

        <p className="mt-6 text-lg muted">{hero.subheadline}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={hero.primaryCta.href} className="btn-primary ring-focus">
            {hero.primaryCta.label}
          </a>

          <a
            href={hero.secondaryCta.href}
            className="btn-ghost ring-focus border"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
