import { FileCheck, ExternalLink, QrCode } from 'lucide-react';

export function RERACard() {
  return (
    <section className="py-16 px-6 bg-navy-800 border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-3">
            RERA Registration
          </h2>
          <p className="text-gray-400">
            This project is registered under the Real Estate Regulatory Authority
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-navy-900 border-2 border-gold-500/30 p-8 hover:border-gold-500 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-gold-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                  RERA Registration Number
                </h3>
                <p className="text-2xl font-bold text-gold-500 mb-4 tracking-wide">
                  P52100012345
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Project Name: Sara Ekadant
                </p>
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on MahaRERA Website
                </a>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 border-2 border-gold-500/30 p-8 hover:border-gold-500 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <QrCode className="w-6 h-6 text-gold-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                  Developer Details
                </h3>
                <div className="space-y-2 text-gray-400">
                  <p>
                    <span className="text-white font-medium">Name:</span> Sara Real Estate
                  </p>
                  <p>
                    <span className="text-white font-medium">Location:</span> Survey No. 11/A, Mahalunge, Pune
                  </p>
                  <p>
                    <span className="text-white font-medium">Status:</span>{' '}
                    <span className="text-green-400">Active</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm max-w-3xl mx-auto">
            All details mentioned above are as per the approved plans by the competent authority.
            For complete project details, visit the MahaRERA website or contact our sales office.
          </p>
        </div>
      </div>
    </section>
  );
}
