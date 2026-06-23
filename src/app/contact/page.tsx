// E:\Dbali website\src\app\contact/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our sales office, coordinate a site visit, or speak to our customer care team."
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      <section className="inner-page-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card animate-fade-in-up">
              <div>
                <h2 style={{ fontSize: "28px", color: "var(--color-primary-dark)", marginBottom: "16px", fontFamily: "var(--font-playfair)" }}>
                  Kashipur Sales Office
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", marginBottom: "32px" }}>
                  Visit our office directly on Ramnagar Road to view our structural models and scale maps of Palm Groove, White House, and Rosedale.
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
                    <h4>Corporate Office Address</h4>
                    <p>D.bali infrastructure & developers Pvt Ltd ramnagar road kashipur-244713</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Office Hours</h4>
                    <p>Monday to Saturday • 9:30 AM to 6:30 PM (Sunday Open for Site Visits)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Department Contacts</h4>
                    <p style={{ margin: "0 0 4px 0" }}><strong>WhatsApp Enquire:</strong> +91 90121 38044</p>
                    <p style={{ margin: "0 0 4px 0" }}><strong>Call:</strong> 8630835635</p>
                    <p style={{ margin: "0" }}><strong>General:</strong> d.bali@dbali.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3 style={{ fontSize: "20px", color: "var(--color-primary-dark)", marginBottom: "20px", fontFamily: "var(--font-playfair)" }}>
                Online Enquiry Form
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div style={{ marginTop: "60px", height: "400px", position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(30, 34, 41, 0.08)" }}>
            <iframe 
              src="https://maps.google.com/maps?q=D.bali%20infrastructure%20%26%20developers%20Pvt%20Ltd%20ramnagar%20road%20kashipur-244713&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
