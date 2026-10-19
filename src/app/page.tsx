import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Bienvenue sur MBL</h1>
          <p>
            Nous transformons vos idees en solutions numeriques exceptionnelles.
            Innovation, qualite et passion au service de votre projet.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Debuter un projet
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Nos services
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Pourquoi nous choisir ?</h2>
          <p className="section-subtitle">
            Une equipe passionnee dediee a lexcellence
          </p>
          <div className="grid">
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3>Rapidite</h3>
              <p>
                Nous livrons des solutions rapidement sans compromis sur la qualite.
                Votre temps est precieux.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>Design moderne</h3>
              <p>
                Des interfaces eleganes et intuitives qui impressionnent vos utilisateurs.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3>Securite</h3>
              <p>
                Nous prioritisons la protection de vos donnees avec les meilleures pratiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--surface)", marginTop: "64px" }}>
        <div className="container">
          <h2 className="section-title">Nos derniers projets</h2>
          <p className="section-subtitle">
            Une selection de nos realisations recentes
          </p>
          <div className="grid">
            <div className="card">
              <div className="card-icon">📱</div>
              <h3>Application Mobile</h3>
              <p>
                Une application de gestion de taches avec synchronisation cloud en temps reel.
              </p>
              <Link href="/apropos" className="btn btn-primary" style={{ padding: "12px 24px", fontSize: "0.9rem" }}>
                En savoir plus
              </Link>
            </div>
            <div className="card">
              <div className="card-icon">🌐</div>
              <h3>Site E-commerce</h3>
              <p>
                Plateforme de vente en ligne avec paiement securise et gestion de stock.
              </p>
              <Link href="/apropos" className="btn btn-primary" style={{ padding: "12px 24px", fontSize: "0.9rem" }}>
                En savoir plus
              </Link>
            </div>
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Dashboard Analytics</h3>
              <p>
                Tableau de bord interactif pour le suivi des performances en temps reel.
              </p>
              <Link href="/apropos" className="btn btn-primary" style={{ padding: "12px 24px", fontSize: "0.9rem" }}>
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
