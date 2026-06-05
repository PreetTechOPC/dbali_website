// E:\Dbali website\src\app\projects\white-house\page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function WhiteHouseDetailsPage() {
  const specs = [
    { label: "Floor Sizes", value: "2 & 3 BHK Builder Floors" },
    { label: "Price Range", value: "₹48.50 – 65.00 Lakhs" },
    { label: "Possession Status", value: "Under Construction (Phase I Delivery Soon)" },
    { label: "Location", value: "Ramnagar Road (NH 121), Kashipur" },
    { label: "Features", value: "Elevator access & reserved stilt parking" },
    { label: "Approved By", value: "RERA Registered & major banks approved" },
  ];

  const details = [
    {
      category: "Structure & Elevators",
      items: [
        "RERA approved earthquake-resistant structure with stilt level parking",
        "High-speed automatic passenger elevator with generator power backup",
        "Wide granite staircases with stainless steel safety railings",
      ],
    },
    {
      category: "Flooring & Interior Woodwork",
      items: [
        "Premium large-format vitrified tiling across drawing & bedroom zones",
        "Fully pre-fitted laminate wardrobes in bedrooms with sliding doors",
        "Premium solid wood main doors with multi-lever digital lock systems",
      ],
    },
    {
      category: "Electrical & Piping",
      items: [
        "Concealed copper wiring (Finolex/Havells) with modular switch grids",
        "Split AC points fully provisioned in all bedrooms and living spaces",
        "24/7 pressurized water supply connected to independent overhead tanks",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Dbali White House Floors"
        subtitle="Premium 2 & 3 BHK builder floors featuring modern elevator comforts and premium finishes."
        breadcrumbs={[{ label: "Projects" }, { label: "Latest" }, { label: "White House" }]}
      />
      
      <section className="inner-page-section" style={{ paddingTop: "40px" }}>
        <div className="container">
          {/* Main Visual Showcase */}
          <div style={{ position: "relative", height: "450px", borderRadius: "12px", overflow: "hidden", marginBottom: "40px", boxShadow: "var(--shadow-md)" }}>
            <Image
              src="/white_house.png"
              alt="Dbali White House Render"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 30px", background: "linear-gradient(to top, rgba(30, 34, 41, 0.9) 20%, rgba(30, 34, 41, 0))" }}>
              <div className="project-badge project-badge-blue" style={{ marginBottom: "12px", display: "inline-block" }}>Selling Fast</div>
              <h2 style={{ color: "white", fontSize: "32px", margin: "0 0 8px 0", fontFamily: "var(--font-poppins)" }}>Dbali White House</h2>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "16px", margin: 0 }}>₹48.50 – 65.00 Lakhs • Directly on Ramnagar Road (NH 121)</p>
            </div>
          </div>

          <div className="content-grid-2">
            {/* Left Column: Details & Technical Specifications */}
            <div className="content-body">
              <h3>Project Overview</h3>
              <p>
                Dbali White House represents our premium class of builder floors, offering independent access, luxury floor plates, and prime location connectivity. Positioned directly on Ramnagar Road (NH 121), the property features instant connectivity to local schools, hospitals, and transit points. Each floor boasts spacious front-facing balconies, utility shafts, and high-quality modular fittings.
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
              <ul className="timeline-list" style={{ marginTop: "20px" }}>
                <li>
                  <strong>Stilt Car Parking:</strong> Allocated, shaded vehicle space for each floor owner.
                </li>
                <li>
                  <strong>Modern Elevator:</strong> Full-sized passenger lifts operating with automatic rescue devices (ARD).
                </li>
                <li>
                  <strong>Rainwater Harvesting:</strong> Engineered underground conservation pits designed to maintain the local water table.
                </li>
              </ul>
            </div>

            {/* Right Column: Enquiry Form & Quick Stats */}
            <div className="sidebar-box">
              <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "var(--color-primary-dark)" }}>Quick Overview</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "30px" }}>
                {specs.map((spec, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(30, 34, 41, 0.06)", paddingBottom: "10px" }}>
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
