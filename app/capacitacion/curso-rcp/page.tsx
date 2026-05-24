import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Cursos de RCP y Uso de DEA para Empresas | PREVITEC",
  description: "Capacitación presencial en RCP y manejo de Desfibrilador Externo Automático (DEA). Cursos teórico-prácticos con certificación.",
};

export default function Page() {
  return <ClientPage />;
}
