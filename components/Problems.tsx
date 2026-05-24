"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, ShieldX } from "lucide-react";

export default function Problems() {
  const issues = [
    {
      icon: AlertTriangle,
      title: "Riesgos Ocultos",
      desc: "El 70% de los incidentes laborales ocurren por riesgos no identificados a tiempo."
    },
    {
      icon: Clock,
      title: "Falta de Respuesta",
      desc: "Los primeros 5 minutos son vitales en una emergencia. Sin un protocolo, el tiempo juega en contra."
    },
    {
      icon: ShieldX,
      title: "Incumplimiento Legal",
      desc: "La falta de adecuación a las normativas vigentes expone a la organización a severas multas."
    },
    {
      icon: TrendingDown,
      title: "Pérdida de Productividad",
      desc: "Los accidentes y la falta de higiene ocupacional disminuyen drásticamente el rendimiento del equipo."
    }
  ];

  return (
    <section className="py-24 px-6 bg-blanco relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rojo/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amarillo/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-azul leading-tight mb-6">
              ¿Tu organización está <span className="text-rojo">realmente preparada</span>?
            </h2>
            <p className="text-lg text-gris mb-8 leading-relaxed">
              La prevención no es un gasto, es una inversión estratégica. Identificar las vulnerabilidades a tiempo es la diferencia entre operar con normalidad o enfrentar una crisis paralizante.
            </p>
            
            <div className="space-y-6">
              {issues.map((issue, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-rojo">
                    <issue.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-azul mb-1">{issue.title}</h4>
                    <p className="text-gris text-sm leading-relaxed">{issue.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-azul to-slate-800 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              
              <h3 className="text-2xl font-heading font-bold mb-6 relative z-10">
                El Costo de la Improvisación
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-bold text-amarillo mb-2">1.5x</div>
                  <p className="text-sm text-gray-300">
                    Aumento en la prima de seguros por alta siniestralidad.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-bold text-rojo mb-2">-40%</div>
                  <p className="text-sm text-gray-300">
                    Caída en la productividad post-incidente grave.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
