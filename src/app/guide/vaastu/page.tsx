// E:\Dbali website\src\app\guide/vaastu/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function VaastuSpecialPage() {
  const directions = [
    {
      zone: "Main Entrance",
      direction: "East or North-East",
      reason: "Brings positive energies, prosperity, and natural morning light into the main living areas.",
      color: "var(--color-orange)",
    },
    {
      zone: "Master Bedroom",
      direction: "South-West",
      reason: "Promotes stability, relaxation, and better sleep patterns for the head of the family.",
      color: "var(--color-blue)",
    },
    {
      zone: "Kitchen (Agni)",
      direction: "South-East",
      reason: "The fire element zone. Kitchen stoves placed here are believed to attract health and energy.",
      color: "var(--color-teal)",
    },
    {
      zone: "Prayer Room (Pooja)",
      direction: "North-East (Ishanya)",
      reason: "The divine quadrant. Ideal for quiet meditation, spiritual study, and morning prayers.",
      color: "var(--color-green)",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Vaastu Guidance"
        subtitle="Practical, culturally relevant Vaastu principles integrated into Dbali layouts to promote balanced living."
        breadcrumbs={[{ label: "Lifestyle & Guidance" }, { label: "Vaastu Special" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              <h2>Harmony of Five Elements</h2>
              <p>
                In alignment with our core philosophy of <em>Panchatatvena Saargarbhitah</em> (Enriched with the five elements), Dbali designs properties to balance Earth, Water, Fire, Air, and Space. We pay detailed attention to layout orientations during design phases to ensure our homebuyers enjoy positive energy flows and healthy lifestyles.
              </p>

              <h2>Direction Guide Matrix</h2>
              <p>
                Here is a summary of recommended placements for key rooms according to traditional Vaastu guidelines:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", margin: "24px 0" }}>
                {directions.map((dir, idx) => (
                  <div key={idx} style={{ padding: "20px", border: "1px solid rgba(30, 34, 41, 0.05)", borderRadius: "6px", display: "flex", gap: "16px", background: "var(--bg-main)", borderLeft: `4px solid ${dir.color}` }}>
                    <div style={{ minWidth: "140px" }}>
                      <strong style={{ display: "block", color: "var(--color-primary-dark)", fontSize: "16px" }}>{dir.zone}</strong>
                      <span style={{ fontSize: "13px", color: "var(--color-orange)", fontWeight: "600" }}>{dir.direction}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "0", lineHeight: "1.5" }}>{dir.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-box">
              <h3>Vaastu Compliance</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                All Dbali Palm Groove villas and White House floors are designed with Vaastu-compliant entrances and kitchen locations. Review our layouts in detail with our architectural team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
