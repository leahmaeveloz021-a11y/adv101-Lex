import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import Header from "../components/Header";
import { site } from "../data/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata = { title: `${site.name} | Portfolio`, description: site.intro };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">Made by {site.name} for ADV101. Written in Next.js.</footer>
      </body>
    </html>
  );
}
