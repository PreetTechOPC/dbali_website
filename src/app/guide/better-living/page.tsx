// E:\Dbali website\src\app\guide/better-living/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function BetterLivingPage() {
  const pillars = [
    {
      title: "Gated Security & Safety",
      desc: "24/7 CCTV surveillance at entry points, perimeter wall enclosures, and dedicated security guards keep your family safe.",
    },
    {
      title: "Greenery & Landscaping",
      desc: "Lush communal parks, tree-lined walking tracks, and flower gardens promote wellness and fresh morning walks.",
    },
    {
      title: "Sustainable Grid Infrastructure",
      desc: "Designed with rainwater harvesting pits, wide concrete roads, and planned sewage grids to ensure zero water logging.",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Better Living Principles"
        subtitle="Designing communities focused on safety, environment, family wellness, and comfort."
        breadcrumbs={[{ label: "Lifestyle & Guidance" }, { label: "Better Living" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              <h2>Designing for Wellness</h2>
              <p>
                A home goes beyond property walls. The environment outside plays a major role in your family's health, social interaction, and peace of mind. At Dbali, we specialize in building communities that offer open air, safe play zones, and organized layouts.
              </p>

              <h2>Our Community Features</h2>
              <p>
                Every Dbali gated society is constructed around three fundamental lifestyle pillars:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", margin: "24px 0" }}>
                {pillars.map((pillar, idx) => (
                  <div key={idx} style={{ padding: "20px", border: "1px solid rgba(30, 34, 41, 0.05)", borderRadius: "6px", background: "var(--bg-main)" }}>
                    <h4 style={{ fontSize: "16px", color: "var(--color-primary-dark)", margin: "0 0 8px 0" }}>{pillar.title}</h4>
                    <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "0", lineHeight: "1.5" }}>{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-box">
              <h3>Visit Our Communities</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
                Coordinate a free guided site tour to explore the parks and roads at Dbali Palm Groove or Rosedale Housing.
              </p>
              <a href="/contact" className="btn btn-orange" style={{ width: "100%", display: "block", textAlign: "center" }}>
                Book Guided Tour
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
