import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Contacto y Asesoramiento | PREVITEC Integral",
  description: "Comunicate con nuestro equipo de expertos en Paraná. Asesoramiento en seguridad, higiene y emergencias.",
};

export default function Page() {
  return <ClientPage />;
}
