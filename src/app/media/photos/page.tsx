// E:\Dbali website\src\app\media\photos/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { getPhotos } from "@/lib/hygraph";

export default async function PhotoGalleryPage() {
  const dynamicPhotos = await getPhotos();
  const fallbackPhotos = [
    {
      title: "White House Swimming Pool View",
      category: "Amenities",
      image: "/project_gallery_1.jpg",
    },
    {
      title: "White House Phase III Offer",
      category: "Project Updates",
      image: "/project_gallery_2.jpg",
    },
    {
      title: "White House Premium Residences",
      category: "Exteriors",
      image: "/project_gallery_3.jpg",
    },
    {
      title: "White House Aerial Overview",
      category: "Site Updates",
      image: "/project_gallery_4.jpg",
    },
    {
      title: "White House Phase III Layout",
      category: "Floor Plans",
      image: "/project_gallery_5.jpg",
    },
    {
      title: "White House Phase II Layout",
      category: "Floor Plans",
      image: "/project_gallery_6.jpg",
    },
    {
      title: "White House Street View",
      category: "Exteriors",
      image: "/project_gallery_7.jpg",
    },
    {
      title: "White House Main Entrance",
      category: "Exteriors",
      image: "/project_gallery_8.jpg",
    },
    {
      title: "White House Residential Street",
      category: "Exteriors",
      image: "/project_gallery_9.jpg",
    },
    {
      title: "White House Night View Render",
      category: "Exteriors",
      image: "/project_gallery_10.jpg",
    },
    {
      title: "Palm Groove Main Entrance",
      category: "Exteriors",
      image: "/project_gallery_11.jpg",
    },
    {
      title: "Rosedale Gated Community",
      category: "Exteriors",
      image: "/project_gallery_12.jpg",
    },
    {
      title: "Apna Ghar Entrance Gate",
      category: "Exteriors",
      image: "/project_gallery_13.jpg",
    },
    {
      title: "Independent House Construction",
      category: "Site Updates",
      image: "/project_gallery_14.jpg",
    },
    {
      title: "Completed Row Houses",
      category: "Exteriors",
      image: "/project_gallery_15.jpg",
    },
    {
      title: "Palm Groove Community Area",
      category: "Amenities",
      image: "/project_gallery_16.jpg",
    },
    {
      title: "Project Aerial View",
      category: "Site Updates",
      image: "/project_gallery_17.jpg",
    },
    {
      title: "Community Park & Amenities",
      category: "Amenities",
      image: "/project_gallery_18.jpg",
    },
    {
      title: "Row Houses Panoramic View",
      category: "Exteriors",
      image: "/project_gallery_19.jpg",
    },
  ];

  const photos = dynamicPhotos && dynamicPhotos.length > 0 
    ? dynamicPhotos.map((p: { title: string; category: string; image?: { url: string } }) => ({
        title: p.title,
        category: p.category,
        image: p.image?.url || "/logo.jpg"
      }))
    : fallbackPhotos;


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
          <div className="gallery-grid">
            {photos.map((photo: { title: string; category: string; image: string }, idx: number) => (
              <div className="gallery-card" key={idx}>
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="gallery-card-img"
                />

              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
