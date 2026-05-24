const fs = require('fs');
const path = require('path');

const localPages = [
  {
    route: 'app/cobertura/parana',
    title: 'Consultora de Seguridad e Higiene en Paraná | PREVITEC',
    desc: 'Empresa líder en Seguridad e Higiene, Planes de Evacuación y Capacitación RCP en Paraná y Gran Paraná. Solicitá presupuesto hoy.',
    city: 'Paraná',
    contentDesc: 'Nuestra base operativa se encuentra en Paraná. Brindamos servicios integrales de Seguridad e Higiene, armados de legajos técnicos, simulacros y cursos de RCP para empresas e instituciones de toda la capital y Gran Paraná.'
  },
  {
    route: 'app/cobertura/santa-fe',
    title: 'Consultora de Seguridad e Higiene en Santa Fe | PREVITEC',
    desc: 'Servicios de Seguridad Laboral, Planes de Emergencia y Auditorías SST en Santa Fe. Profesionales matriculados a tu disposición.',
    city: 'Santa Fe',
    contentDesc: 'Acompañamos el crecimiento industrial y comercial de Santa Fe con servicios de alto nivel en gestión preventiva, auditorías y capacitación in-company.'
  },
  {
    route: 'app/cobertura/corrientes',
    title: 'Seguridad e Higiene y Emergencias en Corrientes | PREVITEC',
    desc: 'Cobertura preventiva para eventos, cursos de primeros auxilios y gestión de Riesgos Laborales en Corrientes. Contactanos.',
    city: 'Corrientes',
    contentDesc: 'Brindamos cobertura técnica en Corrientes, con rápida capacidad de despliegue para auditorías, evaluaciones de riesgos y simulacros de evacuación.'
  }
];

localPages.forEach(page => {
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
import { MapPin, ArrowRight, Phone } from "lucide-react";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function ClientPage() {
  return (
    <main className="pt-24 pb-0 bg-gray-50">
      <section className="bg-azul text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-cian/20 text-cian px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6"
            >
              <MapPin className="w-4 h-4" />
              COBERTURA REGIONAL
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              Seguridad e Higiene en <span className="text-amarillo">${page.city}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              ${page.contentDesc}
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:w-1/3"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
               <h3 className="text-xl font-heading font-bold mb-4">¿Hablamos de tu proyecto en ${page.city}?</h3>
               <p className="text-gray-300 text-sm mb-6">Un profesional matriculado analizará tus necesidades.</p>
               <Link href="/contacto" className="w-full flex items-center justify-center gap-2 bg-cian text-azul font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 transition-colors">
                 <Phone className="w-5 h-5" />
                 Contactar ahora
               </Link>
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
