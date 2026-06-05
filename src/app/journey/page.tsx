// E:\Dbali website\src\app\journey/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function OurJourneyPage() {
  const milestones = [
    {
      year: "2007",
      title: "The Foundation",
      desc: "Established as a proprietorship firm in Kashipur, Uttarakhand. Launched our first residential contract projects.",
    },
    {
      year: "2011",
      title: "First Independent Housing Project",
      desc: "Acquired land bank in Kashipur and delivered 50+ residential independent units to individual buyers.",
    },
    {
      year: "2013",
      title: "Corporate Evolution",
      desc: "Incorporated officially as 'D. Bali Infrastructures & Developers Ltd.' to support larger gated community projects.",
    },
    {
      year: "2018",
      title: "Dbali Palm Groove Launch",
      desc: "Launched Dbali Palm Groove—our highly successful 2 BHK villa community project with modular kitchens and landscaped parks.",
    },
    {
      year: "2022",
      title: "Dbali White House Development",
      desc: "Initiated construction of Dbali White House floors on Ramnagar Road (NH 121), setting new luxury standards in local housing.",
    },
    {
      year: "2026",
      title: "Regional Leadership",
      desc: "Expanded community housing offerings to include Dbali Rosedale Gated Society. Successfully served over 1,200+ local families.",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Our Journey"
        subtitle="Timeline of milestones, housing achievements, and consistent regional growth since 2007."
        breadcrumbs={[{ label: "Company" }, { label: "Our Journey" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="timeline-list">
            {milestones.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot" />
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content-card">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
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
