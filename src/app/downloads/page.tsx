"use client";

// E:\Dbali website\src\app\downloads/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

interface DownloadItem {
  name: string;
  desc: string;
  size: string;
  type: string;
}

export default function DownloadsPage() {
  const brochures: DownloadItem[] = [
    {
      name: "Dbali Palm Groove Brochure",
      desc: "Detailed layouts, construction materials specifications, and pricing matrices for our 2 BHK villas.",
      size: "4.8 MB",
      type: "PDF",
    },
    {
      name: "Dbali White House Floor Plans",
      desc: "Floor layouts for our 2 & 3 BHK premium builder floors on Ramnagar Road.",
      size: "3.2 MB",
      type: "PDF",
    },
    {
      name: "Dbali Rosedale Layout Plan",
      desc: "Master layout plan showing road widths, park entries, and plot borders.",
      size: "2.1 MB",
      type: "PDF",
    },
  ];

  const forms: DownloadItem[] = [
    {
      name: "Unit Booking Form",
      desc: "Official registration and unit booking application form.",
      size: "450 KB",
      type: "PDF",
    },
    {
      name: "KYC Documents Guide",
      desc: "Document list required for property registration and home loan processing.",
      size: "180 KB",
      type: "PDF",
    },
  ];

  const renderGrid = (items: DownloadItem[]) => (
    <div className="downloads-grid">
      {items.map((item, idx) => (
        <div className="download-card" key={idx}>
          <div className="download-info">
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>
          <div className="download-meta">
            <span>{item.type} • {item.size}</span>
            <a href="#" className="download-btn" onClick={(e) => e.preventDefault()}>
              <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <PageHeader
        title="Document Downloads"
        subtitle="Get instant access to brochures, floor plans, booking forms, and legal guidelines."
        breadcrumbs={[{ label: "Services" }, { label: "Downloads" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="download-category-section">
            <h3 className="download-category-title">Project Brochures & Layouts</h3>
            {renderGrid(brochures)}
          </div>

          <div className="download-category-section" style={{ marginTop: "60px" }}>
            <h3 className="download-category-title">Application Forms & Checklists</h3>
            {renderGrid(forms)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
