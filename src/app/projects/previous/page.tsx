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
      name: "Dbali Palm Groove",
      location: "Kundeshwari, Jaitpur Ghosi, Kashipur, Udham Singh Nagar, Uttarakhand",
      year: "2023",
      units: "Villas",
      desc: "Exquisite villas featuring modular kitchens, high-quality fittings, and beautifully landscaped front gardens. Designed for luxury and comfortable family living.",
      image: "/palm_groove_gate.jpg",
    },
    {
      name: "Dbali Rosedale Housing",
      location: "Aliganj Rd, Kashipur, Uttarakhand",
      year: "2021",
      units: "Villas & Plots",
      desc: "A secure, premium residential community in Kashipur featuring wide asphalt roads, decorative street lamps, high security, and landscaped shared green parks.",
      image: "/rosedale_gate.jpg",
    },
    {
      name: "Dbali Paradise",
      location: "Aliganj Road, Kashipur, Ginni Khera, Uttarakhand",
      year: "2022",
      units: "Villas with Pool",
      desc: "A stunning residential layout featuring beautifully designed villas surrounding a central landscaped park and swimming pool, offering a resort-like living experience.",
      image: "/project_gallery_1.jpg",
    },
    {
      name: "Apna Ghar",
      location: "Kashipur, Uttarakhand",
      year: "2020",
      units: "Residential Housing",
      desc: "A beautifully crafted residential community designed to provide comfortable, modern living spaces for families.",
      image: "/project_gallery_14.jpg",
    },
  ];

  // Filter dynamic projects by projectCategory === "PreviousProjects"
  const fetchedPreviousProjects = dynamicProjects?.filter(
    (p: { projectCategory: string; title: string }) => p.projectCategory === "PreviousProjects" && p.title !== "Dbali White House"
  ) || [];

  const hygraphMapped = fetchedPreviousProjects.map((p: { title: string; location: string; projectStatus: string; shortDescription: string; overview?: { html: string }; featuredImage?: { url: string } }) => ({
    name: p.title,
    location: p.location,
    year: p.projectStatus || "Completed",
    units: p.shortDescription || "Residential Project",
    desc: p.overview?.html ? p.overview.html.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." : p.shortDescription,
    image: p.featuredImage?.url || "/placeholder-image.jpg",
  }));

  const projectsData = [
    ...hygraphMapped,
    ...completedProjects
  ];

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
