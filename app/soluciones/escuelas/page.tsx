import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Planes de Evacuación para Escuelas | PREVITEC",
  description: "Consultora especializada en seguridad para colegios. Diseñamos planes de evacuación para escuelas, capacitamos docentes y organizamos simulacros escolares.",
};

export default function Page() {
  return <ClientPage />;
}
