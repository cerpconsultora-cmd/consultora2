import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Formación de Brigadas de Emergencia | PREVITEC",
  description: "Capacitación teórico-práctica para formar brigadas de incendio y evacuación en empresas e industrias.",
};

export default function Page() {
  return <ClientPage />;
}
