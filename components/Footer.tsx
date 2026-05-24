import Link from "next/link";
import { ShieldAlert, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c2e] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ShieldAlert className="w-8 h-8 text-cian" />
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                PREVITEC
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Prevención inteligente. Respuesta profesional. Especialistas en Seguridad, Higiene, Emergencias y Capacitación.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-cian transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-cian transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-cian transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/seguridad-higiene" className="hover:text-cian transition-colors">Seguridad e Higiene</Link></li>
              <li><Link href="/emergencias" className="hover:text-cian transition-colors">Emergencias</Link></li>
              <li><Link href="/capacitacion" className="hover:text-cian transition-colors">Capacitación</Link></li>
              <li><Link href="/gestion-preventiva" className="hover:text-cian transition-colors">Gestión Preventiva</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nosotros" className="hover:text-cian transition-colors">Nosotros</Link></li>
              <li><Link href="/galeria" className="hover:text-cian transition-colors">Galería</Link></li>
              <li><Link href="/contacto" className="hover:text-cian transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cian shrink-0" />
                <span>Paraná, Entre Ríos<br/>Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cian shrink-0" />
                <span>+54 9 343 5123456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cian shrink-0" />
                <span>contacto@previtec.com.ar</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PREVITEC Integral. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
