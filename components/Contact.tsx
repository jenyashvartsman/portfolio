import { contact } from '@/content/site';

export default function Contact() {
  return (
    <section id="contact" className="container-page py-20 sm:py-28">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">{contact.title}</h2>

        <p className="mt-3 text-lg muted">{contact.description}</p>

        <div className="mt-8 space-y-4">
          {contact.items.map((item) => (
            <div key={item.label}>
              <div className="text-sm font-medium">{item.label}</div>

              <a
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noreferrer' : undefined}
                className="ring-focus mt-1 inline-block text-sm text-[rgb(var(--primary))] underline-offset-4 hover:underline"
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
