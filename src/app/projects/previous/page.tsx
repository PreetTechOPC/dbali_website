// E:\Dbali website\src\app\projects/previous/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getProjects } from "@/lib/hygraph";

export default async function PreviousProjectsPage() {
  const dynamicProjects = await getProjects();
  
  const completedProjects = [
    {
      name: "Dbali Green Meadows",
      location: "Ramnagar Road, Kashipur",
      year: "2018",
      units: "45 Independent Villas",
      desc: "Our first premium gated enclave featuring beautifully lined streets, water facilities, and customized duplex layouts.",
      image: "/palm_groove_villa.png", // reusing architectural render for representation
    },
    {
      name: "Dbali Residency Floors",
      location: "Kashipur Bypass Road",
      year: "2015",
      units: "24 Builder Floors",
      desc: "Spacious independent floors featuring high ceilings, modular layouts, and dedicated parking. Fully occupied.",
      image: "/white_house.png",
    },
    {
      name: "Dbali Enclave",
      location: "Jaspur Road, Kashipur",
      year: "2011",
      units: "60 Residential Plots & Duplexes",
      desc: "A fully integrated residential colony featuring decorative street lamps, park access, and wide security corridors.",
      image: "/rosedale_housing.png",
    },
  ];

  // Filter dynamic projects by projectCategory === "PreviousProjects"
  const fetchedPreviousProjects = dynamicProjects?.filter(
    (p: { projectCategory: string }) => p.projectCategory === "PreviousProjects"
  ) || [];

  const projectsData = fetchedPreviousProjects.length > 0
    ? fetchedPreviousProjects.map((p: { title: string; location: string; projectStatus: string; shortDescription: string; overview?: { html: string }; featuredImage?: { url: string } }) => ({
        name: p.title,
        location: p.location,
        year: p.projectStatus || "Completed",
        units: p.shortDescription || "Residential Project",
        desc: p.overview?.html ? p.overview.html.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." : p.shortDescription,
        image: p.featuredImage?.url || "/placeholder-image.jpg",
      }))
    : completedProjects;

  return (
    <>
      <Navbar />
      <PageHeader
        title="Previous Projects"
        subtitle="Our solid delivery track record demonstrating engineering excellence and commitment."
        breadcrumbs={[{ label: "Projects" }, { label: "Completed Projects" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="projects-grid">
            {projectsData.map((project: { name: string; location: string; year: string; units: string; desc: string; image: string }, idx: number) => (
              <div className="project-card" key={idx} style={{ opacity: 0.9 }}>
                <div className="project-image-wrapper">
                  <span className="project-badge project-badge-teal" style={{ background: "#5e6675" }}>
                    {project.year.includes("Completed") ? project.year : `Completed ${project.year}`}
                  </span>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="project-image"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-specs" style={{ marginTop: "16px", borderTop: "1px solid rgba(30, 34, 41, 0.05)", paddingTop: "12px" }}>
                    <div className="spec-item">
                      <span className="spec-label">Location</span>
                      <span className="spec-val">{project.location}</span>
                    </div>
                    {project.units && (
                      <div className="spec-item">
                        <span className="spec-label">Scope</span>
                        <span className="spec-val">{project.units}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
