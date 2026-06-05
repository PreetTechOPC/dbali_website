// E:\Dbali website\src\app\vision-mission/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Vision & Mission"
        subtitle="Our aspirational outlook and daily commitments guiding our architectural decisions."
        breadcrumbs={[{ label: "Company" }, { label: "Vision & Mission" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              <h2>Our Vision</h2>
              <p style={{ fontSize: "18px", color: "var(--color-primary-dark)", lineHeight: "1.8", fontWeight: "500" }}>
                "To be the most trusted and quality-driven real estate development company in Uttarakhand, recognized for architectural perfection, timely handovers, and sustainable community living."
              </p>
              <p>
                We look beyond simple sales transaction numbers. Our vision is to elevate the residential standard of Udham Singh Nagar, developing landmarks that appreciate in asset value and provide comfortable multigenerational living.
              </p>

              <h2>Our Mission</h2>
              <ul>
                <li style={{ marginBottom: "16px" }}>
                  <strong>Rigorous Standards:</strong> Implementing detailed vendor surveillance, sourcing certified cement, steel, and fittings, and managing construction projects with engineering precision.
                </li>
                <li style={{ marginBottom: "16px" }}>
                  <strong>Client-First Commitment:</strong> Providing clear legal records, transparent purchase structures, and comprehensive after-sales support to simplify the buying process.
                </li>
                <li style={{ marginBottom: "16px" }}>
                  <strong>Sustainable Building:</strong> Integrating environmental features—such as optimal natural light, natural ventilation, and green parks—in alignment with our design philosophy.
                </li>
                <li>
                  <strong>Value Multiplication:</strong> Developing properties in strategic growth corridors with highway connection benefits, guaranteeing a solid return on investment for our clients.
                </li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Guiding Principle</h3>
              <p style={{ fontStyle: "italic", color: "var(--color-orange)", fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}>
                पंचतत्वेन सारगर्भितः
              </p>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                "Enriched with the five elements of nature." We construct spaces that integrate earth, water, fire, air, and space to create harmonized and healthy environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
