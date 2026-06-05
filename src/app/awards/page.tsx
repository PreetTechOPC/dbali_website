// E:\Dbali website\src\app\awards/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function AwardsPage() {
  const achievements = [
    {
      title: "19+ Years of Real Estate Excellence",
      organization: "Kashipur Property Council",
      year: "2026",
      desc: "Recognizing outstanding contribution to residential infrastructure and quality home construction in Uttarakhand.",
    },
    {
      title: "Timely Delivery Certification",
      organization: "Udham Singh Nagar Developers Forum",
      year: "2023",
      desc: "Awarded for maintain a 100% on-time project completion and client handover record for three consecutive years.",
    },
    {
      title: "ISO 9001:2015 Compliance (Quality)",
      organization: "Quality Control Audits",
      year: "2020",
      desc: "Certification for executing detailed vendor surveillance and engineering project management protocols.",
    },
    {
      title: "Best Residential Villa Layout Design",
      organization: "Regional Architectural Association",
      year: "2019",
      desc: "Honored for the space utilization, lighting, and air flow layout integrated into Dbali Palm Groove.",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Awards & Achievements"
        subtitle="Certifications and industry recognitions that validate our commitment to residential quality."
        breadcrumbs={[{ label: "Media" }, { label: "Awards & Achievements" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="projects-grid" style={{ gap: "30px" }}>
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="stat-card"
                style={{
                  textAlign: "left",
                  background: "#ffffff",
                  border: "1px solid rgba(30, 34, 41, 0.05)",
                  borderTop: "4px solid var(--color-blue)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--color-orange)", textTransform: "uppercase" }}>
                  Year {item.year}
                </span>
                <h3 style={{ fontSize: "18px", color: "var(--color-primary-dark)", margin: "8px 0 12px 0", fontFamily: "var(--font-playfair)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", margin: "0 0 12px 0" }}>
                  {item.desc}
                </p>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-primary-dark)", borderTop: "1px solid rgba(30, 34, 41, 0.05)", paddingTop: "10px" }}>
                  Issued by: {item.organization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
