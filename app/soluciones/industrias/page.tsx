import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Seguridad Industrial y Prevención de Riesgos | PREVITEC",
  description: "Consultora especialista en seguridad industrial. Reducí la siniestralidad de tu planta, cumplí normativas SRT y realizá mediciones ambientales.",
};

export default function Page() {
  return <ClientPage />;
}
