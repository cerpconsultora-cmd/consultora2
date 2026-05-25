import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Seguridad e Higiene en Paraná | Consultora PREVITEC",
  description: "Consultora de seguridad e higiene radicada en Paraná, Entre Ríos. Auditorías SRT, simulacros, planes de evacuación y capacitaciones corporativas.",
};

export default function Page() {
  return <ClientPage />;
}
