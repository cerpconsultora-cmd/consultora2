"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-azul overflow-hidden pt-20">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-cian blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-rojo blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-cian" />
              <span className="text-sm font-medium tracking-wider text-cian uppercase">PREVITEC Integral</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              Prevención inteligente.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cian to-blue-400">
                Respuesta profesional.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
            >
              Brindamos soluciones técnicas en prevención, seguridad laboral, capacitación y respuesta ante emergencias para empresas, instituciones y organizaciones.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link 
                href="/contacto"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-cian rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,168,204,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Asesoramiento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>
              
              <Link 
                href="/seguridad-higiene"
                className="inline-flex items-center justify-center px-8 py-4 font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                Ver Servicios
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Abstract 3D-like representation for Hero since we don't have images yet */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cian/20 to-transparent rounded-[2rem] border border-white/10 backdrop-blur-sm transform rotate-3 flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-8 w-full h-full opacity-80">
                 <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="bg-gradient-to-br from-cian to-blue-600 rounded-2xl h-48 mt-12 shadow-2xl" />
                 <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="bg-gradient-to-br from-amarillo to-orange-500 rounded-2xl h-64 shadow-2xl" />
                 <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="bg-gradient-to-br from-rojo to-rose-600 rounded-2xl h-56 shadow-2xl" />
                 <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }} className="bg-gradient-to-br from-gris to-gray-800 rounded-2xl h-40 shadow-2xl" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
