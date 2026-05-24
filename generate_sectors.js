const fs = require('fs');
const path = require('path');

const sectorsToCreate = [
  {
    route: 'app/sectores/industrias',
    title: 'Seguridad e Higiene para Industrias | PREVITEC',
    desc: 'Consultoría y gestión de prevención de riesgos para el sector industrial. Adecuación legal, mapas de riesgo y auditorías.',
    heading: 'Seguridad Industrial',
    contentDesc: 'Acompañamos a tu industria en el cumplimiento normativo y la reducción de la siniestralidad. Protegé tu capital humano y optimizá tus operaciones.',
    icon: 'Factory'
  },
  {
    route: 'app/sectores/empresas',
    title: 'Prevención y Capacitación para Empresas | PREVITEC',
    desc: 'Programas de seguridad, cursos de RCP y formación de brigadas a medida para corporaciones y PyMEs.',
    heading: 'Soluciones para Empresas',
    contentDesc: 'Gestión integral de Higiene y Seguridad Laboral para empresas comerciales y de servicios. Evitá multas y mejorá el clima laboral.',
    icon: 'Building2'
  },
  {
    route: 'app/sectores/escuelas',
    title: 'Planes de Evacuación y Capacitación en Escuelas | PREVITEC',
    desc: 'Primeros auxilios para docentes, RCP, y simulacros de evacuación para instituciones educativas públicas y privadas.',
    heading: 'Prevención en Escuelas',
    contentDesc: 'Cuidamos a quienes cuidan. Formamos al personal docente y no docente en primeros auxilios y diseñamos planes de evacuación seguros para colegios.',
    icon: 'School'
  },
  {
    route: 'app/sectores/eventos-masivos',
    title: 'Cobertura Preventiva para Eventos Masivos | PREVITEC',
    desc: 'Planes de contingencia, equipos de trauma y cobertura de emergencias para eventos masivos y corporativos.',
    heading: 'Eventos Masivos',
    contentDesc: 'Garantizá la seguridad de tus asistentes con nuestra cobertura preventiva integral. Desarrollamos planes de contingencia y aportamos brigadas especializadas.',
    icon: 'Users'
  }
];

sectorsToCreate.forEach(page => {
  const dirPath = path.join(__dirname, page.route);
  fs.mkdirSync(dirPath, { recursive: true });

  const serverContent = `import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "${page.title}",
  description: "${page.desc}",
};

export default function Page() {
  return <ClientPage />;
}
`;

  const clientContent = `"use client";

import { motion } from "framer-motion";
import { ${page.icon}, ArrowRight, ShieldAlert } from "lucide-react";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function ClientPage() {
  return (
    <main className="pt-24 pb-0 bg-white">
      <section className="bg-blanco py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-3 text-cian font-bold tracking-wide mb-4 text-sm uppercase">
               <ShieldAlert className="w-5 h-5" /> Especialistas por Sector
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-azul mb-6">
              ${page.heading}
            </h1>
            <p className="text-lg text-gris leading-relaxed mb-8">
              ${page.contentDesc}
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-cian text-azul font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors">
              Consultar ahora <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-gray-50 rounded-3xl p-16 flex items-center justify-center border border-gray-100">
               <${page.icon} className="w-32 h-32 text-azul opacity-20" />
            </div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), serverContent);
  fs.writeFileSync(path.join(dirPath, 'ClientPage.tsx'), clientContent);
  console.log('Created', page.route);
});
