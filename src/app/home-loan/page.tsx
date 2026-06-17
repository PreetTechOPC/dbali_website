// E:\Dbali website\src\app\home-loan/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function HomeLoanPage() {
  const steps = [
    {
      step: "01",
      title: "Select Your Unit",
      desc: "Finalize your dream villa or builder floor at Dbali Palm Groove, White House, or Rosedale.",
    },
    {
      step: "02",
      title: "Document Collection",
      desc: "Our sales team prepares the RERA file, floor layouts, and allotment letter for your bank.",
    },
    {
      step: "03",
      title: "Bank Approval",
      desc: "Our tie-up relationship managers process your files directly to speed up verification.",
    },
    {
      step: "04",
      title: "Disbursement",
      desc: "The loan is sanctioned and disbursed according to the construction milestones.",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Home Loan Assistance"
        subtitle="Simplifying home financing with direct tie-ups and documentation support."
        breadcrumbs={[{ label: "Services" }, { label: "Home Loan" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              <h2>Hassle-Free Home Financing</h2>
              <p>
                Financing a house can feel overwhelming. To make the process simple, Dbali has partnered with leading national and private banks. Because our projects are fully registered under RERA and pre-approved by major banks, your loan processing time and legal verification steps are greatly reduced.
              </p>

              <h2>Our Banking Partners</h2>
              <p>
                We have direct relationships and pre-approved project status with the following financial institutions:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "16px", margin: "24px 0" }}>
                {["State Bank of India", "HDFC Bank"].map((bank, idx) => (
                  <div key={idx} style={{ padding: "16px", background: "var(--bg-main)", border: "1px solid rgba(30, 34, 41, 0.05)", borderRadius: "4px", textAlign: "center", fontWeight: "600", fontSize: "14px", color: "var(--color-primary-dark)" }}>
                    {bank}
                  </div>
                ))}
              </div>

              <h2>Eligibility Basics</h2>
              <p>
                Generally, banks calculate home loan eligibility based on:
              </p>
              <ul>
                <li><strong>Age Limits:</strong> 21 to 65 years at the time of loan completion.</li>
                <li><strong>Income Requirements:</strong> Consistent monthly income (salaried employees or self-employed professionals).</li>
                <li><strong>CIBIL Score:</strong> A score of 700 or above helps secure lower interest rates.</li>
              </ul>

              <h2>Documentation Checklist</h2>
              <p>
                To speed up your loan approval, ensure you have these documents ready. Our team will assist in collating them:
              </p>
              <ul>
                <li>Pan Card & Aadhaar Card</li>
                <li>Last 3 Months Salary Slips (Salaried) or 2 Years ITR (Business Owners)</li>
                <li>Last 6 Months Bank Account Statements</li>
                <li>Proof of Address (Utility Bills, Rent Agreement)</li>
                <li>Dbali Booking/Allotment Letter (Provided by us)</li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Free Loan Consultation</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
                Need help calculating your monthly EMI or understanding loan eligibility? Request a call from our dedicated finance manager.
              </p>
              <a href="/contact" className="btn btn-orange" style={{ width: "100%", textAlign: "center", display: "block" }}>
                Request Call Back
              </a>
            </div>
          </div>

          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "28px", marginTop: "60px", marginBottom: "30px", textAlign: "center" }}>
            The Loan Process in 4 Steps
          </h2>
          <div className="stats-grid">
            {steps.map((item, idx) => (
              <div key={idx} className="stat-card" style={{ background: "var(--bg-main)", border: "1px solid rgba(30, 34, 41, 0.04)" }}>
                <span style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-orange)", display: "block", marginBottom: "8px" }}>{item.step}</span>
                <h4 style={{ fontSize: "16px", color: "var(--color-primary-dark)", marginBottom: "8px" }}>{item.title}</h4>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "0", lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
