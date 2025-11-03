import React, { useState } from 'react';
import MegaMenu from './MegaMenu';

const NAV = [
  { title: 'Home', href: '/' },
  {
    title: 'Projects',
    href: '/projects',
    mega: {
      heading: 'Residential Projects',
      items: [
        { title: 'Vanaha', href: '/projects/vanaha', subtitle: 'Premium living' },
        { title: 'Project Two', href: '/projects/2', subtitle: 'City oasis' },
      ],
      image: '/assets/mega/vanaha.jpg',
    },
  },
  { title: 'Floorplans', href: '/floorplans' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Contact', href: '/contact' },
];

export default function Header() {
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed w-full z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 header-backdrop border-b border-gray-200">
          <div className="flex items-center space-x-6">
            <a href="/" className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
              <span className="font-display text-xl text-[var(--brand-primary)]">PROJECT NAME</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {NAV.map((n) => (
              <div key={n.title} className="relative">
                <a
                  href={n.href}
                  onMouseEnter={() => n.mega ? setOpenMega(n.title) : setOpenMega(null)}
                  onMouseLeave={() => n.mega ? setOpenMega(null) : undefined}
                  className="text-gray-700 hover:text-[var(--brand-primary)] px-2 py-1"
                >
                  {n.title}
                </a>

                {n.mega && openMega === n.title && (
                  <div
                    onMouseEnter={() => setOpenMega(n.title)}
                    onMouseLeave={() => setOpenMega(null)}
                    className="absolute left-0 mt-3 w-screen max-w-md"
                  >
                    <MegaMenu data={n.mega} />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="/contact" className="hidden md:inline-block bg-[var(--brand-primary)] text-white px-4 py-2 rounded-md hover:opacity-95">Enquire</a>

            <button
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="px-4 py-6 space-y-4">
              {NAV.map((n) => (
                <div key={n.title}>
                  <a href={n.href} className="block text-gray-700 py-2">{n.title}</a>
                  {n.mega && (
                    <div className="pl-4">
                      {n.mega.items.map((it) => (
                        <a key={it.title} href={it.href} className="block text-sm text-gray-600 py-1">{it.title}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="/contact" className="block bg-[var(--brand-primary)] text-white text-center px-4 py-2 rounded">Enquire</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
