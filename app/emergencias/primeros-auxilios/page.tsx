import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Curso de Primeros Auxilios para Empresas y Escuelas | PREVITEC",
  description: "Capacitamos a tu personal en primeros auxilios. Manejo de heridas, fracturas, quemaduras y respuesta ante emergencias médicas laborales.",
};

export default function Page() {
  return <ClientPage />;
}
