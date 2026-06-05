// E:\Dbali website\src\components\Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (dropdownName: string) => {
    if (activeMobileDropdown === dropdownName) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(dropdownName);
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveMobileDropdown(null);
  };

  const chevronIcon = (
    <svg className="dropdown-chevron" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <header className={`navbar-header ${(scrolled || !isHomePage) ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}>
      <div className="container navbar-container">
        <Link href="/" className="logo-link" onClick={closeMobileMenu}>
          <div className="logo-capsule">
            <Image
              src="/logo.jpg"
              alt="Dbali Logo"
              width={150}
              height={46}
              style={{ objectFit: "contain" }}
              className="logo-img"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link href="/" className="nav-link">Home</Link>
          
          {/* Company Dropdown */}
          <div className="nav-item-dropdown">
            <span className="nav-link dropdown-trigger">
              Company {chevronIcon}
            </span>
            <div className="dropdown-menu-list">
              <Link href="/about">About Us</Link>
              <Link href="/profile">Company Profile</Link>
              <Link href="/md-message">MD Message</Link>
              <Link href="/journey">Our Journey</Link>
              <Link href="/vision-mission">Vision & Mission</Link>
              <Link href="/why-choose-us">Why Choose Us</Link>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="nav-item-dropdown">
            <span className="nav-link dropdown-trigger">
              Projects {chevronIcon}
            </span>
            <div className="dropdown-menu-list">
              <Link href="/projects/latest">Latest Projects</Link>
              <Link href="/projects/existing">Existing Projects</Link>
              <Link href="/projects/previous">Previous Projects</Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="nav-item-dropdown">
            <span className="nav-link dropdown-trigger">
              Services {chevronIcon}
            </span>
            <div className="dropdown-menu-list">
              <Link href="/home-loan">Home Loan</Link>
              <Link href="/career">Careers</Link>
              <Link href="/downloads">Downloads</Link>
            </div>
          </div>

          {/* Media Dropdown */}
          <div className="nav-item-dropdown">
            <span className="nav-link dropdown-trigger">
              Media {chevronIcon}
            </span>
            <div className="dropdown-menu-list">
              <Link href="/media/photos">Photo Gallery</Link>
              <Link href="/media/videos">Video Gallery</Link>
              <Link href="/news">Latest News</Link>
              <Link href="/awards">Awards</Link>
            </div>
          </div>

          {/* Lifestyle Dropdown */}
          <div className="nav-item-dropdown">
            <span className="nav-link dropdown-trigger">
              Lifestyle {chevronIcon}
            </span>
            <div className="dropdown-menu-list">
              <Link href="/guide/home-guide">Home Guide</Link>
              <Link href="/guide/vaastu">Vaastu Special</Link>
              <Link href="/guide/interiors">Interior Design</Link>
              <Link href="/guide/better-living">Better Living</Link>
            </div>
          </div>

          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="cta-wrapper">
          <Link href="/contact" className="btn btn-primary btn-sm-nav">
            Get in Touch
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <Link href="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          
          {/* Company Mobile */}
          <div className="mobile-dropdown-container">
            <button className="mobile-nav-link mobile-dropdown-btn" onClick={() => toggleMobileDropdown("company")}>
              Company
              <svg className={`mobile-chevron ${activeMobileDropdown === "company" ? "rotate" : ""}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {activeMobileDropdown === "company" && (
              <div className="mobile-dropdown-links">
                <Link href="/about" onClick={closeMobileMenu}>About Us</Link>
                <Link href="/profile" onClick={closeMobileMenu}>Company Profile</Link>
                <Link href="/md-message" onClick={closeMobileMenu}>MD Message</Link>
                <Link href="/journey" onClick={closeMobileMenu}>Our Journey</Link>
                <Link href="/vision-mission" onClick={closeMobileMenu}>Vision & Mission</Link>
                <Link href="/why-choose-us" onClick={closeMobileMenu}>Why Choose Us</Link>
              </div>
            )}
          </div>

          {/* Projects Mobile */}
          <div className="mobile-dropdown-container">
            <button className="mobile-nav-link mobile-dropdown-btn" onClick={() => toggleMobileDropdown("projects")}>
              Projects
              <svg className={`mobile-chevron ${activeMobileDropdown === "projects" ? "rotate" : ""}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {activeMobileDropdown === "projects" && (
              <div className="mobile-dropdown-links">
                <Link href="/projects/latest" onClick={closeMobileMenu}>Latest Projects</Link>
                <Link href="/projects/existing" onClick={closeMobileMenu}>Existing Projects</Link>
                <Link href="/projects/previous" onClick={closeMobileMenu}>Previous Projects</Link>
              </div>
            )}
          </div>

          {/* Services Mobile */}
          <div className="mobile-dropdown-container">
            <button className="mobile-nav-link mobile-dropdown-btn" onClick={() => toggleMobileDropdown("services")}>
              Services
              <svg className={`mobile-chevron ${activeMobileDropdown === "services" ? "rotate" : ""}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {activeMobileDropdown === "services" && (
              <div className="mobile-dropdown-links">
                <Link href="/home-loan" onClick={closeMobileMenu}>Home Loan</Link>
                <Link href="/career" onClick={closeMobileMenu}>Careers</Link>
                <Link href="/downloads" onClick={closeMobileMenu}>Downloads</Link>
              </div>
            )}
          </div>

          {/* Media Mobile */}
          <div className="mobile-dropdown-container">
            <button className="mobile-nav-link mobile-dropdown-btn" onClick={() => toggleMobileDropdown("media")}>
              Media & Updates
              <svg className={`mobile-chevron ${activeMobileDropdown === "media" ? "rotate" : ""}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {activeMobileDropdown === "media" && (
              <div className="mobile-dropdown-links">
                <Link href="/media/photos" onClick={closeMobileMenu}>Photo Gallery</Link>
                <Link href="/media/videos" onClick={closeMobileMenu}>Video Gallery</Link>
                <Link href="/news" onClick={closeMobileMenu}>Latest News</Link>
                <Link href="/awards" onClick={closeMobileMenu}>Awards</Link>
              </div>
            )}
          </div>

          {/* Lifestyle Mobile */}
          <div className="mobile-dropdown-container">
            <button className="mobile-nav-link mobile-dropdown-btn" onClick={() => toggleMobileDropdown("lifestyle")}>
              Lifestyle & Guide
              <svg className={`mobile-chevron ${activeMobileDropdown === "lifestyle" ? "rotate" : ""}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {activeMobileDropdown === "lifestyle" && (
              <div className="mobile-dropdown-links">
                <Link href="/guide/home-guide" onClick={closeMobileMenu}>Home Guide</Link>
                <Link href="/guide/vaastu" onClick={closeMobileMenu}>Vaastu Special</Link>
                <Link href="/guide/interiors" onClick={closeMobileMenu}>Interior Design</Link>
                <Link href="/guide/better-living" onClick={closeMobileMenu}>Better Living</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
          <Link href="/contact" className="btn btn-orange mobile-cta" onClick={closeMobileMenu}>
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
