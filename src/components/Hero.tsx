import React from 'react';

export default function Hero({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section className="pt-28">
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${image || '/assets/hero.jpg'})` }}>
        <div className="bg-black/40">
          <div className="mx-auto max-w-7xl px-6 py-28 text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">{title}</h1>
            {subtitle && <p className="mt-4 text-lg max-w-2xl">{subtitle}</p>}
            <div className="mt-6 flex gap-4">
              <a href="#enquire" className="bg-[var(--brand-accent)] px-5 py-3 rounded-md text-black font-semibold">Enquire Now</a>
              <a href="#brochure" className="border border-white px-5 py-3 rounded-md">Download Brochure</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
