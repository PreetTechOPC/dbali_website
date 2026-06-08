// E:\Dbali website\src\app\projects\palm-groove\page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function PalmGrooveDetailsPage() {
  const specs = [
    { label: "Villa Sizes", value: "2 BHK Independent Duplex" },

    { label: "Possession Status", value: "Ready to Move" },
    { label: "Registry Option", value: "Immediate Registry & Mutation" },
    { label: "Location", value: "Ramnagar Road Corridor, Kashipur" },
    { label: "Approved By", value: "Leading Nationalized Banks (SBI, HDFC)" },
  ];

  const details = [
    {
      category: "Structure & Foundation",
      items: [
        "Earthquake resistant RCC framed columns & footings",
        "High-strength fly-ash brick walls with premium cement plastering",
        "Termite control treatment applied across foundation levels",
      ],
    },
    {
      category: "Flooring & Finishes",
      items: [
        "Premium double-charged vitrified flooring in drawing & dining rooms",
        "Anti-skid ceramic tiles in bathrooms and balconies",
        "High-grade weather-resistant exterior emulsion paints",
      ],
    },
    {
      category: "Kitchen & Washrooms",
      items: [
        "Fully modular cabinet setup with soft-close channels",
        "Black granite slab countertops with stainless steel sinks",
        "Branded CP fittings (Jaguar/Hindware equivalent) with wall-hung closets",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Dbali Palm Groove Villas"
        subtitle="Flagship 2 BHK luxury duplex villas designed for modern community living in Kashipur."
        breadcrumbs={[{ label: "Projects" }, { label: "Latest" }, { label: "Palm Groove" }]}
      />
      
      <section className="inner-page-section" style={{ paddingTop: "40px" }}>
        <div className="container">
          {/* Main Visual Showcase */}
          <div className="project-showcase-banner">
            <Image
              src="/palm_groove_villa.png"
              alt="Dbali Palm Groove Villas Render"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="project-showcase-info">
              <div className="project-badge project-badge-orange" style={{ marginBottom: "12px", display: "inline-block" }}>Ready to Move</div>
              <h2>Dbali Palm Groove</h2>
              <p>Ramnagar Road Corridor, Kashipur</p>
            </div>
          </div>

          <div className="content-grid-2">
            {/* Left Column: Details & Technical Specifications */}
            <div className="content-body">
              <h3>Project Overview</h3>
              <p>
                Dbali Palm Groove stands as one of our most popular ready-to-move enclaves. Each independent duplex villa is designed with detailed focus on ventilation, maximum floor space usage, and Vaastu compliance. The community features wide concrete roads, gated compound walls, and direct access to landscaped parks, ensuring your family enjoys safety and tranquility.
              </p>

              <h3 style={{ marginTop: "40px" }}>Technical Specifications</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", margin: "20px 0" }}>
                {details.map((section, idx) => (
                  <div key={idx} style={{ padding: "24px", background: "var(--bg-main)", borderRadius: "8px", border: "1px solid rgba(30, 34, 41, 0.05)" }}>
                    <h4 style={{ color: "var(--color-primary-dark)", fontSize: "16px", marginBottom: "12px", fontWeight: "600" }}>{section.category}</h4>
                    <ul style={{ paddingLeft: "20px", color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.7" }}>
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} style={{ marginBottom: "6px" }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 style={{ marginTop: "40px" }}>Amenities & Perks</h3>
              <ul className="amenities-list" style={{ marginTop: "20px" }}>
                <li>
                  <strong>24/7 Gated Security:</strong> Single point entry & exit guard posts accompanied by CCTV monitoring.
                </li>
                <li>
                  <strong>Internal Concrete Roads:</strong> 30-feet wide concrete roads designed for smooth double-lane vehicle access.
                </li>
                <li>
                  <strong>Integrated Parks:</strong> Landscaped family lawns and kids play areas positioned centrally in the block.
                </li>
              </ul>
            </div>

            {/* Right Column: Enquiry Form & Quick Stats */}
            <div className="sidebar-box">
              <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "var(--color-primary-dark)" }}>Quick Overview</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "30px" }}>
                {specs.map((spec, idx) => (
                  <div key={idx} className="project-stat-row">
                    <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{spec.label}</span>
                    <strong style={{ fontSize: "13px", color: "var(--color-primary-dark)", textAlign: "right" }}>{spec.value}</strong>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "var(--color-primary-dark)" }}>Schedule a Site Visit</h3>
              <ContactForm />

              <div style={{ marginTop: "24px", borderTop: "1px solid rgba(30, 34, 41, 0.08)", paddingTop: "20px" }}>
                <Link href="/downloads" className="btn btn-outline" style={{ display: "block", textAlign: "center", width: "100%" }}>
                  Download Project Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
