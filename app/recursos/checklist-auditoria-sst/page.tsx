import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Checklist de Auditoría SST Gratuito | PREVITEC",
  description: "Descargá gratis nuestro checklist de auditoría SST. Autoevaluá tu empresa, revisá la documentación y preparate para inspecciones de la SRT.",
};

export default function Page() {
  return <ClientPage />;
}
