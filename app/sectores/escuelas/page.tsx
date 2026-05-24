import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Planes de Evacuación y Capacitación en Escuelas | PREVITEC",
  description: "Primeros auxilios para docentes, RCP, y simulacros de evacuación para instituciones educativas públicas y privadas.",
};

export default function Page() {
  return <ClientPage />;
}
