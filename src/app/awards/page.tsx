// E:\Dbali website\src\app\awards/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getAwards } from "@/lib/hygraph";
import Image from "next/image";

export default async function AwardsPage() {
  const dynamicAwards = await getAwards();
  const achievements = dynamicAwards && dynamicAwards.length > 0 
    ? dynamicAwards.map((a: { title: string; year: string; description: string; image?: { url: string } }) => ({
        title: a.title,
        organization: "Dbali Infrastructure", // Schema doesn't have org, providing fallback
        year: a.year,
        desc: a.description,
        image: a.image?.url || null
      }))
    : [];

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
            {achievements.map((item: { title: string; organization: string; year: string; desc: string; image?: string }, idx: number) => (
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
                {item.image && (
                  <div style={{ position: "relative", width: "100%", height: "150px", marginBottom: "12px", borderRadius: "4px", overflow: "hidden" }}>
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                  </div>
                )}
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
