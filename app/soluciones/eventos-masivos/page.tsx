import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Cobertura Preventiva para Eventos Masivos | PREVITEC",
  description: "Planes de contingencia, equipos de trauma y cobertura de emergencias para eventos masivos y corporativos.",
};

export default function Page() {
  return <ClientPage />;
}
