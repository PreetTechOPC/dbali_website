// E:\Dbali website\src\app\projects/latest/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

export default function LatestProjectsPage() {
  const latestProjects = [
    {
      title: "Dbali Palm Groove",
      location: "Kashipur, US Nagar",
      image: "/palm_groove_villa.png",
      badgeText: "Recently Completed",
      badgeColorClass: "orange",
      description: "Exquisite 2 BHK villas featuring modular kitchens, high-quality fittings, and beautifully landscaped front gardens. Designed for luxury and comfortable family living.",
      specs: [
        { label: "Configuration", value: "2 BHK Villas" },
        { label: "Possession", value: "Ready to Move" },
      ],
    },
    {
      title: "Dbali White House",
      location: "Ramnagar Road / NH 121, Kashipur",
      image: "/white_house.png",
      badgeText: "Selling Fast",
      badgeColorClass: "blue",
      description: "Sleek and spacious 2 & 3 BHK builder floors located directly on Ramnagar Road (NH 121). Offers elevator access, reserved car parking, and modern architectural details.",
      specs: [
        { label: "Configuration", value: "2 & 3 BHK Floors" },
        { label: "Possession", value: "Under Const." },
      ],
    },
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
            {latestProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                location={project.location}
                image={project.image}
                badgeText={project.badgeText}
                badgeColorClass={project.badgeColorClass}
                description={project.description}
                specs={project.specs}
                detailsLink={project.title.toLowerCase().includes("palm") ? "/projects/palm-groove" : "/projects/white-house"}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
