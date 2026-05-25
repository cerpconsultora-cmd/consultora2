"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const form = new FormData(e.currentTarget);
    
    try {
      await fetch("https://formspree.io/f/xnjrgnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          source: "Formulario de Contacto Principal",
          nombre: form.get("nombre"),
          telefono: form.get("telefono"),
          mensaje: form.get("mensaje"),
        })
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-azul mb-4">
            ¿Necesitás Asesoramiento?
          </h2>
          <p className="text-gris">
            Dejanos tus datos y un especialista de PREVITEC se pondrá en contacto a la brevedad.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-azul/5 border border-gray-100"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-azul mb-2">¡Consulta Enviada!</h3>
                <p className="text-gris">Nos comunicaremos con vos muy pronto.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-cian font-medium hover:underline"
                >
                  Enviar otra consulta
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={enviar} 
                className="grid gap-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-azul ml-1">Nombre Completo</label>
                    <input 
                      required
                      name="nombre" 
                      placeholder="Ej. Juan Pérez" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-cian focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-azul ml-1">WhatsApp / Teléfono</label>
                    <input 
                      required
                      name="telefono" 
                      placeholder="+54 9 ..." 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-cian focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-azul ml-1">¿En qué podemos ayudarte?</label>
                  <textarea 
                    name="mensaje"
                    rows={4}
                    placeholder="Contanos brevemente qué servicio te interesa..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-cian focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button 
                  disabled={status === "loading"}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-azul text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Consulta
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
