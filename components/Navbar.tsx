'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { site } from '@/content/site';
import { withBasePath } from '@/libs/asset';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => site.nav, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    // Prevent background scroll on mobile and desktop by setting on both
    // `html` and `body` since some browsers only respect one of them.
    document.documentElement.style.overflow = open ? 'hidden' : '';
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-[rgb(var(--bg))]/85 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--bg))]/70">
        <div className="container-page flex h-16 items-center justify-between gap-3">
          {/* brand */}
          <Link
            href="/"
            className="ring-focus inline-flex min-w-0 items-center gap-3"
          >
            {/* logo */}
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-[rgb(var(--surface))] shadow-sm">
              <span className="text-sm font-semibold">JS</span>
            </span>

            {/* name & title */}
            <div className="min-w-0 leading-tight">
              <div className="truncate text-sm font-semibold">{site.name}</div>
              <div className="truncate text-xs muted">{site.title}</div>
            </div>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {/* nav items */}
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="btn-ghost muted hover:text-[rgb(var(--text))]"
              >
                {item.label}
              </Link>
            ))}

            {/* resume */}
            <a
              href={withBasePath(site.cta.href)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary ml-2"
            >
              {site.cta.label}
            </a>
          </nav>

          {/* mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* resume */}
            <a
              href={withBasePath(site.cta.href)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary h-10 px-3"
            >
              {site.cta.label}
            </a>

            {/* menu button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="ring-focus inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-[rgb(var(--surface))] shadow-sm cursor-pointer"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-sheet"
            >
              <span className="text-lg leading-none" aria-hidden="true">
                ☰
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile sheet (renders outside header so backdrop covers full viewport) */}
      <div
        className={cn(
          'md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        {/* backdrop - higher z so it covers header and page */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={cn(
            'fixed inset-0 z-50 bg-black/30 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />

        {/* panel */}
        <div
          id="mobile-sheet"
          role="dialog"
          aria-modal="true"
          className={cn(
            'fixed right-0 top-0 z-60 h-dvh w-[min(92vw,380px)] border-l bg-[rgb(var(--surface))] shadow-2xl transition-transform',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex h-16 items-center justify-between border-b px-4">
            {/* brand */}
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{site.name}</div>
              <div className="truncate text-xs muted">{site.title}</div>
            </div>

            {/* close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ring-focus inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-[rgb(var(--bg))] cursor-pointer"
              aria-label="Close menu"
            >
              <span className="text-xl leading-none" aria-hidden="true">
                ×
              </span>
            </button>
          </div>

          <div className="flex h-[calc(100dvh-4rem)] flex-col px-4 py-4">
            {/* nav items */}
            <nav className="flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="ring-focus rounded-xl px-3 py-3 text-base hover:bg-[rgba(var(--text),0.04)]"
                >
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t pt-1">
              <div className="mt-3 grid grid-cols-2 gap-2">
                {/* LinkedIn */}
                <a
                  className="ring-focus inline-flex items-center justify-center rounded-xl border bg-[rgb(var(--bg))] px-3 py-2 text-sm"
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                {/* Email */}
                <a
                  className="ring-focus inline-flex items-center justify-center rounded-xl border bg-[rgb(var(--bg))] px-3 py-2 text-sm"
                  href={site.links.email}
                >
                  Email
                </a>
              </div>

              {/* close tip */}
              <p className="mt-4 text-xs muted">
                Tip: press <span className="font-medium">Esc</span> to close.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
