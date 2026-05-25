"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, School, Tent, Factory, Users } from "lucide-react";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

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
            <ul className="space-y-4 pt-4">
              {[
                { name: "Cursos de RCP y uso de DEA", desc: "Cumplimiento de Ley 27.159. Capacitación intensiva con simuladores." },
                { name: "Formación de Brigadas", desc: "Entrenamiento para el personal designado frente a contingencias en planta." },
                { name: "Primeros Auxilios Específicos", desc: "Adaptados para docentes, operarios de industria o personal de eventos." },
                { name: "Capacitaciones Obligatorias SRT", desc: "Cumplimiento del cronograma anual exigido por la Ley 19.587." }
              ].map((course, i) => (
                <li key={i} className="flex flex-col gap-1 border-b border-gray-100 pb-3 last:border-0">
                  <div className="flex items-center gap-3 font-bold text-azul">
                    <GraduationCap className="w-5 h-5 text-cian" />
                    {course.name}
                  </div>
                  <p className="text-sm text-gris pl-8">{course.desc}</p>
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

      <FAQ 
        title="Preguntas Frecuentes sobre Capacitación"
        items={[
          { question: "¿Los certificados que entregan tienen validez?", answer: "Sí, todos nuestros cursos cumplen con las exigencias legales nacionales (Ley 19.587) y entregamos certificados de asistencia y aprobación válidos para presentar ante ART y SRT." },
          { question: "¿Las capacitaciones son presenciales o virtuales?", answer: "Depende de la temática. Los cursos de RCP, Uso de DEA y Primeros Auxilios son 100% presenciales por su naturaleza práctica. Otras temáticas teóricas de Seguridad e Higiene pueden dictarse en modalidad In-Company o virtual." },
          { question: "¿Pueden adaptar un curso a mi industria específica?", answer: "Absolutamente. Diseñamos capacitaciones 'a medida' según los riesgos específicos de tu planta, escuela, club o institución." }
        ]} 
      />

      <CTA />
    </main>
  );
}
