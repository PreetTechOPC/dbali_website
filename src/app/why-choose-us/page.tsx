// E:\Dbali website\src\app\why-choose-us/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getPageContent } from "@/lib/hygraph";

export default async function WhyChooseUsPage() {
  const pageData = await getPageContent("why-choose-us");
  const reasons = [
    {
      title: "Quality Construction Materials",
      desc: "We monitor every vendor and enforce strict concrete audits. From Tata steel to premium brand cement and modular fittings, we build homes designed to last for generations.",
      iconColor: "var(--color-orange)",
    },
    {
      title: "100% Legal & Approved Titles",
      desc: "All our projects are registered under RERA with verified land records. We provide full legal files directly to your financing bank, ensuring zero complications during registration.",
      iconColor: "var(--color-blue)",
    },
    {
      title: "Guaranteed Timely Handover",
      desc: "We understand the financial load of paying rent while waiting for possession. Our project timeline scheduling ensures key handover happens exactly as committed in your agreement.",
      iconColor: "var(--color-teal)",
    },
    {
      title: "Strategic Highway Connections",
      desc: "Dbali properties are placed in high-appreciation zones, such as Ramnagar Road (NH 121) in Kashipur, combining peaceful residential surroundings with immediate highway connectivity.",
      iconColor: "var(--color-green)",
    },
    {
      title: "Complete Transparency",
      desc: "No hidden charges, extra maintenance costs, or surprise processing fees. We outline all pricing options clearly upfront so you can make informed budget plans.",
      iconColor: "var(--color-orange)",
    },
    {
      title: "After-Sales Management",
      desc: "Our relationship doesn't end when we hand you the keys. We assist with water connection setups, electrical meter transfers, and initial community maintenance organization.",
      iconColor: "var(--color-blue)",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title={pageData?.title || "Why Choose Dbali"}
        subtitle={pageData?.subtitle || "Six reasons why over 1,200 homebuyers in Udham Singh Nagar trust us with their lifetime savings."}
        breadcrumbs={[{ label: "Company" }, { label: "Why Choose Us" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          {pageData?.content?.html ? (
            <div dangerouslySetInnerHTML={{ __html: pageData.content.html }} className="prose" />
          ) : (
            <div className="projects-grid" style={{ gap: "30px" }}>
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="stat-card"
                style={{
                  textAlign: "left",
                  background: "#ffffff",
                  border: "1px solid rgba(30, 34, 41, 0.06)",
                  borderTop: `4px solid ${item.iconColor}`,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h3 style={{ fontSize: "18px", color: "var(--color-primary-dark)", marginBottom: "12px", fontFamily: "var(--font-playfair)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", margin: "0" }}>
                  {item.desc}
                </p>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
