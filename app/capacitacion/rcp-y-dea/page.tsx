import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Curso de RCP y DEA para Empresas y Escuelas | PREVITEC",
  description: "Capacitación teórico-práctica en Reanimación Cardiopulmonar (RCP) y manejo de Desfibrilador Externo Automático (DEA). Cursos certificados.",
};

export default function Page() {
  return <ClientPage />;
}
