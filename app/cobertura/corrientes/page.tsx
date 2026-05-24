import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Seguridad e Higiene y Emergencias en Corrientes | PREVITEC",
  description: "Cobertura preventiva para eventos, cursos de primeros auxilios y gestión de Riesgos Laborales en Corrientes. Contactanos.",
};

export default function Page() {
  return <ClientPage />;
}
