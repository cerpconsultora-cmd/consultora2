import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Consultora de Seguridad e Higiene en Santa Fe | PREVITEC",
  description: "Servicios de Seguridad Laboral, Planes de Emergencia y Auditorías SST en Santa Fe. Profesionales matriculados a tu disposición.",
};

export default function Page() {
  return <ClientPage />;
}
