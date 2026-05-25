import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Consultora de Seguridad e Higiene en Santa Fe | PREVITEC",
  description: "Empresa de Seguridad Laboral en Santa Fe. Especialistas en polo industrial, agroindustria y comercio. Evitá multas y siniestros con nuestros auditores.",
};

export default function Page() {
  return <ClientPage />;
}
