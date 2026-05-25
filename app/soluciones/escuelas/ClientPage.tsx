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
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-azul mb-6">
              Prevención en Escuelas
            </h1>
            <p className="text-lg text-gris leading-relaxed mb-8">
              Cuidamos a quienes cuidan. Formamos al personal docente y no docente en primeros auxilios y diseñamos planes de evacuación seguros para colegios.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-cian text-azul font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors">
              Consultar ahora <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-gray-50 rounded-3xl p-16 flex items-center justify-center border border-gray-100">
               <School className="w-32 h-32 text-azul opacity-20" />
            </div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
