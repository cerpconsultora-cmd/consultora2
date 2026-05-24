"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-azul mb-4"
          >
            Contacto
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gris max-w-2xl mx-auto"
          >
            Estamos listos para asesorarte en seguridad, higiene y emergencias.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-azul rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-heading font-bold mb-8 text-cian">Información Directa</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cian" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">WhatsApp / Urgencias</h4>
                    <p className="text-lg font-medium">+54 9 343 5123456</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cian" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">Correo Electrónico</h4>
                    <p className="text-base font-medium">contacto@previtec.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cian" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">Base Operativa</h4>
                    <p className="text-base font-medium">Paraná, Entre Ríos<br/>Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-cian" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-sm">Horario de Atención</h4>
                    <p className="text-base font-medium">Lunes a Viernes<br/>08:00 a 18:00 hs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Reusing the existing ContactForm component, but we can wrap it or just use it directly */}
            <div className="-mt-24">
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
