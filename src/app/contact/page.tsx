"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (formData.email.includes("test")) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      setLoading(false);
      return;
    }

    console.log("Nouveau contact:", formData);
    setLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="section" style={{ paddingTop: "60px", textAlign: "center" }}>
        <div className="container">
          <span className="section-eyebrow">Commençons ensemble</span>
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">
            Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Restons en contact</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "32px" }}>
                Que vous ayez une question ou un projet en tête, nous sommes là pour vous.
              </p>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <p>contact@mbl-digital.fr</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-item-content">
                  <h4>Téléphone</h4>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-item-content">
                  <h4>Adresse</h4>
                  <p>42 Rue de l Innovation</p>
                  <p style={{ marginTop: "2px" }}>75001 Paris, France</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-item-content">
                  <h4>Horaires</h4>
                  <p>Lun - Ven : 9h00 - 18h00</p>
                </div>
              </div>

              <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid var(--border)" }}>
                <h4 style={{ fontSize: "0.875rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
                  Suivez-nous
                </h4>
                <div className="social-links">
                  <Link href="#" className="social-link" aria-label="Twitter">𝕏</Link>
                  <Link href="#" className="social-link" aria-label="LinkedIn">in</Link>
                  <Link href="#" className="social-link" aria-label="GitHub">GH</Link>
                  <Link href="#" className="social-link" aria-label="Instagram">IG</Link>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div className="success-message">
                  <span className="icon">✅</span>
                  <h3>Message envoyé avec succès !</h3>
                  <p>
                    Merci pour votre message. Notre équipe vous contactera sous 24h pour discuter de votre projet.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div className="form-group">
                      <label htmlFor="name">Nom complet *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@entreprise.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: "20px" }}>
                    <label htmlFor="company">Entreprise (optionnel)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" }}>
                    <div className="form-group">
                      <label htmlFor="service">Service souhaité</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="web">Développement Web</option>
                        <option value="mobile">Applications Mobiles</option>
                        <option value="design">Design UI/UX</option>
                        <option value="cloud">Cloud & DevOps</option>
                        <option value="api">API & Intégrations</option>
                        <option value="consulting">Consulting & Audit</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Budget estimé</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Sélectionnez un budget</option>
                        <option value="<5k">Moins de 5 000 €</option>
                        <option value="5k-15k">5 000 - 15 000 €</option>
                        <option value="15k-50k">15 000 - 50 000 €</option>
                        <option value="50k+">Plus de 50 000 €</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: "20px" }}>
                    <label htmlFor="message">Votre message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                      required
                      className="form-input"
                      rows={5}
                    />
                  </div>

                  {error && (
                    <div style={{ 
                      background: "rgba(239, 68, 68, 0.1)", 
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#ef4444",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      marginBottom: "16px",
                      fontSize: "0.9rem"
                    }}>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span style={{ display: "inline-block", animation: "pulse 1s infinite" }}>
                          Envoi en cours...
                        </span>
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <span>→</span>
                      </>
                    )}
                  </button>

                  <p style={{ textAlign: "center", marginTop: "16px", fontSize: "0.8rem", color: "var(--text-dim)" }}>
                    Nous nous engageons à ne pas partager vos données avec des tiers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
