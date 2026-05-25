"use client";

import { motion } from "framer-motion";
import { Factory, School, Users, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const clientSolutions = [
  {
    target: "Industrias y Plantas",
    problem: "Riesgo de clausuras, multas de la SRT y accidentes operativos graves.",
    solution: "Cumplimiento legal estricto. Evaluación de riesgos en planta, auditorías de seguridad e higiene y formación de brigadas internas.",
    icon: Factory,
    links: [
      { text: "Auditorías SST", href: "/seguridad-higiene/auditorias-sst" },
      { text: "Evaluación de Riesgos", href: "/seguridad-higiene/evaluacion-de-riesgos" },
      { text: "Checklist de SRT (Gratis)", href: "/recursos/checklist-auditoria-sst", isResource: true }
    ]
  },
  {
    target: "Empresas y Corporativos",
    problem: "Falta de planes de contingencia y personal sin entrenamiento para emergencias médicas.",
    solution: "Desarrollo de planes de emergencia, capacitación en RCP/DEA para empleados y protocolos de evacuación de oficinas.",
    icon: Building2,
    links: [
      { text: "Cursos de RCP y DEA", href: "/capacitacion/rcp-y-dea" },
      { text: "Planes de Emergencia", href: "/gestion-preventiva/planes-de-evacuacion" },
      { text: "Guía de Planes (Gratis)", href: "/recursos/guia-planes-emergencia", isResource: true }
    ]
  },
  {
    target: "Escuelas e Instituciones",
    problem: "Alta responsabilidad civil sobre alumnos ante incidentes y normativas municipales exigentes.",
    solution: "Diseño de vías de escape, simulacros de evacuación anuales y capacitación en primeros auxilios docentes.",
    icon: School,
    links: [
      { text: "Simulacros de Evacuación", href: "/emergencias/simulacros-de-evacuacion" },
      { text: "Primeros Auxilios", href: "/emergencias/primeros-auxilios" },
      { text: "Manual de Simulacros", href: "/recursos/importancia-simulacros", isResource: true }
    ]
  },
  {
    target: "Eventos Masivos y Clubes",
    problem: "Multitudes expuestas a paros cardíacos súbitos y requisitos obligatorios de habilitación.",
    solution: "Cobertura preventiva in-situ con áreas protegidas, equipamiento de trauma y desfibriladores automáticos (DEA).",
    icon: Users,
    links: [
      { text: "Cobertura Preventiva", href: "/emergencias" },
      { text: "Capacitación de Staff", href: "/capacitacion" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cian font-bold uppercase tracking-wider mb-2"
          >
            Matriz de Soluciones
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-azul mb-6"
          >
            Servicios adaptados a tu realidad
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gris text-lg"
          >
            No ofrecemos enlatados. Entendemos las exigencias legales y los riesgos específicos de tu sector para brindarte exactamente lo que necesitas.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {clientSolutions.map((solution, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-cian/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-azul flex items-center justify-center text-white shrink-0">
                  <solution.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-azul">
                  {solution.target}
                </h3>
              </div>
              
              <div className="mb-4">
                <span className="text-rojo font-bold text-sm uppercase tracking-wide">El Problema:</span>
                <p className="text-gray-600 mt-1">{solution.problem}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-cian font-bold text-sm uppercase tracking-wide">Nuestra Solución:</span>
                <p className="text-gray-800 font-medium mt-1">{solution.solution}</p>
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-6">
                <p className="text-sm font-bold text-azul uppercase">Servicios y Recursos sugeridos:</p>
                {solution.links.map((link, i) => (
                  <Link key={i} href={link.href} className="flex items-center gap-2 group">
                    <ArrowRight className={`w-4 h-4 ${link.isResource ? "text-cian" : "text-gris"} group-hover:translate-x-1 transition-transform`} />
                    <span className={`text-sm font-medium ${link.isResource ? "text-cian group-hover:text-azul" : "text-gris group-hover:text-azul"} transition-colors`}>
                      {link.text}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
