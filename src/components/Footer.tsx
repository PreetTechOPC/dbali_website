// E:\Dbali website\src\components\Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col">
            <Image
              src="/logo.jpg"
              alt="Dbali Logo"
              width={140}
              height={46}
              style={{ objectFit: "contain", backgroundColor: "white", padding: "4px", borderRadius: "4px" }}
            />
            <p className="footer-desc" style={{ marginTop: "16px" }}>
              D. Bali Infrastructures & Developers Ltd. has been establishing residential landmarks in Udham Singh Nagar since 2007, prioritizing quality and trust.
            </p>
            <div className="social-links">
              <a href="#" className="social-btn" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Corporate Pages */}
          <div className="footer-col">
            <h3>Corporate</h3>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link href="/profile" className="footer-link">Company Profile</Link>
              </li>
              <li>
                <Link href="/md-message" className="footer-link">MD Message</Link>
              </li>
              <li>
                <Link href="/journey" className="footer-link">Our Journey</Link>
              </li>
              <li>
                <Link href="/vision-mission" className="footer-link">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="footer-link">Why Choose Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Project Pages */}
          <div className="footer-col">
            <h3>Projects</h3>
            <ul className="footer-links">
              <li>
                <Link href="/projects/latest" className="footer-link">Latest Projects</Link>
              </li>
              <li>
                <Link href="/projects/existing" className="footer-link">Existing Projects</Link>
              </li>
              <li>
                <Link href="/projects/previous" className="footer-link">Previous Projects</Link>
              </li>
              <li>
                <Link href="/media/photos" className="footer-link">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/media/videos" className="footer-link">Video Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Pages */}
          <div className="footer-col">
            <h3>Services & Media</h3>
            <ul className="footer-links">
              <li>
                <Link href="/home-loan" className="footer-link">Home Loan</Link>
              </li>
              <li>
                <Link href="/career" className="footer-link">Careers</Link>
              </li>
              <li>
                <Link href="/downloads" className="footer-link">Downloads</Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">Contact Us</Link>
              </li>
              <li>
                <Link href="/news" className="footer-link">Latest News</Link>
              </li>
              <li>
                <Link href="/awards" className="footer-link">Awards & Milestones</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Guidance Pages */}
          <div className="footer-col">
            <h3>Guidance & Lifestyle</h3>
            <ul className="footer-links">
              <li>
                <Link href="/guide/home-guide" className="footer-link">Home Guide</Link>
              </li>
              <li>
                <Link href="/guide/vaastu" className="footer-link">Vaastu Special</Link>
              </li>
              <li>
                <Link href="/guide/interiors" className="footer-link">Interior Design</Link>
              </li>
              <li>
                <Link href="/guide/better-living" className="footer-link">Better Living</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} D. Bali Infrastructures & Developers Ltd. All Rights Reserved.</p>
          <p className="developed-by" style={{ margin: "0" }}>
            Developed by{" "}
            <a
              href="https://preettech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="developed-by-link"
            >
              Preet Tech
            </a>
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
