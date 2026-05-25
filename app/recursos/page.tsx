import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Recursos y Guías de Seguridad e Higiene | PREVITEC",
  description: "Descargá guías, checklists y PDFs gratuitos sobre planes de emergencia, auditorías SST y simulacros de evacuación.",
};

export default function Page() {
  return <ClientPage />;
}
