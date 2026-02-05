import { hero } from '@/content/site';

export default function Hero() {
  return (
    <section className="container-page pt-20 pb-15">
      <div className="max-w-3xl">
        {/* eyebrow */}
        <p className="mb-4 text-lg font-400 text-[rgb(var(--primary))]">
          {hero.eyebrow}
        </p>

        {/* headline */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {hero.headline}
        </h1>

        {/* sub headline */}
        <p className="mt-6 text-lg muted">{hero.subHeadline}</p>

        {/* call to action */}
        <div className="mt-10 flex flex-wrap gap-3">
          {/* primary call to action */}
          <a href={hero.primaryCta.href} className="btn-primary ring-focus">
            {hero.primaryCta.label}
          </a>

          {/* secondary call to action */}
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
