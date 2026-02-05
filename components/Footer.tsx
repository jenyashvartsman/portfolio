import { footer } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        {/* copyright */}
        <span className="text-sm muted">{footer.copyright}</span>

        {/* links */}
        <nav className="flex gap-4">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'LinkedIn' ? '_blank' : undefined}
              rel={link.label === 'LinkedIn' ? 'noreferrer' : undefined}
              className="ring-focus text-sm muted hover:text-[rgb(var(--text))]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
