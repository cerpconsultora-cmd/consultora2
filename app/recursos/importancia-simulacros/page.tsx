import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Guía de Coordinación de Simulacros de Evacuación | PREVITEC",
  description: "Descargá nuestra Guía de Coordinación de Simulacros. Todo lo que necesitas saber sobre simulacros de evacuación en industrias y escuelas.",
};

export default function Page() {
  return <ClientPage />;
}
