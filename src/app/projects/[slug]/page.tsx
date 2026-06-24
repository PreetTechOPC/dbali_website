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
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
                <a
                  href={`https://wa.me/919012138044?text=${encodeURIComponent(`Hi, I would like to enquire about ${project.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "#25D366",
                    color: "#fff",
                    width: "100%",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Enquire
                </a>
                <a
                  href="tel:8630835635"
                  className="btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "var(--color-blue)",
                    color: "#fff",
                    width: "100%",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
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
