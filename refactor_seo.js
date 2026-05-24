const fs = require('fs');
const path = require('path');

const routes = [
  { dir: 'app', title: 'Consultora Integral en Seguridad e Higiene y Emergencias | PREVITEC', desc: 'Soluciones técnicas en prevención, seguridad laboral, capacitación y respuesta ante emergencias en el Litoral argentino.' },
  { dir: 'app/nosotros', title: 'Nuestra Historia y Misión | PREVITEC Integral', desc: 'Conocé nuestra historia, misión, valores y cobertura geográfica en Entre Ríos, Santa Fe y Corrientes.' },
  { dir: 'app/seguridad-higiene', title: 'Servicios de Seguridad e Higiene Laboral | PREVITEC', desc: 'Programas de seguridad, evaluación de riesgos, auditorías SST y gestión de prevención laboral para empresas.' },
  { dir: 'app/emergencias', title: 'Gestión y Respuesta ante Emergencias | PREVITEC', desc: 'Protocolos de evacuación, formación de brigadas y respuesta prehospitalaria. Preparación ante emergencias.' },
  { dir: 'app/capacitacion', title: 'Capacitaciones en RCP, Primeros Auxilios y Brigadas | PREVITEC', desc: 'Cursos teórico-prácticos en RCP, primeros auxilios, uso de DEA y seguridad laboral para empresas, escuelas y eventos.' },
  { dir: 'app/gestion-preventiva', title: 'Gestión Preventiva y Planes de Evacuación | PREVITEC', desc: 'Diseño de planes de emergencia, mapas de riesgo y protocolos de contingencia adaptados a la legislación.' },
  { dir: 'app/contacto', title: 'Contacto y Asesoramiento | PREVITEC Integral', desc: 'Comunicate con nuestro equipo de expertos en Paraná. Asesoramiento en seguridad, higiene y emergencias.' }
];

routes.forEach(route => {
  const dirPath = path.join(__dirname, route.dir);
  const oldPagePath = path.join(dirPath, 'page.tsx');
  const clientPagePath = path.join(dirPath, 'ClientPage.tsx');
  
  if (fs.existsSync(oldPagePath)) {
    // Rename page.tsx to ClientPage.tsx
    fs.renameSync(oldPagePath, clientPagePath);
    
    // Create new server component page.tsx
    const serverPageContent = `import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "${route.title}",
  description: "${route.desc}",
};

export default function Page() {
  return <ClientPage />;
}
`;
    fs.writeFileSync(oldPagePath, serverPageContent);
    console.log(`Updated ${route.dir}`);
  }
});
