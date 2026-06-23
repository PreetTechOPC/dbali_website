// E:\Dbali website\src\app\projects\white-house\page.tsx
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ImageGallery from "@/components/ImageGallery";
import { getProject } from "@/lib/hygraph";

export default function WhiteHouseDetailsPage() {
  const [galleryImages, setGalleryImages] = useState<{url: string}[]>([]);
  const [mapImageUrl, setMapImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjectData() {
      const data = await getProject("white-house-phase-3");
      if (data?.gallery) {
        setGalleryImages(data.gallery);
      }
      if (data?.mapImage?.url) {
        setMapImageUrl(data.mapImage.url);
      }
    }
    fetchProjectData();
  }, []);

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
        breadcrumbs={[{ label: "Projects" }, { label: "Latest" }, { label: "White House" }]}
      />
      
      <section className="inner-page-section" style={{ paddingTop: "40px" }}>
        <div className="container">
          {/* Main Visual Showcase */}
          <div className="project-showcase-banner">
            <Image
              src="/WhatsApp Image 2026-06-16 at 11.34.58 AM.jpeg"
              alt="Dbali White House Render"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="project-showcase-info">
              <div className="project-badge project-badge-blue" style={{ marginBottom: "12px", display: "inline-block" }}>Selling Fast</div>
              <h2>Dbali White House</h2>
              <p>Nijhara, Kashipur in the Udham Singh Nagar district of Uttarakhand</p>
            </div>
          </div>

          <div className="content-grid-2">
            {/* Left Column: Details & Technical Specifications */}
            <div className="content-body">
              <h3>Project Overview</h3>
              <p>
                Dbali White House represents our premium class of builder floors, offering independent access, luxury floor plates, and prime location connectivity. Positioned directly in Nijhara, Kashipur in the Udham Singh Nagar district of Uttarakhand, the property features instant connectivity to local schools, hospitals, and transit points. Each floor boasts spacious front-facing balconies, utility shafts, and high-quality modular fittings.
              </p>

              <div style={{ marginTop: "40px", marginBottom: "20px" }}>
                <h3 style={{ marginBottom: "16px" }}>Location Map</h3>
                <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(30, 34, 41, 0.1)", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                  <Image 
                    src={mapImageUrl || "/project_gallery_4.jpg"} 
                    alt="Project Location Map" 
                    width={800} 
                    height={400} 
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", maxHeight: "400px" }} 
                  />
                </div>
                {!mapImageUrl && (
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center" }}>
                    *Placeholder image shown. Add &apos;mapImage&apos; field in Hygraph to upload a custom map.
                  </p>
                )}
              </div>

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
                  <strong>Stilt Car Parking:</strong> Allocated, shaded vehicle space for each floor owner.
                </li>
                <li>
                  <strong>Modern Elevator:</strong> Full-sized passenger lifts operating with automatic rescue devices (ARD).
                </li>
                <li>
                  <strong>Rainwater Harvesting:</strong> Engineered underground conservation pits designed to maintain the local water table.
                </li>
              </ul>

              {galleryImages.length > 0 && (
                <>
                  <h3 style={{ marginTop: "40px" }}>Project Gallery</h3>
                  <ImageGallery images={galleryImages} />
                </>
              )}
            </div>

            {/* Right Column: Enquiry Form & Quick Stats */}
            <div className="sidebar-box">
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
