"use client";

import { motion } from "framer-motion";
import { Activity, HeartPulse, Siren, Stethoscope, Users, Building } from "lucide-react";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function EmergenciasPage() {
  const services = [
    { title: "RCP y uso de DEA", icon: HeartPulse, desc: "Cursos prácticos intensivos sobre maniobras de Reanimación Cardiopulmonar y uso seguro de desfibriladores automáticos." },
    { title: "Primeros Auxilios", icon: Stethoscope, desc: "Capacitación en primera respuesta médica, control de hemorragias y tratamiento inicial de lesiones traumáticas en el lugar." },
    { title: "Atención Prehospitalaria (APH)", icon: Activity, desc: "Formación avanzada para responder y estabilizar pacientes críticos antes de la llegada de la ambulancia o servicios médicos." },
    { title: "Formación de Brigadas", icon: Users, desc: "Entrenamiento a medida para empleados designados como primeros intervinientes frente a incendios o incidentes en planta." },
    { title: "Simulacros de Evacuación", icon: Siren, desc: "Planificación, coordinación y ejecución de simulacros con evaluación técnica de tiempos y rutas de escape." },
    { title: "Cobertura Preventiva", icon: Building, desc: "Presencia de profesionales y equipo de trauma listos para actuar en eventos masivos, obras de alto riesgo o paradas de planta." }
  ];

  return (
    <main className="pt-24 pb-0 bg-blanco">
      <section className="bg-rojo text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Respuesta ante <span className="text-amarillo">Emergencias</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90"
          >
            Preparación, protocolos y acción inmediata para salvar vidas y proteger activos críticos.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-azul mb-6"
          >
            La emergencia no avisa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gris leading-relaxed"
          >
            Contar con personal entrenado y equipamiento adecuado es el único factor que cambia el resultado de una emergencia. Formamos equipos de primera respuesta en empresas, escuelas y eventos públicos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-red-50 hover:border-red-200 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-rojo mb-6 group-hover:bg-rojo group-hover:text-white transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-azul mb-3">{item.title}</h3>
              <p className="text-gris text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQ 
        title="Preguntas Frecuentes sobre Emergencias"
        items={[
          { question: "¿Qué diferencia hay entre una emergencia médica y una urgencia?", answer: "Una emergencia es una situación crítica de peligro evidente para la vida del paciente que requiere una actuación inmediata (ej: paro cardíaco). Una urgencia no amenaza la vida de forma inminente, pero requiere asistencia pronta." },
          { question: "¿Cuándo es necesario organizar un simulacro de evacuación?", answer: "La legislación suele requerir al menos un simulacro anual, pero recomendamos hacerlo semestralmente en lugares de alto tránsito (escuelas, grandes empresas) para fijar el conocimiento práctico." },
          { question: "¿Qué equipos proporcionan para coberturas de eventos?", answer: "Proveemos personal técnico capacitado, equipos de trauma, DEAs (Desfibriladores Externos Automáticos) y estructuramos las vías de evacuación médica coordinadas con los servicios de ambulancia." }
        ]} 
      />

      <CTA />
    </main>
  );
}
