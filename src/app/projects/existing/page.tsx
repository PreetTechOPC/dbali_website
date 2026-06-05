// E:\Dbali website\src\app\projects/existing/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

export default function ExistingProjectsPage() {
  const existingProjects = [
    {
      title: "Dbali Rosedale Housing",
      price: "Pricing On Request",
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
    },
    {
      title: "Dbali Palm Groove",
      price: "Starting at ₹21.5 Lakhs",
      location: "Kashipur, US Nagar",
      image: "/palm_groove_villa.png",
      badgeText: "Ready to Move",
      badgeColorClass: "orange",
      description: "Exquisite 2 BHK villas featuring modular kitchens, high-quality fittings, and beautifully landscaped front gardens. Designed for luxury and comfortable family living.",
      specs: [
        { label: "Configuration", value: "2 BHK Villas" },
        { label: "Price Range", value: "₹21.5L+" },
        { label: "Possession", value: "Ready to Move" },
      ],
    },
  ];

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
            {existingProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                price={project.price}
                location={project.location}
                image={project.image}
                badgeText={project.badgeText}
                badgeColorClass={project.badgeColorClass}
                description={project.description}
                specs={project.specs}
                detailsLink={project.title.toLowerCase().includes("palm") ? "/projects/palm-groove" : "/projects/rosedale"}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
