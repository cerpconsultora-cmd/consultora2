import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Evaluación de Riesgos Laborales | PREVITEC",
  description: "Identificación y evaluación de riesgos en el puesto de trabajo. Protegé a tu personal con un diagnóstico preciso.",
};

export default function Page() {
  return <ClientPage />;
}
