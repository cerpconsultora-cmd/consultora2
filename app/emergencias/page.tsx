import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Gestión y Respuesta ante Emergencias | PREVITEC",
  description: "Protocolos de evacuación, formación de brigadas y respuesta prehospitalaria. Preparación ante emergencias.",
};

export default function Page() {
  return <ClientPage />;
}
