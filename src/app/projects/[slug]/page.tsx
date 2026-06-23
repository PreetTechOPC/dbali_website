import { getProject } from "@/lib/hygraph";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";

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
              {project.overview?.html ? (
                <>
                  <h2>Project Overview</h2>
                  <div 
                    className="rich-text-content"
                    dangerouslySetInnerHTML={{ __html: project.overview.html }}
                  />
                </>
              ) : (
                <>
                  <h2>About {project.title}</h2>
                  <div 
                    className="rich-text-content"
                    dangerouslySetInnerHTML={{ __html: project.content?.html || project.shortDescription }}
                  />
                </>
              )}

              {project.mapImage && (
                <div style={{ marginTop: "40px", marginBottom: "20px" }}>
                  <h3 style={{ marginBottom: "16px" }}>Location Map</h3>
                  <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(30, 34, 41, 0.1)", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                    <Image 
                      src={project.mapImage.url} 
                      alt={`${project.title} Location Map`} 
                      width={800} 
                      height={400} 
                      style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", maxHeight: "400px" }} 
                    />
                  </div>
                </div>
              )}

              {project.technicalSpecifications?.html && (
                <div style={{ marginTop: "3rem" }}>
                  <h2>Technical Specifications</h2>
                  <div 
                    className="rich-text-content"
                    dangerouslySetInnerHTML={{ __html: project.technicalSpecifications.html }}
                  />
                </div>
              )}

              {project.amenities?.html && (
                <div style={{ marginTop: "3rem" }}>
                  <h2>Amenities</h2>
                  <div 
                    className="rich-text-content"
                    dangerouslySetInnerHTML={{ __html: project.amenities.html }}
                  />
                </div>
              )}
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

              {project.quickOverview?.html && (
                <div style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: "2px solid rgba(0,0,0,0.05)" }}>
                  <h4 style={{ marginBottom: "1rem" }}>Quick Overview</h4>
                  <div 
                    className="rich-text-content"
                    style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}
                    dangerouslySetInnerHTML={{ __html: project.quickOverview.html }}
                  />
                </div>
              )}
              <a href="#contact" className="btn btn-orange" style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
                Enquire Now
              </a>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div style={{ marginTop: "4rem" }}>
              <h2>Project Gallery</h2>
              <ImageGallery images={project.gallery} />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
