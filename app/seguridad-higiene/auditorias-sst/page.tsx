import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Auditorías SST para Empresas | PREVITEC",
  description: "Servicio especializado de auditorías SST. Evitá multas de la SRT mediante un diagnóstico preciso de seguridad e higiene laboral en tu empresa.",
};

export default function Page() {
  return <ClientPage />;
}
