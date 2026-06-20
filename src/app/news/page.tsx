// Removed "use client" so page can be a Server Component

// E:\Dbali website\src\app\news/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { getNewsArticles } from "@/lib/hygraph";

export default async function LatestNewsPage() {
  const dynamicArticles = await getNewsArticles();

  const fallbackArticles = [
    {
      title: "Rosedale Housing Society Gated Development Complete",
      date: "May 24, 2026",
      desc: "We are pleased to announce the completion of the asphalt roads, electrical grids, and perimeter gates at Dbali Rosedale. Site visits are now active.",
      image: "/rosedale_gate.jpg",
      slug: "rosedale-development-complete",
    },

    {
      title: "1,200 Families Milestone: Earning Customer Trust in US Nagar",
      date: "February 18, 2026",
      desc: "Dbali reaches a major milestone of delivering keys to over 1,200 local families since our foundation in 2007. We thank our homebuyers for their trust.",
      image: "/palm_groove_gate.jpg",
      slug: "twelve-hundred-families-milestone",
    },
  ];
  const articles = dynamicArticles && dynamicArticles.length > 0 ? dynamicArticles : fallbackArticles;

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
            {articles.map((item: { title: string; date: string; desc?: string; excerpt?: string; content?: { html: string }; image?: string; featuredImage?: { url: string }; slug: string }, idx: number) => {
              const strippedContent = item.content?.html ? item.content.html.replace(/<[^>]*>?/gm, '') : '';
              return (
              <div className="news-card" key={idx}>
                <div className="news-card-img-wrapper">
                  <Image
                    src={item.featuredImage?.url || item.image || "/logo.jpg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="news-card-content">
                  <h4 className="news-card-title">{item.title}</h4>
                  <p className="news-card-desc">{item.excerpt || item.desc || strippedContent}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
