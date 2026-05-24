import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Nuestra Historia y Misión | PREVITEC Integral",
  description: "Conocé nuestra historia, misión, valores y cobertura geográfica en Entre Ríos, Santa Fe y Corrientes.",
};

export default function Page() {
  return <ClientPage />;
}
