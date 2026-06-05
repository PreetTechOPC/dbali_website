// E:\Dbali website\src\app\media\photos/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function PhotoGalleryPage() {
  const photos = [
    {
      title: "Palm Groove Villa Frontage",
      category: "Exteriors",
      image: "/palm_groove_villa.png",
    },
    {
      title: "Modular Kitchen Setup",
      category: "Interiors",
      image: "/white_house.png",
    },
    {
      title: "Rosedale Gated Entrance Layout",
      category: "Amenities",
      image: "/rosedale_housing.png",
    },
    {
      title: "Living Room Concept Rendering",
      category: "Interiors",
      image: "/palm_groove_villa.png",
    },
    {
      title: "Completed Landscaped Garden",
      category: "Amenities",
      image: "/rosedale_housing.png",
    },
    {
      title: "White House Construction Progress",
      category: "Site Updates",
      image: "/white_house.png",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Photo Gallery"
        subtitle="Browse high-resolution photographs of our project exteriors, modern interiors, and site development progress."
        breadcrumbs={[{ label: "Media" }, { label: "Photo Gallery" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="gallery-filter-bar">
            {["All Photos", "Exteriors", "Interiors", "Amenities", "Site Updates"].map((filter, idx) => (
              <button
                key={idx}
                className={`btn ${idx === 0 ? "btn-orange" : "btn-outline"}`}
                style={{ padding: "8px 18px", fontSize: "14px", borderRadius: "30px" }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {photos.map((photo, idx) => (
              <div className="gallery-card" key={idx}>
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="gallery-card-img"
                />
                <div className="gallery-card-overlay">
                  <h4>{photo.title}</h4>
                  <p>{photo.category}</p>
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
