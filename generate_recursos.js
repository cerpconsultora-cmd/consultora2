const fs = require('fs');
const path = require('path');

const resources = [
  {
    route: 'app/recursos/guia-planes-emergencia',
    title: 'Guía Definitiva: Planes de Emergencia y Evacuación | PREVITEC',
    desc: 'Aprendé cómo estructurar un Plan de Emergencias efectivo para tu empresa. Descargá nuestra plantilla en PDF.',
    heading: 'Cómo diseñar un Plan de Emergencias efectivo',
    contentDesc: 'Un plan de emergencias no es solo un papel para cumplir con la SRT. Es la diferencia entre un susto y una tragedia. En esta guía te explicamos paso a paso qué debe contener, cómo asignar roles y por qué la Ley 19.587 lo exige.',
    paragraphs: [
      "Las emergencias médicas, incendios o amenazas no avisan. Tener un plan estructurado garantiza que cada empleado sepa exactamente qué hacer, adónde ir y a quién reportar.",
      "Según la normativa vigente, todo establecimiento con personal en relación de dependencia debe contar con un Plan de Evacuación aprobado por Defensa Civil o Bomberos.",
      "Los tres pilares de un buen plan son: 1) Análisis de riesgos (qué puede pasar). 2) Asignación de roles (quién hace qué). 3) Vías de escape y punto de encuentro seguro."
    ],
    pdfTitle: 'Descargá la Plantilla de Plan de Emergencias',
    pdfDesc: 'Recibí en tu correo un PDF gratuito con el esqueleto oficial para armar el plan de tu empresa, junto a un checklist de control de extintores.',
    pdfName: 'plantilla-emergencias-previtec.pdf'
  },
  {
    route: 'app/recursos/checklist-auditoria-sst',
    title: 'Checklist para Auditorías de Seguridad e Higiene | PREVITEC',
    desc: 'Descargá nuestro checklist de autoevaluación para saber si tu empresa cumple con las normativas de la SRT antes de una inspección.',
    heading: 'Checklist: ¿Estás listo para una inspección de la SRT?',
    contentDesc: 'Las multas por incumplimiento en Seguridad e Higiene son altísimas, pero evitables. Conocer los puntos ciegos de tu instalación te permite corregirlos antes de la llegada del inspector.',
    paragraphs: [
      "El Legajo Técnico es el corazón documental de la seguridad en tu empresa. Debe incluir la nómina del personal, las capacitaciones realizadas, el registro de entrega de EPP (Elementos de Protección Personal) y la medición de puesta a tierra.",
      "Otro punto crítico son las instalaciones eléctricas y el riesgo de incendio. ¿Tenés los extintores cargados y con tarjeta al día? ¿Las luces de emergencia funcionan? ¿Hay cartelería indicativa de salidas?",
      "No esperes a la intimación. Utilizá nuestro material para realizar una auto-auditoría inicial y luego contactá a nuestros profesionales matriculados para regularizar tu situación."
    ],
    pdfTitle: 'Descargá el Checklist de Auditoría SST',
    pdfDesc: 'Obtené nuestro PDF gratuito con los 50 puntos críticos que todo inspector de la Superintendencia de Riesgos del Trabajo revisa al visitar una planta o comercio.',
    pdfName: 'checklist-sst-previtec.pdf'
  },
  {
    route: 'app/recursos/importancia-simulacros',
    title: 'Por qué y cada cuánto hacer Simulacros de Evacuación | PREVITEC',
    desc: 'Todo lo que necesitas saber sobre los simulacros de evacuación en el ámbito laboral y educativo. Descargá el informe técnico.',
    heading: 'Simulacros de Evacuación: La práctica que salva vidas',
    contentDesc: 'Tener un plan escrito no sirve de nada si el personal no sabe ejecutarlo bajo presión. Los simulacros fijan el conocimiento mediante la memoria muscular y el trabajo en equipo.',
    paragraphs: [
      "La legislación recomienda realizar al menos un simulacro anual, pero en industrias de alto riesgo o escuelas, lo ideal es una frecuencia semestral. El objetivo no es hacerlo rápido, sino hacerlo seguro.",
      "Durante un simulacro se miden los tiempos de respuesta de los líderes de evacuación, la efectividad del sistema de alarmas y el comportamiento de las personas frente a vías obstruidas simuladas.",
      "Nuestra consultora organiza, coordina y audita simulacros, entregando posteriormente un informe técnico de mejoras que se adjunta al Legajo Técnico para presentar ante las autoridades."
    ],
    pdfTitle: 'Descargá la Guía de Coordinación de Simulacros',
    pdfDesc: 'Un manual en PDF con las pautas para organizar un simulacro de evacuación efectivo, los roles de la brigada y los errores más comunes a evitar.',
    pdfName: 'manual-simulacros-previtec.pdf'
  }
];

// Create individual guides
resources.forEach(page => {
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
import CTA from "@/components/CTA";
import LeadMagnet from "@/components/LeadMagnet";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ClientPage() {
  return (
    <main className="pt-24 pb-0 bg-white">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/recursos" className="inline-flex items-center gap-2 text-cian font-bold hover:text-azul transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver a Recursos
        </Link>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-azul mb-6 leading-tight"
        >
          ${page.heading}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gris mb-12 leading-relaxed"
        >
          ${page.contentDesc}
        </motion.p>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          ${page.paragraphs.map(p => `<p className="mb-6 leading-relaxed">${p}</p>`).join('\n          ')}
        </div>

        <LeadMagnet 
          title="${page.pdfTitle}" 
          description="${page.pdfDesc}" 
          pdfName="${page.pdfName}" 
        />
      </article>

      <CTA />
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), serverContent);
  fs.writeFileSync(path.join(dirPath, 'ClientPage.tsx'), clientContent);
});

// Create Main Recursos Page
const hubDirPath = path.join(__dirname, 'app/recursos');
fs.mkdirSync(hubDirPath, { recursive: true });

const hubServerContent = `import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Recursos y Guías de Seguridad e Higiene | PREVITEC",
  description: "Descargá guías, checklists y PDFs gratuitos sobre planes de emergencia, auditorías SST y simulacros de evacuación.",
};

export default function Page() {
  return <ClientPage />;
}
`;

const hubClientContent = `"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function ClientPage() {
  const guides = [
    {
      title: "Guía Definitiva: Planes de Emergencia y Evacuación",
      desc: "Aprendé cómo estructurar un Plan de Emergencias efectivo para tu empresa y descargá la plantilla oficial.",
      href: "/recursos/guia-planes-emergencia"
    },
    {
      title: "Checklist para Auditorías de Seguridad e Higiene",
      desc: "Autoevaluación para saber si tu empresa cumple con las normativas de la SRT antes de una inspección.",
      href: "/recursos/checklist-auditoria-sst"
    },
    {
      title: "Por qué y cada cuánto hacer Simulacros",
      desc: "Todo lo que necesitas saber sobre los simulacros de evacuación en el ámbito laboral y educativo.",
      href: "/recursos/importancia-simulacros"
    }
  ];

  return (
    <main className="pt-24 pb-0 bg-gray-50">
      <section className="bg-azul text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-cian/20 text-cian px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6"
          >
            <BookOpen className="w-4 h-4" />
            CENTRO DE CONOCIMIENTO
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Recursos <span className="text-cian">Técnicos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Documentación, guías y checklists gratuitos para ayudarte a gestionar la seguridad y responder ante emergencias.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={guide.href} className="block h-full bg-white rounded-3xl p-8 border border-gray-100 hover:border-cian hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-azul rounded-2xl flex items-center justify-center mb-6 group-hover:bg-azul group-hover:text-white transition-colors">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-azul mb-4 group-hover:text-cian transition-colors">{guide.title}</h3>
                <p className="text-gris mb-8 leading-relaxed">{guide.desc}</p>
                <div className="flex items-center gap-2 text-cian font-bold text-sm uppercase tracking-wide">
                  Leer Guía <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
`;

fs.writeFileSync(path.join(hubDirPath, 'page.tsx'), hubServerContent);
fs.writeFileSync(path.join(hubDirPath, 'ClientPage.tsx'), hubClientContent);

console.log('Recursos generated successfully.');
