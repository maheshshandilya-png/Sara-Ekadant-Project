import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReraCard from './components/ReraCard';

export default function App() {
  const project = {
    title: 'PROJECT NAME (replace from binder)',
    subtitle: 'Tagline / short description from binder',
    heroImage: '/assets/hero-vanaha.jpg',
  };

  const rera = {
    projectName: 'PROJECT NAME (Replace)',
    reraNumber: 'P52100028031',
    registrationDate: '2025-01-10',
    status: 'Registered' as const,
    authority: 'Maharashtra RERA',
    verificationUrl: 'https://maharera.maharashtra.gov.in/',
    brochureUrl: '/assets/brochure.pdf',
    imageUrl: 'AZURE_BLOB_URL_HERE',
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero title={project.title} subtitle={project.subtitle} image={project.heroImage} />
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">RERA Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <ReraCard
                projectName={rera.projectName}
                reraNumber={rera.reraNumber}
                registrationDate={rera.registrationDate}
                status={rera.status}
                authority={rera.authority}
                verificationUrl={rera.verificationUrl}
                brochureUrl={rera.brochureUrl}
                qrImageUrl={rera.imageUrl}
                logoUrl={rera.imageUrl}
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-2">About the RERA registration</h3>
                <p className="text-sm text-gray-600">Replace this text with the binder's RERA notes: registration details, scope, any conditions, and a short consumer-friendly explanation of what RERA coverage includes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
