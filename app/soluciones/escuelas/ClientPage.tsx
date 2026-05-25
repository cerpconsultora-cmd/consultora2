"use client";

import { motion } from "framer-motion";
import { School, ArrowRight, ShieldAlert } from "lucide-react";
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-azul mb-6">
              Planes de Evacuación para Escuelas
            </h1>
            <p className="text-lg text-gris leading-relaxed mb-6">
              Las instituciones educativas tienen la gran responsabilidad de cuidar a cientos de alumnos. Desarrollamos planimetría aprobada para habilitaciones municipales y entrenamos a docentes para responder ante cualquier eventualidad.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Planes de Evacuación aprobados por Defensa Civil.",
                "Organización anual de Simulacros Escolares obligatorios.",
                "Cursos de Primeros Auxilios específicos para docentes.",
                "Relevamiento de matafuegos, tableros eléctricos y salidas."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-azul font-medium">
                  <ArrowRight className="w-5 h-5 text-cian shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-cian text-azul font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-cian/20">
              Solicitar Plan para mi Colegio <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-gradient-to-br from-azul to-blue-900 rounded-3xl p-16 flex flex-col items-center justify-center border border-blue-800 shadow-2xl relative overflow-hidden">
               <School className="w-32 h-32 text-white/10 absolute -right-4 -bottom-4" />
               <h3 className="text-2xl font-bold text-white mb-4 relative z-10 text-center">¿Están preparados para evacuar?</h3>
               <p className="text-blue-100 text-center mb-6 relative z-10">Un simulacro bien ejecutado en una escuela enseña a los niños y docentes cómo salir del edificio sin entrar en pánico.</p>
               <Link href="/emergencias/simulacros-de-evacuacion" className="relative z-10 text-cian hover:text-white font-bold underline underline-offset-4 transition-colors">
                 Ver Simulacros de Evacuación
               </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
