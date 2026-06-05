"use client";

// E:\Dbali website\src\app\news/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function LatestNewsPage() {
  const articles = [
    {
      title: "Rosedale Housing Society Gated Development Complete",
      date: "May 24, 2026",
      desc: "We are pleased to announce the completion of the asphalt roads, electrical grids, and perimeter gates at Dbali Rosedale. Site visits are now active.",
      image: "/rosedale_housing.png",
      slug: "rosedale-development-complete",
    },
    {
      title: "Dbali Infrastructures Announces Pre-launch of White House Phase II",
      date: "April 12, 2026",
      desc: "Following high demand for Phase I, we are opening pre-bookings for Dbali White House Phase II on Ramnagar Road (NH 121) with special introductory offers.",
      image: "/white_house.png",
      slug: "white-house-phase-two",
    },
    {
      title: "1,200 Families Milestone: Earning Customer Trust in US Nagar",
      date: "February 18, 2026",
      desc: "Dbali reaches a major milestone of delivering keys to over 1,200 local families since our foundation in 2007. We thank our homebuyers for their trust.",
      image: "/palm_groove_villa.png",
      slug: "twelve-hundred-families-milestone",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Latest News & Updates"
        subtitle="Keep up with construction updates, new project announcements, and media press coverage."
        breadcrumbs={[{ label: "Media" }, { label: "Latest News" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="news-grid">
            {articles.map((item, idx) => (
              <div className="news-card" key={idx}>
                <div className="news-card-img-wrapper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="news-card-content">
                  <div className="news-card-date">{item.date}</div>
                  <h4 className="news-card-title">{item.title}</h4>
                  <p className="news-card-desc">{item.desc}</p>
                  <a href="#" className="news-card-link" onClick={(e) => e.preventDefault()}>
                    Read More 
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="14" height="14">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
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
