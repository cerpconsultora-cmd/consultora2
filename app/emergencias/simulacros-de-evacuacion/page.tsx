import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Simulacros de Evacuación en Empresas y Escuelas | PREVITEC",
  description: "Organizamos simulacros de evacuación profesionales. Medimos tiempos de respuesta y ajustamos el protocolo de emergencias de tu organización.",
};

export default function Page() {
  return <ClientPage />;
}
