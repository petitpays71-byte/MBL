import Link from "next/link";

const services = [
  {
    icon: "💻",
    title: "Développement Web",
    description: "Création de sites web et applications web modernes, performantes et SEO-optimisées.",
    features: [
      "Applications React/Next.js",
      "Sites vitrines & E-commerce",
      "SaaS & Plateformes web",
      "SEO technique & Core Web Vitals",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "📱",
    title: "Applications Mobiles",
    description: "Applications natives et cross-platform performantes pour iOS et Android.",
    features: [
      "React Native & Flutter",
      "Applications natives iOS/Android",
      "Progressive Web Apps (PWA)",
      "Maintenance & mises à jour",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🎨",
    title: "Design UI/UX",
    description: "Conception d'interfaces utilisateur intuitives et esthétiques qui convertissent.",
    features: [
      "Maquettes Figma haute fidélité",
      "Design systems & composants",
      "User research & testing",
      "Optimisation du parcours utilisateur",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "Infrastructure cloud scalable et pipelines de déploiement automatisés et sécurisés.",
    features: [
      "AWS / Azure / GCP",
      "Docker & Kubernetes",
      "CI/CD automatisé",
      "Monitoring & alerting",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔌",
    title: "API & Intégrations",
    description: "Développement d'APIs robustes et intégration de services tiers pour connecter vos systèmes.",
    features: [
      "APIs REST & GraphQL",
      "Intégration services tiers",
      "Webhooks & événements",
      "Authentification & sécurité",
    ],
    color: "from-sky-500 to-indigo-500",
  },
  {
    icon: "🛡️",
    title: "Consulting & Audit",
    description: "Avis d'experts, audits techniques et stratégie digitale pour optimiser vos projets.",
    features: [
      "Audit technique & performance",
      "Conseil architecturale",
      "Stratégie digitale",
      "Formation & transfert de compétences",
    ],
    color: "from-violet-500 to-purple-600",
  },
];

export default function Services() {
  return (
    <>
      <section className="section" style={{ paddingTop: "60px", textAlign: "center" }}>
        <div className="container">
          <span className="section-eyebrow">Ce que nous faisons</span>
          <h2 className="section-title">Nos services</h2>
          <p className="section-subtitle">
            Des solutions complètes et sur-mesure pour tous vos besoins digitaux
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ 
                  background: `linear-gradient(${service.color})`,
                  border: "none"
                }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link href="/contact" className="service-link">
                  Parler de ce service
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2>Vous avez un projet en tête ?</h2>
          <p>
            Chaque projet est unique. Discutons de vos besoins et trouvons la solution parfaite ensemble.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-large">
              Demander un devis
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
