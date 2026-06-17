// E:\Dbali website\src\app\media\videos/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getVideos } from "@/lib/hygraph";

export default async function VideoGalleryPage() {
  const dynamicVideos = await getVideos();
  const fallbackVideos = [
    {
      title: "Dbali White House Construction Update",
      desc: "Drone footage showing the structural development of builder floors on NH 121.",
      category: "Drone Footage",
      image: "/white-house-video-thumbnail.jpg",
      videoUrl: "/white-house-construction.mp4",
    },
  ];

  const videos = dynamicVideos && dynamicVideos.length > 0 
    ? dynamicVideos.map((v: { title: string; description: string; category: string; thumbnail?: { url: string }; videoUrl: string }) => ({
        title: v.title,
        desc: v.description,
        category: v.category,
        image: v.thumbnail?.url || "/logo.jpg",
        videoUrl: v.videoUrl
      }))
    : fallbackVideos;

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
            {videos.map((vid: { title: string; desc: string; category: string; image: string; videoUrl?: string }, idx: number) => {
              const content = (
                <>
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
                </>
              );

              return vid.videoUrl ? (
                <a href={vid.videoUrl} target="_blank" rel="noopener noreferrer" className="gallery-card" key={idx} style={{ height: "300px", display: "block" }}>
                  {content}
                </a>
              ) : (
                <div className="gallery-card" key={idx} style={{ height: "300px" }}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
