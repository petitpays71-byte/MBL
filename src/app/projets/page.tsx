import Link from "next/link";

const projects = [
  {
    title: "Plateforme E-commerce Luxury",
    tag: "E-commerce",
    description: "Une plateforme de vente en ligne haut de gamme avec expérience utilisateur immersive et paiement sécurisé.",
    icon: "🛍️",
    features: ["Panier intelligent", "Paiement Stripe", "Gestion stock", "Tracking livraison"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Dashboard Analytics Pro",
    tag: "SaaS",
    description: "Tableau de bord interactif pour le suivi des KPIs en temps réel avec graphiques personnalisables.",
    icon: "📊",
    features: ["Graphiques dynamiques", "Export PDF/CSV", "Alertes automatiques", "Rapports mensuels"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Application Fitness Connect",
    tag: "Mobile",
    description: "Application mobile de suivi fitness avec synchronisation cloud, programmes personnalisés et communauté.",
    icon: "🏋️",
    features: ["Suivi workouts", "Plans personnalisés", "Multi-appareils", "Communauté"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Portail Entreprise SaaS",
    tag: "Enterprise",
    description: "Portail client complet pour la gestion de compte, facturation et support avec tableau de bord intégré.",
    icon: "🏢",
    features: ["Gestion compte", "Facturation", "Support ticketing", "API intégration"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Réservation Hôtels & Voyages",
    tag: "Travel",
    description: "Plateforme de réservation avec recherche avancée, visualisation carte et expérience checkout optimisée.",
    icon: "✈️",
    features: ["Recherche avancée", "Carte interactive", "Checkout fluide", "Réservations multiples"],
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Plateforme de Formation en Ligne",
    tag: "EdTech",
    description: "LMS complet avec vidéos HD, quiz interactifs, certifications et suivi de progression des apprenants.",
    icon: "📚",
    features: ["Vidéos HD", "Quiz interactifs", "Certificates", "Suivi progression"],
    color: "from-violet-500 to-purple-600",
  },
];

export default function Projets() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">Nos réalisations</span>
        <h2 className="section-title">Projets récents</h2>
        <p className="section-subtitle">
          Une sélection de nos réalisations les plus remarquables
        </p>
        
        <div className="grid" style={{ marginTop: "48px" }}>
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="project-image" style={{ 
                background: `linear-gradient(135deg, var(--surface-light), var(--surface))` 
              }}>
                <span style={{ fontSize: "4rem" }}>{project.icon}</span>
              </div>
              <div className="project-content">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
                  {project.description}
                </p>
                <ul className="service-features" style={{ marginBottom: "20px" }}>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
                  Voir le projet
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: "center", 
          marginTop: "80px",
          padding: "48px",
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)"
        }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Plus de 150 projets réalisés</h3>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 32px" }}>
            De startup à grandes entreprises, nous accompagnons des clients de tous secteurs
            dans la transformation de leurs idées en solutions digitales concrètes.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Discutons de votre projet
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
