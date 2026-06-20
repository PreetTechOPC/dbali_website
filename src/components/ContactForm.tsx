// E:\Dbali website\src\components\ContactForm.tsx
"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

    if (!scriptUrl) {
      console.warn("Google Sheet URL not configured. Simulating success.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", project: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        // no-cors is often required when talking to Google Apps Script from a browser
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Since mode is no-cors, we won't get a readable response back, but if it doesn't throw, it succeeded
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", project: "", message: "" });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSubmitting(false);
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div className="contact-form-wrapper">
      {isSuccess && (
        <div className="form-success-msg">
          ✓ Thank you for reaching out! Our sales representative will call you shortly.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="form-control"
          />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="project" className="form-label">
            Project of Interest
          </label>
          <select
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="" disabled>
              Select a Project
            </option>
            <option value="Palm Groove">Dbali Palm Groove (Villas)</option>
            <option value="White House">Dbali White House (Builder Floors)</option>
            <option value="Rosedale Housing">Dbali Rosedale Housing (Housing Society)</option>
            <option value="General Inquiry">General Consultation</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your housing requirement..."
            className="form-control"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-orange submit-btn"
        >
          {isSubmitting ? "Sending Inquiry..." : "Schedule Site Visit"}
        </button>
      </form>
    </div>
  );
}
