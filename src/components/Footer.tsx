import { Building2, Mail, Phone, MapPin, FileCheck, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 py-16 px-6 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-playfair font-bold text-white">Sara Ekadant</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Exceptional properties for discerning buyers seeking the finest in residential real estate.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Sara Ekadant, Survey No. 11/A, Mahalunge, Pune</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>+91 999 999 9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>info@luxuryhomes.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">RERA Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">RERA No.</p>
                  <p className="font-semibold text-gold-500">P52100012345</p>
                </div>
              </div>
              <a
                href="https://maharera.mahaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Visit MahaRERA
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold-500/20">
          <div className="text-center text-gray-500 text-sm space-y-2">
            <p>&copy; {new Date().getFullYear()} Sara Real Estate. All rights reserved.</p>
            <p className="text-xs">
              Disclaimer: This website is for informational purposes only. All details are subject to change without notice.
              Please verify all information with our sales team before making any decision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
