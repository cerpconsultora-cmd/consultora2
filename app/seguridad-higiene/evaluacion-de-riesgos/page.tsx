import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Evaluación de Riesgos Laborales en Empresas | PREVITEC",
  description: "Realizamos la evaluación de riesgos laborales en tu planta. Matriz de riesgos, identificación de peligros e IPERC para cumplir con la ley y bajar la siniestralidad.",
};

export default function Page() {
  return <ClientPage />;
}
