// E:\Dbali website\src\app\career/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getCareers } from "@/lib/hygraph";

export default async function CareerPage() {
  const dynamicOpenings = await getCareers();
  const fallbackOpenings = [
    {
      role: "Site Engineer (Civil)",
      dept: "Construction Division",
      exp: "3 - 5 Years",
      loc: "Kashipur, US Nagar",
    },
    {
      role: "Sales Relationship Executive",
      dept: "Sales & Marketing",
      exp: "1 - 3 Years",
      loc: "Kashipur, US Nagar",
    },
    {
      role: "Accountant (Real Estate)",
      dept: "Finance & Accounts",
      exp: "2 - 4 Years",
      loc: "Kashipur Head Office",
    },
  ];

  const openings = dynamicOpenings && dynamicOpenings.length > 0 
    ? dynamicOpenings.map((c: { jobTitle: string; department: string; location: string }) => ({
        role: c.jobTitle,
        dept: c.department,
        exp: "Experience not specified", // Could add to schema later
        loc: c.location,
      }))
    : fallbackOpenings;

  return (
    <>
      <Navbar />
      <PageHeader
        title="Careers at Dbali"
        subtitle="Build your professional future with the fastest-growing real estate developer in Kashipur."
        breadcrumbs={[{ label: "Services" }, { label: "Careers" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="content-grid-2">
            <div className="content-body">
              <h2>Our Work Culture</h2>
              <p>
                At Dbali, we believe our people are our strongest foundation. We cultivate an inclusive, collaborative environment where architectural creativity, engineering precision, and customer commitment are recognized and rewarded. 
              </p>
              <p>
                We offer structured learning resources, competitive compensation packages, and opportunities to work on landmark housing developments in Udham Singh Nagar. If you are passionate about building quality spaces, we invite you to join our growing team.
              </p>

              <h2>Departments & Roles</h2>
              <p>
                Our company operates across five key departments, each offering unique growth paths:
              </p>
              <ul>
                <li><strong>Civil Engineering & Construction:</strong> Overseeing foundations, quality management, site safety, and execution.</li>
                <li><strong>Design & Architecture:</strong> Space planning, drafting floor templates, and landscaping layouts.</li>
                <li><strong>Sales & Client Relations:</strong> Supporting buyers through tours, home loan assistance, and registrations.</li>
                <li><strong>Finance & Administration:</strong> Vendor invoicing, regulatory compliance, and general operations.</li>
              </ul>

              <h2>Current Openings</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "24px 0" }}>
                {openings.map((job: { role: string; dept: string; exp: string; loc: string }, idx: number) => (
                  <div key={idx} style={{ padding: "24px", border: "1px solid rgba(30, 34, 41, 0.06)", borderRadius: "6px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                    <div>
                      <h4 style={{ fontSize: "18px", color: "var(--color-primary-dark)", margin: "0 0 4px 0" }}>{job.role}</h4>
                      <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>{job.dept} • {job.exp} • {job.loc}</span>
                    </div>
                    <a href="#apply" className="btn btn-outline btn-sm-nav" style={{ alignSelf: "center" }}>
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-box" id="apply">
              <h3>Apply Now</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
                Send your updated resume along with your portfolio to our human resource department.
              </p>
              <div style={{ background: "rgba(30, 34, 41, 0.03)", padding: "16px", borderRadius: "4px", fontSize: "14px", color: "var(--color-primary-dark)" }}>
                <strong style={{ display: "block", marginBottom: "4px" }}>Email your resume:</strong>
                <a href="mailto:careers@dbali.in" style={{ color: "var(--color-orange)", fontWeight: "600" }}>careers@dbali.in</a>
                <span style={{ display: "block", marginTop: "12px", fontSize: "12px", color: "var(--text-muted)" }}>
                  Please mention the role in the email subject (e.g., &quot;Application for Site Engineer&quot;).
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
