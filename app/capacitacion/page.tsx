import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Capacitaciones en RCP, Primeros Auxilios y Brigadas | PREVITEC",
  description: "Cursos teórico-prácticos en RCP, primeros auxilios, uso de DEA y seguridad laboral para empresas, escuelas y eventos.",
};

export default function Page() {
  return <ClientPage />;
}
