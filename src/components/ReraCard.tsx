import React from 'react';

type ReraCardProps = {
  projectName: string;
  reraNumber: string;
  registrationDate?: string;
  status?: 'Registered' | 'Pending' | 'Expired';
  authority?: string;
  verificationUrl?: string;
  brochureUrl?: string;
  qrImageUrl?: string;
  logoUrl?: string;
};

export default function ReraCard({
  projectName,
  reraNumber,
  registrationDate,
  status = 'Registered',
  authority = 'RERA',
  verificationUrl,
  brochureUrl,
  qrImageUrl,
  logoUrl,
}: ReraCardProps) {
  const statusColor =
    status === 'Registered' ? 'bg-emerald-100 text-emerald-800' :
    status === 'Pending' ? 'bg-amber-100 text-amber-800' :
    'bg-red-100 text-red-800';

  return (
    <aside
      className="max-w-sm w-full rounded-2xl overflow-hidden border border-gray-200/40 shadow-lg"
      aria-label={
        `${projectName} RERA card`}
    >
      <div className="p-5 bg-white/40 backdrop-blur-md">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="bg-white p-2 rounded-sm shadow-sm">
              <img
                src={qrImageUrl || '/assets/rera-placeholder-qr.png'}
                alt="RERA QR code"
                className="w-28 h-28 object-contain"
                width={112}
                height={112}
              />
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="flex justify-end">
              <img
                src={logoUrl || '/assets/logo.png'}
                alt={`${projectName} logo`}
                className="h-12 w-auto object-contain"
              />
            </div>

            <div className="absolute right-0 top-12 flex gap-2">
              <button type="button" aria-hidden className="w-8 h-8 flex items-center justify-center bg-white/90 rounded-full shadow-sm border border-gray-200 text-gray-600" title="previous">‹</button>
              <button type="button" aria-hidden className="w-8 h-8 flex items-center justify-center bg-white/90 rounded-full shadow-sm border border-gray-200 text-gray-600" title="next">›</button>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-800 mb-2">RERA registration number</h4>
              <div className="text-base font-semibold text-gray-900">{reraNumber}</div>

              {registrationDate && (
                <div className="mt-2 text-xs text-gray-500">Registered on: <time dateTime={registrationDate}>{registrationDate}</time></div>
              )}

              <div className="mt-4">
                <h5 className="text-sm font-medium text-gray-800 mb-1">RERA web address</h5>
                {verificationUrl ? (
                  <a href={verificationUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline break-words">{verificationUrl}</a>
                ) : (
                  <div className="text-sm text-gray-500">—</div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {verificationUrl && (
                  <a href={verificationUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">Verify</a>
                )}
                {brochureUrl && (
                  <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1.5 bg-[var(--brand-primary)] text-white rounded-md text-sm hover:opacity-95">Download Brochure</a>
                )}
                <span className={`inline-flex items-center px-2 py-1 text-xs rounded ${statusColor}`}>{status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
