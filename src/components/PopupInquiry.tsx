"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

export default function PopupInquiry() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkAndShowPopup = () => {
      const lastSeen = localStorage.getItem("lastInquiryPopupTime");
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000;
      
      if (!lastSeen || (now - parseInt(lastSeen, 10)) > fiveMinutes) {
        setIsOpen(true);
        // Record the time it was shown
        localStorage.setItem("lastInquiryPopupTime", now.toString());
      }
    };

    // Initial check after 2 seconds
    const initialTimer = setTimeout(checkAndShowPopup, 2000);

    // Keep checking periodically if the 5 minutes have elapsed while they are on the page
    const interval = setInterval(checkAndShowPopup, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Darkened slightly to compensate for no blur
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: "20px",
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "32px 32px 40px",
          maxWidth: "420px",
          width: "100%",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
          position: "relative",
          animation: "scaleIn 0.3s ease-out",
          willChange: "transform, opacity",
          textAlign: "center",
          borderTop: "6px solid var(--color-orange)",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "var(--bg-main)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            cursor: "pointer",
            color: "var(--text-muted)",
            transition: "all 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#eee")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-main)")}
        >
          &times;
        </button>

        <div style={{ marginBottom: "20px" }}>
          <Image
            src="/logo.jpg"
            alt="Dbali Logo"
            width={120}
            height={50}
            style={{ objectFit: "contain", margin: "0 auto" }}
          />
        </div>

        <h3 style={{ marginTop: 0, color: "var(--color-primary-dark)", fontSize: "24px", marginBottom: "12px" }}>
          Looking for a Property?
        </h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "30px", lineHeight: "1.6", fontSize: "15px" }}>
          Get in touch with our experts to find your dream home or the best investment opportunity in Kashipur.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <a
            href="https://wa.me/919012138044"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              backgroundColor: "#25D366",
              color: "#fff",
              padding: "16px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.2s",
              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 211, 102, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.3)";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp Enquire
          </a>

          <a
            href="tel:8630835635"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              backgroundColor: "var(--color-blue)",
              color: "#fff",
              padding: "16px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.2s",
              boxShadow: "0 4px 12px rgba(27, 133, 199, 0.3)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(27, 133, 199, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(27, 133, 199, 0.3)";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
