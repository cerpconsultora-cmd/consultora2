import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Seguridad e Higiene para Industrias | PREVITEC",
  description: "Consultoría y gestión de prevención de riesgos para el sector industrial. Adecuación legal, mapas de riesgo y auditorías.",
};

export default function Page() {
  return <ClientPage />;
}
