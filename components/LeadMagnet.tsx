"use client";

import { FileText, Download } from "lucide-react";
import { useState } from "react";

export default function LeadMagnet({ title, description, pdfName }: { title: string, description: string, pdfName: string }) {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setDownloaded(true);
      // Here you would normally send the email to a CRM/API
    }
  };

  return (
    <div className="bg-gradient-to-br from-azul to-[#0f2a4a] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden my-16">
      {/* Background Graphic */}
      <div className="absolute -right-20 -top-20 opacity-10">
        <FileText className="w-96 h-96" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-cian/20 text-cian px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6">
          <Download className="w-4 h-4" /> RECURSO GRATUITO
        </div>
        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          {title}
        </h3>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          {description}
        </p>

        {!downloaded ? (
          <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Tu correo electrónico profesional"
              className="flex-1 px-6 py-4 rounded-xl text-azul outline-none focus:ring-2 focus:ring-cian transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-cian text-azul font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Descargar PDF
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 text-green-400 border border-green-500/30 p-6 rounded-xl flex items-center gap-4">
            <Download className="w-8 h-8" />
            <div>
              <p className="font-bold text-lg">¡Gracias por descargar!</p>
              <p className="text-sm">Revisa tu bandeja de entrada o haz clic aquí para <a href="#" className="underline">descargar {pdfName}</a> directamente.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
