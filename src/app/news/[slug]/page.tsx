import { getNewsArticle } from "@/lib/hygraph";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PageHeader
        title={article.title}
        subtitle={`Published on ${article.date}`}
        breadcrumbs={[{ label: "Media" }, { label: "News", href: "/news" }, { label: article.title }]}
      />
      <section className="inner-page-section">
        <div className="container" style={{ maxWidth: "800px" }}>
          {article.featuredImage && (
            <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden" }}>
              <Image
                src={article.featuredImage.url}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          <div 
            className="rich-text-content"
            dangerouslySetInnerHTML={{ __html: article.content?.html || "" }}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
