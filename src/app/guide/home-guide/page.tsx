// E:\Dbali website\src\app\guide/home-guide/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function HomeGuidePage() {
  const faqs = [
    {
      q: "What legal documents should I check before buying a property?",
      a: "Always verify the RERA Registration Certificate, the Title Deed (to ensure land ownership), the Land Use Certificate (conforming to residential zoning), and the Approved Building/Layout Plan from local regulatory authorities.",
    },
    {
      q: "How does property registration work in Kashipur?",
      a: "Once the booking is confirmed and the allotment letter is issued, the sale deed is prepared. Registration is executed at the Sub-Registrar Office in Kashipur, requiring payment of Stamp Duty and Registration Charges.",
    },
    {
      q: "What is RERA, and why is it important for me?",
      a: "The Real Estate Regulatory Authority (RERA) protects homebuyers from project delays and fraud. A RERA-registered project guarantees that layout details, builder credentials, and project completion timelines are legally binding.",
    },
    {
      q: "What basic components should I include in my home budget?",
      a: "Aside from the basic property price, budget for: (1) Stamp duty and registration fees (approx. 5-7%), (2) Goods and Services Tax (GST), (3) Electrification and water connection charges, and (4) Initial society maintenance deposits.",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Homebuyer's Guide"
        subtitle="Empowering you with legal knowledge, budgeting advice, and purchase tips to simplify homebuying."
        breadcrumbs={[{ label: "Lifestyle & Guidance" }, { label: "Home Guide" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              <h2>Step-by-Step Homebuying Process</h2>
              <p>
                Buying a home is one of the most significant investments of your life. To help you make an informed decision, our client relations team has created this guide covering budgeting, legal parameters, and home selection.
              </p>

              <h2 style={{ marginTop: "40px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
              <div className="guide-faq-grid">
                {faqs.map((faq, idx) => (
                  <div className="faq-card" key={idx}>
                    <h4>{faq.q}</h4>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-box">
              <h3>Have Questions?</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
                Our legal compliance and sales relationship managers can walk you through the documents and home loan parameters.
              </p>
              <a href="/contact" className="btn btn-orange" style={{ width: "100%", textAlign: "center", display: "block" }}>
                Speak to Specialist
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
