import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Servicios de Seguridad e Higiene Laboral | PREVITEC",
  description: "Programas de seguridad, evaluación de riesgos, auditorías SST y gestión de prevención laboral para empresas.",
};

export default function Page() {
  return <ClientPage />;
}
