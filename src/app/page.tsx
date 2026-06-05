// E:\Dbali website\src\app\page.tsx
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";

export default function Home() {
  const projectsData = [
    {
      title: "Dbali Palm Groove",
      price: "Starting at ₹21.5 Lakhs",
      location: "Kashipur, US Nagar",
      image: "/palm_groove_villa.png",
      badgeText: "Best Seller",
      badgeColorClass: "orange",
      description: "Exquisite 2 BHK villas featuring modular kitchens, high-quality fittings, and beautifully landscaped front gardens. Designed for luxury and comfortable family living.",
      specs: [
        { label: "Configuration", value: "2 BHK Villas" },
        { label: "Price Range", value: "₹21.5L+" },
        { label: "Possession", value: "Ready to Move" },
      ],
      detailsLink: "/projects/palm-groove",
    },
    {
      title: "Dbali White House",
      price: "₹48.50 – 65.00 Lakhs",
      location: "Ramnagar Road / NH 121, Kashipur",
      image: "/white_house.png",
      badgeText: "Premium Luxury",
      badgeColorClass: "blue",
      description: "Sleek and spacious 2 & 3 BHK builder floors located directly on Ramnagar Road (NH 121). Offers elevator access, reserved car parking, and modern architectural details.",
      specs: [
        { label: "Configuration", value: "2 & 3 BHK Floors" },
        { label: "Price Range", value: "₹48.5L - 65L" },
        { label: "Possession", value: "Under Const." },
      ],
      detailsLink: "/projects/white-house",
    },
    {
      title: "Dbali Rosedale Housing",
      price: "Price on Request",
      location: "Kashipur, US Nagar",
      image: "/rosedale_housing.png",
      badgeText: "Gated Community",
      badgeColorClass: "teal",
      description: "A secure, premium residential community in Kashipur featuring wide asphalt roads, decorative street lamps, high security, and landscaped shared green parks.",
      specs: [
        { label: "Configuration", value: "Villas & Plots" },
        { label: "Road Width", value: "30 & 40 Feet" },
        { label: "Possession", value: "Immediate" },
      ],
      detailsLink: "/projects/rosedale",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroSlider />

      {/* Stats Cards Section */}
      <StatsSection />

      {/* Projects Section */}
      <section className="section" id="projects" style={{ backgroundColor: "#f9f8f4" }}>
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="section-subtitle">Featured Projects</span>
            <h2 className="section-title">Delivering Lifestyle & Security</h2>
            <p className="section-desc">
              Explore our current residential landmarks in Kashipur. From pocket-friendly luxury villas to premium builder floors on major highways, we construct with a vision of perfection.
            </p>
          </div>

          <div className="projects-grid">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                price={project.price}
                location={project.location}
                image={project.image}
                badgeText={project.badgeText}
                badgeColorClass={project.badgeColorClass}
                description={project.description}
                specs={project.specs}
                detailsLink={project.detailsLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content animate-fade-in-up">
              <span className="section-subtitle" style={{ color: "var(--color-blue)" }}>About Dbali Real Estate</span>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>
                A Vision of Excellence in Everything We Do
              </h2>
              <p className="hero-description" style={{ marginBottom: "20px" }}>
                Founded in 2007 as a proprietorship by a visionary team, **Dbali Real Estate** (officially registered as **D. Bali Infrastructures & Developers Ltd.**) has grown into a prominent property developer in Udham Singh Nagar, Uttarakhand.
              </p>
              <p className="hero-description" style={{ marginBottom: "30px" }}>
                We believe a home is a lifetime investment. That's why our professional team maintains an undeviating focus on delivering complete customer satisfaction. From detail-oriented vendor surveillance to strict project management, we monitor every single activity to ensure top-grade quality.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon-wrapper" style={{ color: "var(--color-orange)" }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Vendor Surveillance</h4>
                    <p>We source only high-grade cement, steel, and fittings from certified suppliers.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper" style={{ color: "var(--color-blue)" }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V12h6" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Timely Handover</h4>
                    <p>Rigorous micro-planning of project steps ensures we hand over keys on time.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper" style={{ color: "var(--color-teal)" }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Customer Satisfaction</h4>
                    <p>A transparent buying experience with zero hidden costs or legal issues.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper" style={{ color: "var(--color-green)" }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0012 21c-2.31 0-4.47-.687-6.3-1.872.109-.37.288-.711.53-1.002a4.125 4.125 0 017.533-2.493M15 19.128v-.003a9.339 9.339 0 00-3.125.109M21 12c0 1.66-.53 3.2-1.43 4.47" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Expert Engineers</h4>
                    <p>Our highly qualified team handles every layout detail with structural perfection.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-graphics animate-scale-in delay-200">
              <div className="about-logo-card">
                <Image
                  src="/logo.jpg"
                  alt="Dbali Brand Logo"
                  width={200}
                  height={80}
                  className="about-logo-img"
                />
                <p className="sanskrit-motto">
                  पंचतत्वेन सारगर्भितः
                </p>
                <p className="sanskrit-translation">
                  “Enriched with the five elements of nature”
                </p>
                <div style={{ marginTop: "24px", fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                  A guiding philosophy that shapes every home we build—bringing balance, harmony, and resilience into your living spaces.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact" style={{ backgroundColor: "#f9f8f4", borderTop: "1px solid rgba(30, 34, 41, 0.04)" }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card animate-fade-in-up">
              <div>
                <span className="section-subtitle">Get in Touch</span>
                <h2 className="section-title" style={{ marginBottom: "20px" }}>Let's Build Your Dream Home</h2>
                <p className="hero-description" style={{ color: "var(--text-muted)" }}>
                  Have questions about Dbali Palm Groove, White House builder floors, or Rosedale Housing? Fill out the form, or reach out directly to our Kashipur office.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Main Office Address</h4>
                    <p>Ramnagar Road (NH 121), Kashipur, Udham Singh Nagar, Uttarakhand, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Sales Helpline</h4>
                    <p>+91 98765 01234, +91 5947 275000</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21.38 8M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Email Address</h4>
                    <p>sales@dbali.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container animate-fade-in delay-200">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
