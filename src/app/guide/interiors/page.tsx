// E:\Dbali website\src\app\guide/interiors/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function InteriorDesigningPage() {
  const options = [
    {
      title: "Modular Kitchen Layouts",
      desc: "L-shaped and parallel kitchen designs featuring soft-close drawers, anti-scratch laminates, and built-in chimney provisions.",
    },
    {
      title: "Space Optimization & Wardrobes",
      desc: "Custom wall-to-wall sliding wardrobes and integrated study desks to maximize bedroom floor space.",
    },
    {
      title: "Premium Lighting & False Ceilings",
      desc: "Modern gypsum boards ceilings featuring energy-efficient LED spotlights and hidden ambient LED strip slots.",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Interior Designing Support"
        subtitle="Transforming properties into personalized homes with modular setups and space-planning consultants."
        breadcrumbs={[{ label: "Lifestyle & Guidance" }, { label: "Interior Design" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              <h2>Tailored Living Spaces</h2>
              <p>
                To make moving into your new home simple, Dbali offers custom interior design coordination. From selecting tile colors and wall textures during construction to planning modular kitchens and false ceilings, our design experts help align your lifestyle with your property's value.
              </p>

              <h2>Design Services Matrix</h2>
              <p>
                We offer three levels of interior customization packages when you book a Dbali home:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", margin: "24px 0" }}>
                {options.map((item, idx) => (
                  <div key={idx} style={{ padding: "20px", border: "1px solid rgba(30, 34, 41, 0.05)", borderRadius: "6px", background: "var(--bg-main)" }}>
                    <h4 style={{ fontSize: "16px", color: "var(--color-primary-dark)", margin: "0 0 8px 0" }}>{item.title}</h4>
                    <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "0", lineHeight: "1.5" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-box">
              <h3>Custom Interior Consult</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
                Speak directly to our space planning consultant to check customization availability for your booked unit.
              </p>
              <a href="/contact" className="btn btn-orange" style={{ width: "100%", display: "block", textAlign: "center" }}>
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
