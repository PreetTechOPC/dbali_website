// E:\Dbali website\src\app\projects\rosedale\page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function RosedaleDetailsPage() {
  const specs = [
    { label: "Property Options", value: "Residential Plots & Custom Villas" },

    { label: "Possession Status", value: "Immediate (Ready for Construction)" },
    { label: "Internal Roads", value: "30 & 40 Feet Wide Layouts" },
    { label: "Registry Option", value: "Immediate Registry & Mutation" },
    { label: "Approved By", value: "Leading commercial banks for plot loans" },
  ];

  const details = [
    {
      category: "Colony Infrastructure",
      items: [
        "Wide asphalt/concrete roads with planned storm water drains",
        "Fully demarcated corner plots with clear boundary stones",
        "Planned central electrical grid with underground cabling conduits",
      ],
    },
    {
      category: "Security & Fencing",
      items: [
        "Fully enclosed perimeter boundary wall surrounding the township",
        "Main entrance security check gate with dedicated guard rooms",
        "CCTV camera provisions at major junctions and entrance points",
      ],
    },
    {
      category: "Green Spaces & Wellness",
      items: [
        "中央公园 (Central landscaped park) with flower beds and children's swing sets",
        "Paved jogging track lined with trees and flowering shrubs",
        "Planned community community centre hall and utilities yard",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Dbali Rosedale Housing"
        subtitle="A secure gated residential colony offering plots and custom villas with planned grids in Kashipur."
        breadcrumbs={[{ label: "Projects" }, { label: "Existing" }, { label: "Rosedale" }]}
      />
      
      <section className="inner-page-section" style={{ paddingTop: "40px" }}>
        <div className="container">
          {/* Main Visual Showcase */}
          <div className="project-showcase-banner">
            <Image
              src="/rosedale_housing.png"
              alt="Dbali Rosedale Housing Render"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="project-showcase-info">
              <div className="project-badge project-badge-teal" style={{ marginBottom: "12px", display: "inline-block" }}>Active Gated Society</div>
              <h2>Dbali Rosedale Housing</h2>
              <p>Residential Plots & Custom Villas • Kashipur, US Nagar</p>
            </div>
          </div>

          <div className="content-grid-2">
            {/* Left Column: Details & Technical Specifications */}
            <div className="content-body">
              <h3>Project Overview</h3>
              <p>
                Dbali Rosedale Housing represents our landmark gated township project. Engineered to provide structured plots for custom self-construction, the colony features wide internal roads, clean water connections, and a dedicated electricity transformer. The society boundary is secured to safeguard your family. Immediate registry options make it a safe and highly liquid real estate investment.
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
                  <strong>Immediate Construction:</strong> All plots are ready for excavation. Structural builders are available on consult.
                </li>
                <li>
                  <strong>Underground Conduit Cabling:</strong> Electricity grids are pre-planned to avoid overhead wire webs, promoting safety and aesthetics.
                </li>
                <li>
                  <strong>Decorative Street Lights:</strong> Installed energy efficient lights along all road intersections.
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
                  Download Layout Blueprint
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
