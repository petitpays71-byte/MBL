import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MBL - Digital Agency | Solutions Innovation",
    template: "%s | MBL",
  },
  description: "Agence digitale spécialisée dans le développement web, les applications mobiles et l'innovation technologique. Transformons vos idées en solutions digitales exceptionnelles.",
  keywords: ["agence web", "développement", "digital", "innovation", "MBL"],
  authors: [{ name: "MBL" }],
  openGraph: {
    title: "MBL - Digital Agency",
    description: "Solutions digitales innovantes pour votre entreprise",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <header className="navbar">
          <div className="container">
            <Link href="/" className="logo">
              <span className="logo-icon">M</span>
              MBL
            </Link>
            <nav className="nav-links">
              <Link href="/" className="nav-link active">Accueil</Link>
              <Link href="/apropos" className="nav-link">À propos</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/projets" className="nav-link">Projets</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <Link href="/" className="logo">
                  <span className="logo-icon">M</span>
                  MBL
                </Link>
                <p style={{ marginTop: "16px" }}>
                  Agence digitale innovante basée à Paris. Nous transformons vos défis business en solutions technology élégantes.
                </p>
              </div>
              <div className="footer-column">
                <h4>Pages</h4>
                <ul>
                  <li><Link href="/">Accueil</Link></li>
                  <li><Link href="/apropos">À propos</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/projets">Projets</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><Link href="/services">Développement Web</Link></li>
                  <li><Link href="/services">Applications Mobiles</Link></li>
                  <li><Link href="/services">UI/UX Design</Link></li>
                  <li><Link href="/services">Consulting</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <ul>
                  <li>contact@mbl-digital.fr</li>
                  <li>+33 1 23 45 67 89</li>
                  <li>Paris, France</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} MBL Digital. Tous droits réservés.</p>
              <div className="footer-bottom-links">
                <Link href="/mentions-legales">Mentions légales</Link>
                <Link href="/politique-confidentialite">Confidentialité</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
