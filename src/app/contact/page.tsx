"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Formulaire soumis:", formData);
    setLoading(false);
    setSubmitted(true);
    
    // Reinitialiser apres un delai
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Contactez-nous</h2>
        <p className="section-subtitle">
          Une question ou un projet ? Nous sommes a votre ecoute
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginTop: "48px" }}>
          <div>
            <div className="card" style={{ marginBottom: "32px" }}>
              <h3>Nos coordonnees</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
                Nhesitez pas à nous contacter pour toute question.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>📧 Email</span>
                  <p style={{ marginTop: "4px" }}>contact@mbl-app.com</p>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>📞 Telephone</span>
                  <p style={{ marginTop: "4px" }}>+33 1 23 45 67 89</p>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>📍 Adresse</span>
                  <p style={{ marginTop: "4px" }}>Paris, France</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Suivez-nous</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
                Restez connectes avec nos dernieres actualites.
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="btn btn-secondary"
                    style={{ padding: "12px 20px", fontSize: "0.9rem" }}
                  >
                    {social}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: "4rem", marginBottom: "24px" }}>✅</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>Message envoye !</h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Merci pour votre message. Nous vous répondrons rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Mon projet"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Decrivez votre projet ou votre question..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "16px", fontSize: "1.1rem" }}
                  disabled={loading}
                >
                  {loading ? "Envoi..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
