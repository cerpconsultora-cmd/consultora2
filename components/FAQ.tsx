"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items, title = "Preguntas Frecuentes" }: { items: FAQItem[], title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generar Schema Markup estático para SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      {/* Schema Markup Oculto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-heading font-bold text-azul mb-4">{title}</h2>
        <div className="h-1 w-16 bg-cian mx-auto rounded-full" />
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
            >
              <span className="font-heading font-bold text-azul pr-4">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-cian transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 pt-1 text-gris border-t border-gray-100">
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
