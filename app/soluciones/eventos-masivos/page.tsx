import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Cobertura Preventiva para Eventos Masivos | PREVITEC",
  description: "Especialistas en cobertura sanitaria y preventiva para eventos. Unidades de traslado, paramédicos y planes de contingencia para recitales y ferias.",
};

export default function Page() {
  return <ClientPage />;
}
