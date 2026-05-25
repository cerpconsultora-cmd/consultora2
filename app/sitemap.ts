import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://previtec.com.ar"; // Assuming this is or will be the final domain

  const staticPages = [
    "",
    "/nosotros",
    "/seguridad-higiene",
    "/emergencias",
    "/capacitacion",
    "/gestion-preventiva",
    "/contacto",
    "/seguridad-higiene/auditorias-sst",
    "/seguridad-higiene/evaluacion-de-riesgos",
    "/gestion-preventiva/planes-de-evacuacion",
    "/capacitacion/rcp-y-dea",
    "/emergencias/primeros-auxilios",
    "/emergencias/formacion-de-brigadas",
    "/emergencias/simulacros-de-evacuacion",
    "/soluciones/industrias",
    "/soluciones/empresas",
    "/soluciones/escuelas",
    "/soluciones/eventos-masivos",
    "/zonas/parana",
    "/zonas/santa-fe",
    "/zonas/corrientes",
    "/recursos",
    "/recursos/guia-planes-emergencia",
    "/recursos/checklist-auditoria-sst",
    "/recursos/importancia-simulacros"
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
