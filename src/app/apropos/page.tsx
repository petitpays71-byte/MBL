import Link from "next/link";

export default function APropos() {
  return (
    <>
      <section className="section" style={{ paddingTop: "60px" }}>
        <div className="container">
          <span className="section-eyebrow">Notre histoire</span>
          <h2 className="section-title">L&apos;agence qui fait la différence</h2>
          <p className="section-subtitle">
            8 ans d&apos;expérience au service de l&apos;innovation digitale
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Nous sommes MBL Digital</h2>
              <p>
                Fondée en 2016 à Paris, MBL Digital est une agence de développement web et mobile
                qui accompagne les entreprises dans leur transformation digitale. Notre approche
                combine expertise technique pointue et créativité pour créer des solutions
                qui non seulement fonctionnent, mais qui inspirent.
              </p>
              <p>
                Nous croyons que chaque projet est unique et mérite une attention particulière.
                D&apos;ailleurs, nous ne faisons pas de templates prépackagés - chaque solution est
                conçue et développée sur mesure selon vos besoins spécifiques.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div>
                    <strong>Notre Mission</strong>
                    <p>Créer des solutions digitales qui résolvent des problèmes réels et génèrent un impact mesurable.</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💡</div>
                  <div>
                    <strong>Notre Vision</strong>
                    <p>Devenir le partenaire de confiance des entreprises qui veulent innover et se distinguer sur le marché.</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⚙️</div>
                  <div>
                    <strong>Notre Méthode</strong>
                    <p>Agile, transparente et orientée résultats. Vous êtes impliqué à chaque étape du projet.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="about-image-wrapper">
                <div className="about-image-content">
                  <span className="big-icon">🚀</span>
                  <p style={{ color: "white", opacity: 0.9, fontSize: "1.25rem" }}>
                    Innovation • Passion • Excellence
                  </p>
                </div>
              </div>
              <div className="about-floating-card">
                <div className="number">8+</div>
                <div className="label">Ans d&apos;expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="section-eyebrow">Expertise</span>
          <h2 className="section-title">Une équipe pluridisciplinaire</h2>
          <p className="section-subtitle">
            Des talents complets pour mener vos projets du concept au déploiement
          </p>
          
          <div className="grid" style={{ marginTop: "48px" }}>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ margin: "0 auto 24px" }}>👥</div>
              <h3 style={{ fontSize: "2rem", marginBottom: "8px" }}>25+</h3>
              <p style={{ color: "var(--text-muted)" }}>Collaborateurs passionnés</p>
              <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "40px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary-light)" }}>12</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Devs Full-Stack</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary-light)" }}>5</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Designers UI/UX</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary-light)" }}>8</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Projets/an</div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ margin: "0 auto 24px" }}>🏆</div>
              <h3 style={{ fontSize: "2rem", marginBottom: "8px" }}>Distinctions</h3>
              <p style={{ color: "var(--text-muted)" }}>Reconnaissons par notre travail</p>
              <ul style={{ textAlign: "left", marginTop: "20px" }}>
                <li style={{ color: "var(--text-dim)", marginBottom: "8px", display: "flex", gap: "8px" }}>
                  🥇 Web Agency of the Year 2024
                </li>
                <li style={{ color: "var(--text-dim)", marginBottom: "8px", display: "flex", gap: "8px" }}>
                  🏅 Clutch Top Developer 2023
                </li>
                <li style={{ color: "var(--text-dim)", marginBottom: "8px", display: "flex", gap: "8px" }}>
                  ⭐ 5.0 / 5.0 sur Upwork
                </li>
              </ul>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ margin: "0 auto 24px" }}>🌍</div>
              <h3 style={{ fontSize: "2rem", marginBottom: "8px" }}>Clients</h3>
              <p style={{ color: "var(--text-muted)" }}>Des entreprises qui nous font confiance</p>
              <div style={{ marginTop: "20px" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🏢🏢🏢🏢🏢</div>
                <p style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>
                  Start-ups, PME,ETI et grands comptes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2>Intéressé par une collaboration ?</h2>
          <p>
            Nous serions ravis d&apos;échanger sur vos projets et de vous expliquer comment nous pouvons vous aider.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-large">
              Nous contacter
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
