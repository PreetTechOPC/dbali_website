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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to send email/save leads
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
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
