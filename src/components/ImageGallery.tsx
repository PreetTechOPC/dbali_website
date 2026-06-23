"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { url: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="image-gallery-grid">
        {images.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            style={{ position: "relative", height: "200px", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}
            onClick={() => openLightbox(idx)}
          >
            <Image
              src={img.url}
              alt={`Gallery image ${idx + 1}`}
              fill
              style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            &times;
          </button>
          
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "20px",
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "white",
              fontSize: "30px",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              zIndex: 10000,
            }}
          >
            &#10094;
          </button>

          <div style={{ position: "relative", width: "80%", height: "80%" }} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentImageIndex].url}
              alt="Lightbox image"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "20px",
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "white",
              fontSize: "30px",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              zIndex: 10000,
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
