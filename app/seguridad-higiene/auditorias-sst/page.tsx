import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Auditoría SST: Seguridad e Higiene Laboral | PREVITEC",
  description: "Servicio integral de auditoría SST (Salud y Seguridad en el Trabajo). Relevamiento, informe técnico y adecuación a la normativa vigente.",
};

export default function Page() {
  return <ClientPage />;
}
