import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Gestión Preventiva y Planes de Evacuación | PREVITEC",
  description: "Diseño de planes de emergencia, mapas de riesgo y protocolos de contingencia adaptados a la legislación.",
};

export default function Page() {
  return <ClientPage />;
}
