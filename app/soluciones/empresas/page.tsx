import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Seguridad e Higiene para Empresas | PREVITEC",
  description: "Consultora experta en seguridad e higiene para empresas y PyMEs. Evitá multas de la SRT, cumplí la normativa legal y capacitá a tu personal.",
};

export default function Page() {
  return <ClientPage />;
}
