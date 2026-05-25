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
    "/servicios/auditoria-sst",
    "/servicios/planes-de-evacuacion",
    "/capacitacion/curso-rcp",
    "/capacitacion/primeros-auxilios",
    "/sectores/industrias",
    "/sectores/empresas",
    "/sectores/escuelas",
    "/sectores/eventos-masivos",
    "/cobertura/parana",
    "/cobertura/santa-fe",
    "/cobertura/corrientes",
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
