import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Curso de Primeros Auxilios y Trauma | PREVITEC",
  description: "Aprende a responder ante accidentes laborales, domésticos o en eventos. Capacitación en primeros auxilios con simuladores.",
};

export default function Page() {
  return <ClientPage />;
}
