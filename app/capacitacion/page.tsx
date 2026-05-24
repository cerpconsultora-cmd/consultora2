"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, School, Tent, Factory, Users } from "lucide-react";
import CTA from "@/components/CTA";

export default function CapacitacionPage() {
  const audiences = [
    { title: "Empresas", icon: Building2 },
    { title: "Municipios", icon: Users },
    { title: "Escuelas", icon: School },
    { title: "Clubes", icon: Tent },
    { title: "Eventos", icon: Users },
    { title: "Industria", icon: Factory }
  ];

  return (
    <main className="pt-24 pb-0 bg-blanco">
      <section className="bg-cian text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Formación y <span className="text-azul">Capacitación</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-900 font-medium"
          >
            Entrenamiento dinámico y adaptado a las necesidades de cada sector.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-azul">Metodología Teórico-Práctica</h2>
            <p className="text-gris leading-relaxed">
              La teoría no salva vidas sin la práctica adecuada. Nuestros cursos están diseñados con un enfoque 80% práctico, utilizando simuladores y escenarios realistas.
            </p>
            <ul className="space-y-3 pt-4">
              {["RCP y uso de DEA", "Formación de brigadas de incendio", "Primeros auxilios docentes", "Seguridad laboral técnica"].map((course, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-azul">
                  <GraduationCap className="w-5 h-5 text-cian" />
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            {audiences.map((aud, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100 hover:border-cian transition-colors">
                <aud.icon className="w-8 h-8 mx-auto mb-3 text-cian" />
                <h3 className="font-heading font-bold text-azul text-sm">{aud.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
