// E:\Dbali website\src\app\about\page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getPageContent } from "@/lib/hygraph";

export default async function AboutUsPage() {
  const pageData = await getPageContent("about-us");
  return (
    <>
      <Navbar />
      <PageHeader
        title={pageData?.title || "About Us"}
        subtitle={pageData?.subtitle || "A legacy of trust, architectural excellence, and customer-first values in Uttarakhand."}
        breadcrumbs={[{ label: "Company" }, { label: "About Us" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              {pageData?.content?.html ? (
                <div dangerouslySetInnerHTML={{ __html: pageData.content.html }} className="prose" />
              ) : (
                <>
                  <h2>Building Landmarks Since 2007</h2>
              <p>
                Dbali Real Estate, officially incorporated as <strong>D. Bali Infrastructures & Developers Ltd.</strong>, began its journey in 2007 in Kashipur, Uttarakhand. Founded on the principles of engineering perfection and absolute client transparency, we have grown from a local residential builder into one of the region&apos;s most prominent real estate developers.
              </p>
              <p>
                We specialize in creating premium, pocket-friendly luxury villas, high-end builder floors, and master-planned gated societies. By monitoring every detail of our supply chain and implementing rigorous project controls, we have earned the trust of over 1,200 happy families.
              </p>

              <h2>Our Core Values</h2>
              <ul>
                <li>
                  <strong>Uncompromised Quality:</strong> We perform intensive quality checks and vendor audits to source premium steel, grade-A concrete, and high-quality electrical and plumbing fixtures.
                </li>
                <li>
                  <strong>Absolute Transparency:</strong> Zero hidden charges, clean titles, and upfront legal documentation ensure peace of mind for every homebuyer.
                </li>
                <li>
                  <strong>Timely Handover:</strong> Through systematic project scheduling and expert engineering oversight, we deliver on our possession promises without delays.
                </li>
                <li>
                  <strong>Community First:</strong> We build homes that cultivate healthy, modern lifestyles, featuring green parks, secure parameters, and integrated amenities.
                </li>
              </ul>

              <h2>Our Approach</h2>
              <p>
                Every brick we lay is guided by the philosophy of <em>Panchatatvena Saargarbhitah</em>—integrating the five elements of nature to bring harmony, balance, and ventilation into modern residential spaces. Our design process ensures maximum natural light, structural durability, and optimal space utilization.
              </p>
                </>
              )}
            </div>

            <div className="sidebar-box">
              <h3>Dbali Credentials</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
                Quick facts demonstrating our leadership and credibility in the Udham Singh Nagar real estate market.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <strong style={{ display: "block", color: "var(--color-orange)", fontSize: "18px" }}>19+ Years</strong>
                  <span style={{ fontSize: "14px", color: "var(--color-primary-dark)" }}>Of local development experience.</span>
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--color-blue)", fontSize: "18px" }}>1,200+ Homes</strong>
                  <span style={{ fontSize: "14px", color: "var(--color-primary-dark)" }}>Constructed and delivered.</span>
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--color-teal)", fontSize: "18px" }}>100% Clear Titles</strong>
                  <span style={{ fontSize: "14px", color: "var(--color-primary-dark)" }}>Fully approved legal records.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
