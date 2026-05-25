import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Guía de Planes de Emergencia y Evacuación | PREVITEC",
  description: "Descargá nuestra guía de planes de emergencia en PDF. Aprendé a estructurar un plan de contingencia, asignar roles y cumplir la normativa SRT.",
};

export default function Page() {
  return <ClientPage />;
}
