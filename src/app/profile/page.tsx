// E:\Dbali website\src\app\profile\page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getPageContent } from "@/lib/hygraph";

export default async function CompanyProfilePage() {
  const pageData = await getPageContent("company-profile");
  return (
    <>
      <Navbar />
      <PageHeader
        title={pageData?.title || "Company Profile"}
        subtitle={pageData?.subtitle || "Corporate structure, registration details, core capabilities, and market footprint."}
        breadcrumbs={[{ label: "Company" }, { label: "Profile" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              {pageData?.content?.html ? (
                <div dangerouslySetInnerHTML={{ __html: pageData.content.html }} className="prose" />
              ) : (
                <>
                  <h2>Corporate Overview</h2>
              <p>
                D. Bali Infrastructures & Developers Ltd. is a registered public limited company headquartered in Kashipur, Uttarakhand. Established in 2007 as a proprietorship firm, it transitioned into a corporate entity to support large-scale residential housing projects and infrastructure contracts in the Udham Singh Nagar district.
              </p>

              <h2>Business Profile Matrix</h2>
              <table style={{ width: "100%", borderCollapse: "collapse", margin: "24px 0 32px 0", fontSize: "15px" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid rgba(30, 34, 41, 0.08)" }}>
                    <td style={{ padding: "12px 0", fontWeight: "600", width: "40%" }}>Official Name</td>
                    <td style={{ padding: "12px 0", color: "var(--text-muted)" }}>D. Bali Infrastructures & Developers Ltd.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(30, 34, 41, 0.08)" }}>
                    <td style={{ padding: "12px 0", fontWeight: "600" }}>Year of Establishment</td>
                    <td style={{ padding: "12px 0", color: "var(--text-muted)" }}>2007 (Proprietorship), Expanded to Ltd. in 2013</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(30, 34, 41, 0.08)" }}>
                    <td style={{ padding: "12px 0", fontWeight: "600" }}>Corporate Identity Number</td>
                    <td style={{ padding: "12px 0", color: "var(--text-muted)" }}>U45200UR2013PLC000854 (Sample Registration)</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(30, 34, 41, 0.08)" }}>
                    <td style={{ padding: "12px 0", fontWeight: "600" }}>Registered Office</td>
                    <td style={{ padding: "12px 0", color: "var(--text-muted)" }}>Ramnagar Road, NH 121, Kashipur, Uttarakhand, India</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(30, 34, 41, 0.08)" }}>
                    <td style={{ padding: "12px 0", fontWeight: "600" }}>Core Specialization</td>
                    <td style={{ padding: "12px 0", color: "var(--text-muted)" }}>Residential Villa Layouts, Builder Floors, Gated Communities</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(30, 34, 41, 0.08)" }}>
                    <td style={{ padding: "12px 0", fontWeight: "600" }}>Primary Market</td>
                    <td style={{ padding: "12px 0", color: "var(--text-muted)" }}>Kashipur, Jaspur, Ramnagar, and Udham Singh Nagar District</td>
                  </tr>
                </tbody>
              </table>

              <h2>Core Services</h2>
              <ul>
                <li>
                  <strong>Real Estate Development:</strong> Designing and constructing luxury residential complexes, premium detached villas, and affordable community housing.
                </li>
                <li>
                  <strong>Land Development:</strong> Purchasing, planning, and upgrading layout land parcels into gated societies complete with utility grids, asphalt roads, and modern sewage infrastructure.
                </li>
                <li>
                  <strong>Construction Contracts:</strong> Managing end-to-end site developments, including concrete works, structural reinforcements, and architectural finishing operations.
                </li>
              </ul>

              <h2>Market Presence</h2>
              <p>
                Dbali has positioned itself as the go-to brand for buyers seeking highway accessibility (NH 121 / Ramnagar Road connectivity) combined with serene, well-secured community parks. We continue to hold land reserves in strategic growth corridors of Kashipur to support future phases of real estate development.
              </p>
                </>
              )}
            </div>

            <div className="sidebar-box">
              <h3>Corporate Structure</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "16px" }}>
                Our corporate operations are led by seasoned business managers and qualified engineering experts.
              </p>
              <ul style={{ paddingLeft: "16px", fontSize: "14px", lineHeight: "1.8" }}>
                <li>Board of Directors</li>
                <li>Strategic Procurement Unit</li>
                <li>Civil & Engineering Division</li>
                <li>Quality Control Operations</li>
                <li>Client Relations & Legal Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
