export default function APropos() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">A propos de MBL</div>
        <p className="section-subtitle">
          Notre mission, notre vision et notre equipe
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Nous creons lavenir numerique</h2>
            <p>
              MBL est une agence de developpement web specialisee dans la creation
              dapplications modernes et performantes. Depuis notre creation, nous
              accompagnons les entreprises dans leur transformation digitale.
            </p>
            <p>
              Notre approche combine expertise technique et creativite pour delivrer
              des solutions qui depassent les attentes de nos clients.
            </p>
            <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
              <div style={{ background: "var(--primary)", padding: "16px 24px", borderRadius: "8px" }}>
                <span style={{ fontSize: "2rem", display: "block" }}>🎯</span>
                <span style={{ fontWeight: 600 }}>Notre Mission</span>
                <p style={{ color: "white", fontSize: "0.9rem", marginTop: "8px" }}>
                  Rendre la technologie accessible et utile pour tous
                </p>
              </div>
            </div>
          </div>
          <div className="about-image">
            💻
          </div>
        </div>

        <div style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>👥</div>
            <h3 style={{ fontSize: "1.25rem" }}>15+ Experts</h3>
            <p style={{ color: "var(--text-muted)" }}>Une equipe pluridisciplinaire</p>
          </div>
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📦</div>
            <h3 style={{ fontSize: "1.25rem" }}>200+ Projets</h3>
            <p style={{ color: "var(--text-muted)" }}>Realisations terminees</p>
          </div>
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>⭐</div>
            <h3 style={{ fontSize: "1.25rem" }}>98% Satisfaction</h3>
            <p style={{ color: "var(--text-muted)" }}>Clients enthousiastes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
