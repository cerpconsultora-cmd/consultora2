import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Consultora de Seguridad e Higiene en Paraná | PREVITEC",
  description: "Empresa líder en Seguridad e Higiene, Planes de Evacuación y Capacitación RCP en Paraná y Gran Paraná. Solicitá presupuesto hoy.",
};

export default function Page() {
  return <ClientPage />;
}
