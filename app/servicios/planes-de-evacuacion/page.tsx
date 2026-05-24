import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Planes de Evacuación y Mapas de Riesgo | PREVITEC",
  description: "Diseño de planes de emergencia y evacuación, simulacros y mapas de riesgo para instituciones, empresas y eventos.",
};

export default function Page() {
  return <ClientPage />;
}
