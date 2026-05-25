import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Consultora de Seguridad e Higiene en Corrientes | PREVITEC",
  description: "Especialistas en Seguridad e Higiene en Corrientes Capital y zona de influencia. Auditorías laborales, planes de emergencia y capacitaciones In Company.",
};

export default function Page() {
  return <ClientPage />;
}
