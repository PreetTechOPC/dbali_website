// E:\Dbali website\src\app\media\videos/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function VideoGalleryPage() {
  const videos = [
    {
      title: "Dbali Palm Groove Site Walkthrough",
      desc: "A detailed guided tour of our completed 2 BHK ready-to-move villas in Kashipur.",
      category: "Walkthroughs",
      image: "/palm_groove_villa.png",
    },
    {
      title: "Dbali White House Construction Update",
      desc: "Drone footage showing the structural development of builder floors on NH 121.",
      category: "Drone Footage",
      image: "/white_house.png",
    },
    {
      title: "Customer Testimonial - Mr. Sharma & Family",
      desc: "Hear about the transparent homebuying and registration experience directly from our buyers.",
      category: "Testimonials",
      image: "/rosedale_housing.png",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Video Gallery"
        subtitle="Watch project walk-throughs, aerial construction updates, and homebuyer testimonials."
        breadcrumbs={[{ label: "Media" }, { label: "Video Gallery" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="gallery-grid">
            {videos.map((vid, idx) => (
              <div className="gallery-card" key={idx} style={{ height: "300px" }}>
                <Image
                  src={vid.image}
                  alt={vid.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="gallery-card-img"
                  style={{ opacity: 0.8 }}
                />
                {/* Play Button Indicator */}
                <div className="video-card-play-btn">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="gallery-card-overlay" style={{ background: "linear-gradient(180deg, rgba(30, 34, 41, 0.1) 40%, rgba(30, 34, 41, 0.95) 100%)" }}>
                  <h4 style={{ fontSize: "17px", fontWeight: "600", marginBottom: "6px" }}>{vid.title}</h4>
                  <p style={{ fontSize: "13px", lineHeight: "1.4", color: "rgba(255, 255, 255, 0.8)", marginBottom: "4px" }}>{vid.desc}</p>
                  <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-orange)", fontWeight: "700" }}>{vid.category}</span>
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
