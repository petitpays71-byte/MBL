import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">Nouveau site v2.0</span>
          <h1>
            Nous créons des{" "}
            <span className="gradient-text">expériences digitales</span>
            <br />
            qui transforment votre business
          </h1>
          <p>
            MBL Digital est une agence spécialisée dans le développement d&apos;applications
            web et mobiles sur mesure. Nous allions design élégant et performance technique
            pour donner vie à vos projets les plus ambitieux.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-large">
              Démarrer un projet
              <span>→</span>
            </Link>
            <Link href="/services" className="btn btn-secondary btn-large">
              Nos services
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">150+</div>
              <div className="hero-stat-label">Projets réalisés</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">98%</div>
              <div className="hero-stat-label">Clients satisfaits</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">8 ans</div>
              <div className="hero-stat-label">D&apos;expérience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">24/7</div>
              <div className="hero-stat-label">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section-eyebrow">Pourquoi MBL</span>
          <h2 className="section-title">L&apos;excellence au service de votre succès</h2>
          <p className="section-subtitle">
            Une approche méthodique et créative pour garantir des résultats exceptionnels
          </p>
          <div className="grid">
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>Rapidité & Agilité</h3>
              <p>
                Méthodologie agile avec des livraisons itératives. Vous voyez vos projets évoluer
                rapidement et pouvez ajuster en cours de route.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>Design Premium</h3>
              <p>
                Interfaces élégantes et intuitives qui impressionnent vos utilisateurs.
                Chaque pixel est pensé pour l&apos;expérience utilisateur.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🔍</div>
              <h3>Code Qualitatif</h3>
              <p>
                Architecture solide, tests automatisés et documentation complète.
                Votre projet reste maintenable et évolutif sur le long terme.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🛡️</div>
              <h3>Sécurité Maximale</h3>
              <p>
                Protection des données sensibles, authentification robuste et respect
                des réglementations RGPD. La confiance est notre priorité.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">📈</div>
              <h3>Performance Web</h3>
              <p>
                Optimisation du temps de chargement, SEO technique et
                Core Web Vitals. Votre site performe et convertit.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Support Continu</h3>
              <p>
                Accompagnement de A à Z, du conseil stratégique au support produit.
                Notre équipe reste à votre écoute au-delà du développement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2>Prêt à transformer votre présence digitale ?</h2>
          <p>
            Discutons de votre projet lors d&apos;une consultation gratuite de 30 minutes.
            Pas d&apos;engagement, juste des idées et des solutions.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-large">
              Réserver une consultation
              <span>→</span>
            </Link>
            <Link href="/apropos" className="btn btn-secondary btn-large">
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
