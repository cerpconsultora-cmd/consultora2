import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "PREVITEC Integral | Prevención inteligente. Respuesta profesional.",
  description: "Seguridad · Higiene · Emergencias · Capacitación. Soluciones técnicas en prevención, seguridad laboral y respuesta ante emergencias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-blanco text-gris flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
