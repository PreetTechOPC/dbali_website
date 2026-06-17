// E:\Dbali website\src\app\projects/existing/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/hygraph";

export default async function ExistingProjectsPage() {
  const dynamicProjects = await getProjects();
  
  const existingProjects: { title: string; location: string; image: string; badgeText: string; badgeColorClass: string; description: string; specs: { label: string; value: string }[]; detailsLink: string }[] = [];

  // Filter dynamic projects by projectCategory === "ExistingProjects"
  const fetchedExistingProjects = dynamicProjects?.filter(
    (p: { projectCategory: string }) => p.projectCategory === "ExistingProjects"
  ) || [];

  const projectsData = fetchedExistingProjects.length > 0
    ? fetchedExistingProjects.map((p: { title: string; location: string; featuredImage?: { url: string }; projectStatus: string; shortDescription: string; slug: string }) => ({
        title: p.title,
        location: p.location,
        image: p.featuredImage?.url || "/placeholder-image.jpg",
        badgeText: p.projectStatus || "Existing",
        badgeColorClass: "teal",
        description: p.shortDescription,
        specs: [],
        detailsLink: `/projects/${p.slug}`,
      }))
    : existingProjects;

  return (
    <>
      <Navbar />
      <PageHeader
        title="Existing Projects"
        subtitle="View our currently active and ongoing residential developments in Udham Singh Nagar."
        breadcrumbs={[{ label: "Projects" }, { label: "Existing Projects" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="projects-grid">
            {projectsData.map((project: { title: string; location: string; image: string; badgeText: string; badgeColorClass: string; description: string; specs: { label: string; value: string }[]; detailsLink: string }, idx: number) => (
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
