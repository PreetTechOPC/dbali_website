// E:\Dbali website\src\app\md-message/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function MdMessagePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Managing Director's Message"
        subtitle="Our purpose, client commitments, and strategic blueprint for sustainable growth."
        breadcrumbs={[{ label: "Company" }, { label: "MD Message" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              <h2>Dear Friends and Homebuyers,</h2>
              <p>
                When we founded Dbali in 2007, our goal was simple yet profound: to build residential properties in Kashipur that stand the test of time, both structurally and financially. For us, real estate development is not just about concrete and brick; it is about delivering the keys to a lifetime of happiness, security, and pride.
              </p>
              <p>
                In the last nineteen years, the real estate market in Uttarakhand has evolved rapidly. Today’s homebuyers look for more than just walls; they seek modern communities with reliable drainage, proper lighting, wide concrete streets, and legal security. I am proud to say that Dbali has set the benchmark for these requirements in Udham Singh Nagar.
              </p>
              <blockquote>
                <p style={{ fontStyle: "italic", fontSize: "18px", borderLeft: "4px solid var(--color-orange)", paddingLeft: "20px", margin: "24px 0", color: "var(--color-primary-dark)" }}>
                  "We construct every home with an undeviating focus on quality. If a material or a design standard is not good enough for our own families, it is not good enough for our clients."
                </p>
              </blockquote>
              <p>
                Our vision of <strong>"being the best in everything we do"</strong> keeps us grounded yet ambitious. We monitor every step of the development cycle—from auditing material suppliers to inspecting finished tiles. Our focus on quality ensures that when you invest in a Dbali home, you are securing a highly appreciating asset.
              </p>
              <p>
                We thank our existing buyers for their continued trust and welcome new families to explore our projects. We promise to uphold the transparency, timely handovers, and engineering perfection that define Dbali Infrastructures & Developers.
              </p>
              
              <div style={{ marginTop: "40px" }}>
                <strong style={{ display: "block", fontSize: "18px", color: "var(--color-primary-dark)" }}>Managing Director</strong>
                <span style={{ color: "var(--color-orange)", fontWeight: "600" }}>D. Bali Infrastructures & Developers Ltd.</span>
              </div>
            </div>

            <div className="sidebar-box">
              <h3>Our Promise</h3>
              <ul style={{ paddingLeft: "16px", fontSize: "14px", lineHeight: "1.8", margin: "0" }}>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Zero Compromise:</strong> Testing of concrete strength at every structural level.
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <strong>RERA Compliance:</strong> All active layouts are fully compliant and registered.
                </li>
                <li>
                  <strong>Direct Support:</strong> Our customer care desk is always available for booking, registration, and utility setups.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
