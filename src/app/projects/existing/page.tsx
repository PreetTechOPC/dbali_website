// E:\Dbali website\src\app\projects/existing/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/hygraph";

export default async function ExistingProjectsPage() {
  const dynamicProjects = await getProjects();
  
  const existingProjects = [
    {
      title: "Dbali Rosedale Housing",
      location: "Kashipur, US Nagar",
      image: "/rosedale_housing.png",
      badgeText: "Active Gated Society",
      badgeColorClass: "teal",
      description: "A secure, premium residential community in Kashipur featuring wide asphalt roads, decorative street lamps, high security, and landscaped shared green parks.",
      specs: [
        { label: "Configuration", value: "Villas & Plots" },
        { label: "Road Width", value: "30 & 40 Feet" },
        { label: "Possession", value: "Immediate" },
      ],
      detailsLink: "/projects/rosedale"
    },
    {
      title: "Dbali Palm Groove",
      location: "Kashipur, US Nagar",
      image: "/palm_groove_villa.png",
      badgeText: "Ready to Move",
      badgeColorClass: "orange",
      description: "Exquisite 2 BHK villas featuring modular kitchens, high-quality fittings, and beautifully landscaped front gardens. Designed for luxury and comfortable family living.",
      specs: [
        { label: "Configuration", value: "2 BHK Villas" },
        { label: "Possession", value: "Ready to Move" },
      ],
      detailsLink: "/projects/palm-groove"
    },
  ];

  // Filter dynamic projects by projectCategory === "ExistingProjects"
  const fetchedExistingProjects = dynamicProjects?.filter(
    (p: any) => p.projectCategory === "ExistingProjects"
  ) || [];

  const projectsData = fetchedExistingProjects.length > 0
    ? fetchedExistingProjects.map((p: any) => ({
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
            {projectsData.map((project: any, idx: number) => (
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
