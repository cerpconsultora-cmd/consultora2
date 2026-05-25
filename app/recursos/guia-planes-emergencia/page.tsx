import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Guía Definitiva: Planes de Emergencia y Evacuación | PREVITEC",
  description: "Aprendé cómo estructurar un Plan de Emergencias efectivo para tu empresa. Descargá nuestra plantilla en PDF.",
};

export default function Page() {
  return <ClientPage />;
}
