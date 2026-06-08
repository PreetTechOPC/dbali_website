// E:\Dbali website\src\components\HeroSlider.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  image: string;
  badge: string;
  title: string;
  description: string;
  link: string;
}
interface HeroSliderProps {
  slides?: Slide[];
}

export default function HeroSlider({ slides: propSlides }: HeroSliderProps) {
  const fallbackSlides: Slide[] = [
    {
      image: "/palm_groove_villa.png",
      badge: "Flagship Residential Villas",
      title: "Dbali Palm Groove",
      description: "Exquisite 2 BHK luxury villas in Kashipur featuring modular kitchens, high-quality fittings, and beautifully landscaped front gardens. Designed for luxury and comfortable family living.",
      link: "#projects",
    },
    {
      image: "/white_house.png",
      badge: "Highway-Connect Builder Floors",
      title: "Dbali White House",
      description: "Sleek and spacious 2 & 3 BHK builder floors located directly on Ramnagar Road (NH 121). Offers elevator access, reserved car parking, and modern architectural details.",
      link: "#projects",
    },
    {
      image: "/rosedale_housing.png",
      badge: "Premium Gated Society",
      title: "Dbali Rosedale Housing",
      description: "A secure, premium residential community in Kashipur featuring wide asphalt roads, decorative street lamps, high security, and landscaped shared green parks.",
      link: "#projects",
    },
  ];

  const slides = propSlides && propSlides.length > 0 ? propSlides : fallbackSlides;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 800);
  }, [animating, slides.length]);

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 800);
  };

  const goToSlide = (index: number) => {
    if (animating || index === activeIndex) return;
    setAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setAnimating(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero-slider-section" id="home">
      {/* Background Images with Fade */}
      <div className="slider-bg-container">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slide-bg-item ${idx === activeIndex ? "active" : ""}`}
          >
            <div className="slide-bg-overlay" />
              <Image
                src={(slide.image as any)?.url || slide.image || "/logo.jpg"}
                alt={slide.title}
              fill
              priority={idx === 0}
              className="slide-bg-image"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="container slider-content-container">
        <div className="slider-content-grid">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-content-item ${idx === activeIndex ? "active" : ""}`}
            >
              <span className="hero-badge slide-up-anim delay-100">
                <span className="badge-pulse"></span>
                {slide.badge}
              </span>
              <h1 className="hero-title slide-up-anim delay-200">
                {slide.title}
              </h1>
              <p className="hero-description slide-up-anim delay-400">
                {slide.description}
              </p>
              <div className="hero-actions slide-up-anim delay-500">
                <a href="#contact" className="btn btn-orange">
                  Book Site Visit
                </a>
                <a href="#projects" className="btn btn-outline-white">
                  Explore Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="slider-arrows">
        <button className="slider-arrow-btn prev" onClick={prevSlide} aria-label="Previous Slide">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className="slider-arrow-btn next" onClick={nextSlide} aria-label="Next Slide">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
