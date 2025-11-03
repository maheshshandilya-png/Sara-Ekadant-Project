import React from 'react';

export default function MegaMenu({ data }: { data: { heading: string; items: { title: string; href: string; subtitle?: string }[]; image?: string } }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-2 gap-6 p-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">{data.heading}</h3>
          <ul className="space-y-3">
            {data.items.map((it) => (
              <li key={it.title}>
                <a href={it.href} className="block hover:bg-gray-50 p-2 rounded">
                  <div className="text-sm font-medium text-gray-800">{it.title}</div>
                  {it.subtitle && <div className="text-xs text-gray-500">{it.subtitle}</div>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          {data.image ? (
            <img src={data.image} alt={data.heading} className="w-full h-40 object-cover rounded" />
          ) : (
            <div className="w-full h-40 bg-gray-100 rounded" />
          )}
        </div>
      </div>
    </div>
  );
}
