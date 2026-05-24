import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Consultora Integral en Seguridad e Higiene y Emergencias | PREVITEC",
  description: "Soluciones técnicas en prevención, seguridad laboral, capacitación y respuesta ante emergencias en el Litoral argentino.",
};

export default function Page() {
  return <ClientPage />;
}
