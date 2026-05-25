import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Por qué y cada cuánto hacer Simulacros de Evacuación | PREVITEC",
  description: "Todo lo que necesitas saber sobre los simulacros de evacuación en el ámbito laboral y educativo. Descargá el informe técnico.",
};

export default function Page() {
  return <ClientPage />;
}
