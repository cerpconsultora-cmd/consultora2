"use client";

import { motion } from "framer-motion";
import { Stethoscope, ArrowRight, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function ClientPage() {
  return (
    <main className="pt-24 pb-0 bg-gray-50">
      {/* Hero Service */}
      <section className="bg-azul text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-cian/20 text-cian px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6"
            >
              SERVICIO ESPECIALIZADO
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Primeros Auxilios
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Preparación integral para brindar la primera respuesta ante heridas, fracturas, quemaduras y otras emergencias médicas antes de la llegada de la ambulancia.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="w-48 h-48 bg-cian/10 rounded-full flex items-center justify-center border border-cian/20 shadow-2xl shadow-cian/20">
               <Stethoscope className="w-24 h-24 text-cian" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
           <div>
             <h2 className="text-3xl font-heading font-bold text-azul mb-6">Saber actuar marca la diferencia</h2>
             <p className="text-gris leading-relaxed mb-6">
               Un accidente laboral o escolar requiere asistencia inmediata. Formar brigadas y personal clave en Primeros Auxilios no solo cumple con las exigencias de la ART, sino que asegura un manejo correcto del paciente hasta el arribo del servicio médico.
             </p>
             
             <div className="bg-blanco p-6 rounded-2xl border-l-4 border-cian mb-8 shadow-sm">
               <h4 className="font-bold text-azul mb-2">Caso de Éxito: Planta Industrial</h4>
               <p className="text-sm text-gris italic">
                 "Durante el turno noche, un operario sufrió una herida cortante profunda. Gracias a que el supervisor de turno había tomado nuestro Curso de Primeros Auxilios 15 días antes, logró aplicar un vendaje compresivo adecuado, evitando un shock hipovolémico antes de que llegara la ambulancia."
               </p>
             </div>

             <h3 className="text-xl font-heading font-bold text-azul mb-4">Temario destacado del curso</h3>
             <ul className="space-y-4 mb-8">
               {[
                 "Evaluación primaria y secundaria de la escena y la víctima.",
                 "Control de hemorragias, uso de vendajes y torniquetes avalados.",
                 "Manejo inicial de quemaduras químicas y térmicas.",
                 "Inmovilización básica de fracturas y traumatismos (uso de cuellos ortopédicos y tablas)."
               ].map((ben, i) => (
                 <li key={i} className="flex items-start gap-3 font-medium text-azul">
                   <CheckCircle2 className="w-6 h-6 text-cian shrink-0 mt-0.5" />
                   <span className="text-sm leading-relaxed">{ben}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-heading font-bold text-azul mb-4">Prepará a tu organización</h3>
              <p className="text-gris mb-8">Nuestros cursos incluyen material descartable para prácticas, vendajes reales y certificación de asistencia. Dictado en Paraná y todo el Litoral.</p>
              
              <Link href="/contacto" className="w-full inline-flex justify-center items-center gap-2 bg-azul text-white font-bold py-4 px-8 rounded-xl hover:bg-cian transition-colors group mb-4 shadow-lg shadow-blue-900/20">
                Coordinar Curso
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-xs text-center text-gray-400">Modalidad In Company o en nuestras aulas.</p>
           </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
