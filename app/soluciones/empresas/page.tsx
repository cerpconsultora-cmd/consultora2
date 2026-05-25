import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Prevención y Capacitación para Empresas | PREVITEC",
  description: "Programas de seguridad, cursos de RCP y formación de brigadas a medida para corporaciones y PyMEs.",
};

export default function Page() {
  return <ClientPage />;
}
