import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Diseño de Planes de Evacuación y Emergencia | PREVITEC",
  description: "Elaboramos planes de evacuación para empresas y escuelas. Rutas de escape, cálculo de aforo y mapas de riesgo bajo normativa vigente.",
};

export default function Page() {
  return <ClientPage />;
}
