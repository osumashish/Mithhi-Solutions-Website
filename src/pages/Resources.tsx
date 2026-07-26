import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Eye, Check, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Resources: React.FC = () => {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = (id: string, fileName: string) => {
    setDownloadedId(id);

    // Create a mock text file download if asset doesn't exist locally
    const element = document.createElement('a');
    const file = new Blob([`Ashish Mishra - ${fileName}\nExecutive IT Leader & AI Strategy Advisor\nWebsite: https://executive-presence-9.preview.emergentagent.com\nEmail: ashm1305@hotmail.com`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName.replace(/\s+/g, '_') + '.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloadedId(null), 3000);
  };

  return (
    <div className="space-y-0">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Resources & Downloads
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Executive Frameworks & Templates
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Download proven tools, AI governance checklists, ITSM metrics toolkits, and Ashish Mishra's formal executive CV.
            </p>
          </div>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {PORTFOLIO_DATA.resources.map((res) => (
            <div
              key={res.id}
              className="border text-card-foreground shadow rounded-3xl border-border/70 bg-card/60 p-8 sm:p-10 transition duration-300 hover:border-primary/40 hover:shadow-glow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                    <FileText className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    {res.category}
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground pt-2">
                  {res.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {res.description}
                </p>

                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground pt-2">
                  <span>Type: <strong className="text-foreground">{res.fileType}</strong></span>
                  <span>Size: <strong className="text-foreground">{res.fileSize}</strong></span>
                </div>
              </div>

              <div className="mt-8 border-t border-border/60 pt-6 flex flex-wrap items-center justify-between gap-4">
                {res.previewUrl && (
                  <button
                    type="button"
                    onClick={() => setIsPreviewOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition border border-border px-4 py-2 rounded-full"
                  >
                    <Eye className="h-4 w-4" /> Preview CV
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleDownload(res.id, res.title)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-white shadow-glow hover:opacity-90 ml-auto"
                >
                  {downloadedId === res.id ? (
                    <>
                      <Check className="h-4 w-4" /> Downloaded
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" /> Download Asset
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CV PREVIEW MODAL */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl border border-border bg-slate-900 p-8 shadow-2xl space-y-6">
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
              <h3 className="font-heading text-xl font-bold text-foreground">Ashish Mishra — Executive CV Preview</h3>
            </div>

            <div className="border border-border/80 rounded-2xl p-6 bg-slate-950 space-y-4 text-sm text-muted-foreground">
              <div className="border-b border-border/60 pb-3">
                <p className="font-heading text-lg font-bold text-white">Ashish Mishra</p>
                <p className="text-xs text-cyan-400">Regional Technology Leader — APAC | The Woodbridge Group</p>
                <p className="text-xs text-slate-400">Pune, India · ashm1305@hotmail.com · 17+ Years Leadership</p>
              </div>
              <p>
                <strong className="text-white">Core Expertise:</strong> Executive IT Leadership, ServiceNow ITSM/ITOM, AI Strategy & Governance, Cloud Migration, SLA Improvement (82% → 96%), Multi-Country Team Management.
              </p>
              <p>
                <strong className="text-white">Key Certifications:</strong> PMP®, PRINCE2®, ITIL® 4 Managing Professional, CCNA, AWS Solutions Architect Associate, ServiceNow Administrator.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="px-5 py-2 text-xs font-semibold text-muted-foreground border border-border rounded-full hover:text-foreground"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownload('1', 'Ashish_Mishra_Executive_Resume');
                  setIsPreviewOpen(false);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2 text-xs font-semibold text-white shadow-glow"
              >
                <Download className="h-4 w-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA SECTION */}
      <section className="container py-16">
        <div className="glass rounded-3xl p-10 text-center shadow-soft border border-border/80 flex flex-col items-center gap-6">
          <h2 className="font-heading text-3xl font-extrabold text-foreground">Need Custom Enterprise Frameworks?</h2>
          <p className="max-w-xl text-muted-foreground text-base">
            Reach out directly for tailored strategy decks, RFP templates, or custom team training curriculum.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-11 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-white shadow-glow hover:opacity-90"
          >
            Request Custom Asset <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
