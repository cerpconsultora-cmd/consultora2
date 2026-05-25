import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Checklist para Auditorías de Seguridad e Higiene | PREVITEC",
  description: "Descargá nuestro checklist de autoevaluación para saber si tu empresa cumple con las normativas de la SRT antes de una inspección.",
};

export default function Page() {
  return <ClientPage />;
}
