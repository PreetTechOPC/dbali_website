import { getProject } from "@/lib/hygraph";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PageHeader
        title={project.title}
        subtitle={project.location}
        breadcrumbs={[{ label: "Projects", href: "/projects/existing" }, { label: project.title }]}
      />
      
      <section className="inner-page-section">
        <div className="container">
          <div className="project-detail-header" style={{ marginBottom: "2rem" }}>
            <span className="badge-pulse" style={{ display: "inline-block", marginRight: "8px" }}></span>
            <span style={{ fontWeight: "600", color: "var(--color-orange)" }}>{project.projectStatus}</span>
          </div>

          {project.featuredImage && (
            <div style={{ position: "relative", width: "100%", height: "500px", marginBottom: "3rem", borderRadius: "12px", overflow: "hidden" }}>
              <Image
                src={project.featuredImage.url}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}

          <div className="content-grid-2">
            <div className="content-body">
              <h2>About {project.title}</h2>
              <div 
                className="rich-text-content"
                dangerouslySetInnerHTML={{ __html: project.content?.html || project.shortDescription }}
              />
            </div>
            
            <div className="sidebar-box">
              <h3>Project Details</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <strong>Location:</strong> {project.location}
                </li>
                <li style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <strong>Status:</strong> {project.projectStatus}
                </li>
              </ul>
              <a href="#contact" className="btn btn-orange" style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
                Enquire Now
              </a>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div style={{ marginTop: "4rem" }}>
              <h2>Project Gallery</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginTop: "20px" }}>
                {project.gallery.map((img: any, idx: number) => (
                  <div key={idx} style={{ position: "relative", height: "250px", borderRadius: "8px", overflow: "hidden" }}>
                    <Image src={img.url} alt={`${project.title} gallery ${idx + 1}`} fill style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
