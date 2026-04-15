import {
  FaUniversity,
  FaChartLine,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaLaptop
} from "react-icons/fa";

export const servicios = [
  {
    slug: "gestion-publica",
    title: "Gestión Pública",
    description:
      "Implementamos soluciones tecnológicas para mejorar la gestión en instituciones públicas.",
    icon: FaUniversity,

    // 🔥 NUEVO
    beneficios: [
      "Modernización administrativa",
      "Digitalización de procesos",
      "Automatización de trámites",
      "Mejora en la eficiencia institucional",
    ],

    proceso: [
      "Diagnóstico institucional",
      "Diseño de solución",
      "Implementación tecnológica",
      "Capacitación del personal",
    ],
  },

  {
    slug: "optimizacion-recursos",
    title: "Optimización de Recursos",
    description:
      "Ayudamos a optimizar procesos y recursos mediante herramientas digitales eficientes.",
    icon: FaChartLine,

    beneficios: [
      "Reducción de costos operativos",
      "Mejor uso de recursos humanos",
      "Automatización de tareas",
      "Análisis de datos en tiempo real",
    ],

    proceso: [
      "Evaluación de recursos",
      "Identificación de mejoras",
      "Implementación de herramientas",
      "Monitoreo continuo",
    ],
  },

  {
    slug: "transparencia",
    title: "Transparencia y Acceso a la Información",
    description:
      "Desarrollo de sistemas y portales para el cumplimiento de obligaciones de transparencia.",
    icon: FaShieldAlt,

    beneficios: [
      "Cumplimiento normativo",
      "Mayor confianza ciudadana",
      "Acceso a la información pública",
      "Portales institucionales modernos",
    ],

    proceso: [
      "Análisis normativo",
      "Diseño del portal",
      "Publicación de información",
      "Actualización continua",
    ],
  },

  {
    slug: "capacitacion",
    title: "Capacitación en Gestión Pública",
    description:
      "Formación en herramientas tecnológicas para servidores públicos.",
    icon: FaChalkboardTeacher,

    beneficios: [
      "Mejora de habilidades digitales",
      "Capacitación especializada",
      "Adaptación tecnológica",
      "Fortalecimiento institucional",
    ],

    proceso: [
      "Diagnóstico de capacidades",
      "Diseño de cursos",
      "Capacitación",
      "Evaluación de resultados",
    ],
  },
  {
  slug: "gobierno-digital",
  title: "Gobierno Digital",
  description: "Transformación digital del sector público.",
  icon: FaLaptop,

  beneficios: [
    "Digitalización completa",
    "Automatización",
    "Eficiencia operativa",
  ],

  proceso: [
    "Diagnóstico",
    "Implementación",
    "Seguimiento",
  ],
}
];