import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Simulacros de Evacuación y Protocolos | PREVITEC",
  description: "Organización, coordinación y evaluación técnica de simulacros de evacuación para cumplir con la legislación.",
};

export default function Page() {
  return <ClientPage />;
}
