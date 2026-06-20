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
  const hygraphProjects = projects
    .filter((p: { projectCategory: string }) => p.projectCategory !== "PreviousProjects")
    .map((p: { title: string; location: string; featuredImage?: { url: string }; projectStatus: string; shortDescription: string; slug: string }) => ({
      title: p.title,
      location: p.location,
      image: p.featuredImage?.url || "/placeholder-image.jpg",
      badgeText: p.projectStatus,
      badgeColorClass: "teal", // default; adjust mapping if needed
      description: p.shortDescription,
      specs: [], // Add any spec mapping if your schema provides it
      detailsLink: `/projects/${p.slug}`,
    }));

  const latestProjects = [
    {
      title: "White House Phase III",
      location: "NH-121, Ramnagar Road, Kashipur",
      image: "/WhatsApp Image 2026-06-16 at 11.34.58 AM (1).jpeg",
      badgeText: "Govt. Approved",
      badgeColorClass: "orange",
      description: "Secure your future with premium Govt. Approved & Rera Certified residential plots in our highly anticipated Phase III development on Ramnagar Road. Limited availability.",
      specs: [],
      detailsLink: "/projects/white-house",
    },
    ...hygraphProjects
  ];

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
            {latestProjects.map((project: { title: string; location: string; image: string; badgeText: string; badgeColorClass: string; description: string; specs: { label: string; value: string }[]; detailsLink: string }, idx: number) => (
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
