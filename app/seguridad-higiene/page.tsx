"use client";

import { motion } from "framer-motion";
import { HardHat, ClipboardList, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";

export default function SeguridadHigienePage() {
  const services = [
    { title: "Programas de Seguridad e Higiene", icon: HardHat },
    { title: "Evaluación de riesgos", icon: ShieldAlert },
    { title: "Auditorías SST", icon: ClipboardList },
    { title: "Procedimientos operativos", icon: FileText },
    { title: "Gestión de EPP", icon: CheckCircle2 },
    { title: "Informes técnicos", icon: FileText },
    { title: "Investigación de incidentes", icon: ShieldAlert },
    { title: "Relevamientos e Inspecciones", icon: ClipboardList }
  ];

  return (
    <main className="pt-24 pb-0 bg-blanco">
      
      <section className="bg-azul text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Seguridad e <span className="text-amarillo">Higiene</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Protegemos el capital humano de tu empresa asegurando el cumplimiento legal y creando entornos de trabajo seguros.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-azul mb-6">Enfoque Integral SST</h2>
            <p className="text-gris leading-relaxed mb-6">
              No nos limitamos a cumplir normas. Implementamos sistemas de gestión que reducen la siniestralidad, optimizan los costos operativos y mejoran el clima laboral.
            </p>
            <p className="text-gris leading-relaxed">
              Realizamos relevamientos ambientales, señalización, control de condiciones laborales y mapas de riesgo detallados para que tu empresa opere con total tranquilidad.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-3xl p-8 relative"
          >
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                   <div className="text-4xl font-bold text-amarillo mb-2">100%</div>
                   <div className="text-sm font-medium text-azul">Adecuación Legal</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                   <div className="text-4xl font-bold text-cian mb-2">-60%</div>
                   <div className="text-sm font-medium text-azul">Siniestralidad</div>
                </div>
             </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-heading font-bold text-azul text-center mb-10">Servicios Específicos</h3>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <item.icon className="w-8 h-8 text-cian mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading font-bold text-azul text-sm">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
