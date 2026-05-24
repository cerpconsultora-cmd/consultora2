"use client";

import { motion } from "framer-motion";
import { Users, Target, Shield, Award, CheckCircle, MapPin } from "lucide-react";
import Image from "next/image";

export default function NosotrosPage() {
  const values = [
    { icon: Shield, title: "Prevención", desc: "Nos anticipamos a los riesgos antes de que se conviertan en incidentes." },
    { icon: Target, title: "Profesionalismo", desc: "Protocolos estrictos y personal altamente capacitado en cada intervención." },
    { icon: Users, title: "Compromiso", desc: "Trabajamos a la par de cada cliente, entendiendo sus necesidades específicas." },
    { icon: Award, title: "Excelencia", desc: "Buscamos la mejora continua en todos nuestros procesos y capacitaciones." }
  ];

  return (
    <main className="pt-24 pb-16">
      {/* Hero Nosotros */}
      <section className="bg-azul text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Nuestra <span className="text-cian">Historia</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            PREVITEC Integral nace como una consultora orientada a la prevención, seguridad laboral, higiene ocupacional, capacitación y respuesta ante emergencias.
          </motion.p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cian/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-3xl font-heading font-bold text-azul mb-4 relative z-10">Nuestra Misión</h2>
            <p className="text-gris leading-relaxed relative z-10">
              Integrar experiencia técnica, formación, gestión preventiva y asistencia para acompañar a empresas, municipios, instituciones educativas, clubes, industrias y eventos, garantizando entornos seguros y preparados ante cualquier contingencia.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-azul p-10 rounded-3xl shadow-xl shadow-azul/20 text-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-rojo/20 rounded-full blur-2xl transform translate-x-1/4 translate-y-1/4" />
            <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Nuestra Visión</h2>
            <p className="text-gray-300 leading-relaxed relative z-10">
              Consolidarnos como la consultora integral líder en la región Litoral y Argentina, superando el modelo tradicional y ofreciendo un enfoque holístico que abarca desde la higiene ocupacional hasta la respuesta activa y los simulacros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-azul mb-4">Nuestros Valores</h2>
            <div className="h-1 w-20 bg-cian mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 text-cian rounded-full flex items-center justify-center mx-auto mb-6">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-azul mb-3">{val.title}</h3>
                <p className="text-sm text-gris leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="bg-gradient-to-br from-cian to-blue-600 rounded-3xl p-12 aspect-square md:aspect-auto md:h-96 flex items-center justify-center relative overflow-hidden shadow-2xl">
               <MapPin className="w-32 h-32 text-white/20 absolute" />
               <div className="relative z-10 text-center">
                 <div className="text-5xl font-bold text-white mb-2">Entre Ríos</div>
                 <div className="text-blue-100 font-medium tracking-widest uppercase">Base Operativa</div>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-azul">Cobertura Geográfica</h2>
            <p className="text-gris leading-relaxed text-lg">
              Con base estratégica en Entre Ríos, PREVITEC tiene capacidad de despliegue rápido y cobertura en todo el Litoral argentino.
            </p>
            <ul className="space-y-4">
              {["Entre Ríos", "Santa Fe", "Corrientes"].map((loc, i) => (
                <li key={i} className="flex items-center gap-3 text-azul font-medium text-lg">
                  <CheckCircle className="w-6 h-6 text-cian" />
                  {loc}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Nuestro Equipo (EEAT) */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-azul mb-4">Liderazgo Profesional</h2>
            <div className="h-1 w-20 bg-cian mx-auto rounded-full mb-6" />
            <p className="text-gris max-w-2xl mx-auto">Contamos con profesionales matriculados y especialistas en gestión de riesgos, asegurando los más altos estándares técnicos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Lic. Nombre Apellido", role: "Director de Seguridad e Higiene", desc: "Especialista en ergonomía y auditorías SST con más de 15 años de experiencia en la industria." },
              { name: "Tec. Nombre Apellido", role: "Coordinador de Emergencias", desc: "Instructor certificado en RCP y DEA. Experto en formación de brigadas y simulacros." },
              { name: "Ing. Nombre Apellido", role: "Auditor Ambiental", desc: "Gestión de riesgos ambientales y adecuación legal para industrias y municipios." }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl text-center shadow-sm border border-gray-100"
              >
                <div className="w-24 h-24 bg-blue-50 text-cian rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-azul text-xl mb-1">{member.name}</h3>
                <p className="text-cian font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gris text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
