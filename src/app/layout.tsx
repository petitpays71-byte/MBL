import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "MBL - Mon Beau Lieu",
  description: "Application MBL - Decouvrez nos services",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%236366f1'/><text x='50' y='68' font-size='50' font-weight='bold' text-anchor='middle' fill='white'>M</text></svg>",
        type: "image/svg+xml",
      },
    ],
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
            <Link href="/" className="logo">MBL</Link>
            <nav className="nav-links">
              <Link href="/" className="nav-link active">Accueil</Link>
              <Link href="/apropos" className="nav-link">A propos</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} MBL - Tous droits reserves</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
