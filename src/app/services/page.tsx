export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Développement Web",
      description: "Création de sites web et applications web modernes avec les dernières technologies.",
      features: ["React / Next.js", "Node.js / API", "Base de données"],
    },
    {
      icon: "📱",
      title: "Applications Mobiles",
      description: "Applications natives et cross-platform pour iOS et Android.",
      features: ["React Native", "Flutter", "PWA"],
    },
    {
      icon: "🎨",
      title: "Design UI/UX",
      description: "Conception d'interfaces utilisateur intuitives et esthétiques.",
      features: ["Maquettes Figma", "Tests utilisateurs", "Design system"],
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Infrastructure cloud et pipelines de déploiement automatisés.",
      features: ["AWS / Azure", "Docker / K8s", "CI/CD"],
    },
    {
      icon: "🔌",
      title: "API & Intégrations",
      description: "Développement d'API et intégration de services tiers.",
      features: ["REST / GraphQL", "Webhooks", "Authentification"],
    },
    {
      icon: "🛡️",
      title: "Cybersécurité",
      description: "Audit et renforcement de la sécurité de vos applications.",
      features: ["Pentests", "Hardening", "Surveillance"],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Nos Services</h2>
        <p className="section-subtitle">
          Des solutions complètes pour tous vos besoins digitaux
        </p>
        
        <div className="grid" style={{ marginTop: "48px" }}>
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul style={{ marginBottom: "24px" }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ color: "var(--text-muted)", marginBottom: "8px" }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ padding: "12px 24px", fontSize: "0.9rem" }}>
                Demander un devis
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
