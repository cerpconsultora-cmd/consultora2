"use client";

import { motion } from "framer-motion";
import { HardHat, Activity, GraduationCap, ClipboardCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Seguridad e Higiene",
    description: "Evaluación de riesgos, auditorías SST, procedimientos operativos y gestión documental para empresas.",
    icon: HardHat,
    color: "bg-amarillo",
    href: "/seguridad-higiene"
  },
  {
    title: "Emergencias",
    description: "Cobertura preventiva, brigadas, simulacros y respuesta prehospitalaria profesional.",
    icon: Activity,
    color: "bg-rojo",
    href: "/emergencias"
  },
  {
    title: "Capacitación",
    description: "Cursos empresariales, municipales y escolares en RCP, DEA y primeros auxilios.",
    icon: GraduationCap,
    color: "bg-cian",
    href: "/capacitacion"
  },
  {
    title: "Gestión Preventiva",
    description: "Planes de emergencia, mapas de riesgo, manuales y contingencias institucionales.",
    icon: ClipboardCheck,
    color: "bg-gris",
    href: "/gestion-preventiva"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cian font-bold uppercase tracking-wider mb-2"
          >
            Nuestras Soluciones
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-azul"
          >
            Servicios Integrales
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 w-24 bg-cian mx-auto mt-6 rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-blanco rounded-2xl p-8 h-full border border-gray-100 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-azul mb-3">
                  {service.title}
                </h3>
                <p className="text-gris leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-cian font-medium text-sm group-hover:underline">
                  Conocer más
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
