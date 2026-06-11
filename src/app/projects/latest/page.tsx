// E:\Dbali website\src\app\projects/latest/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/hygraph";

export default async function LatestProjectsPage() {
  // Fetch all projects from Hygraph
  const projects = await getProjects();

  // Transform Hygraph data to match ProjectCard props
  const latestProjects = projects.map((p: any) => ({
    title: p.title,
    location: p.location,
    image: p.featuredImage?.url || "/placeholder-image.jpg",
    badgeText: p.projectStatus,
    badgeColorClass: "teal", // default; adjust mapping if needed
    description: p.shortDescription,
    specs: [], // Add any spec mapping if your schema provides it
    detailsLink: `/projects/${p.slug}`,
  }));

  return (
    <>
      <Navbar />
      <PageHeader
        title="Latest Projects"
        subtitle="Explore our active property listings and newly launched residential units in Kashipur."
        breadcrumbs={[{ label: "Projects" }, { label: "Latest Launches" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="projects-grid">
            {latestProjects.map((project: any, idx: number) => (
              <ProjectCard
                key={idx}
                title={project.title}
                location={project.location}
                image={project.image}
                badgeText={project.badgeText}
                badgeColorClass={project.badgeColorClass}
                description={project.description}
                specs={project.specs}
                detailsLink={project.detailsLink}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
