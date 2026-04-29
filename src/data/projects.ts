import project1 from "../assets/img/portfolio/project1.png";
import project2 from "../assets/img/portfolio/project2.png";
import cosmosFloreria from "../assets/img/portfolio/cosmos-solutiai.jpg";
import project3 from "../assets/img/portfolio/project3.png";
import project4 from "../assets/img/portfolio/project4.png";
import project5 from "../assets/img/portfolio/project5.png";
import project6 from "../assets/img/portfolio/project6.png";
import project7 from "../assets/img/portfolio/project7.png";
import arcorImg from "../assets/img/portfolio/arcor.jpg";
import nexusImg from "../assets/img/portfolio/nexus.jpg";
import marvelImg from "../assets/img/portfolio/marvel.jpg";
import glennImg from "../assets/img/portfolio/glenn.jpg";
import grados23Img from "../assets/img/portfolio/23grados.jpg";

export const projects = [
  {
    title: "BuscaYa App",
    category: "APLICACIÓN MÓVIL",
    image: project1,
    video: true,
    desc: "Directorio comercial hiper-local para Monterrey con sistema de cupones, notificaciones push y registro de comercios en tiempo real.",
    tags: ["React Native", "NestJS", "MongoDB"],
    appLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.willch24.buscayamobile",
      appStore: "https://apps.apple.com/mx/app/buscaya/id6759590236",
    },
  },
  {
    title: "Cosmos Florería Envíos",
    category: "SOPORTE AVANZADO WORDPRESS",
    image: cosmosFloreria,
    desc: "Optimización técnica de infraestructura, migración SEO y corrección de base de datos para garantizar estabilidad en picos de alta demanda.",
    tags: ["Wordpress", "SEO", "React", "PHP"],
    link: "https://cosmosfloreria.com/",
  },
  {
    title: "Arcor Medical",
    category: "E-COMMERCE",
    image: arcorImg,
    desc: "Catálogo digital de equipo especializado con integración de dashboard para monitoreo técnico y gestión de clientes B2B.",
    tags: ["Wordpress", "SEO", "Woocommerce", "PHP"],
    link: "https://arcormedical.com/",
  },
  {
    title: "Nexus Academy",
    category: "LANDING PAGE",
    image: nexusImg,
    desc: "Interfaz moderna para academia digital, diseñada para maximizar la tasa de registro mediante una jerarquía visual clara y llamados a la acción estratégicos.",
    tags: ["Figma", "Html", "Css"],
    link: "https://nexusacademyfx.com/",
  },
  {
    title: "Marvel Accesorios",
    category: "E-COMMERCE",
    image: marvelImg,
    desc: "Escaparate digital diseñado para destacar productos de tendencia, con enfoque en velocidad de carga y navegación intuitiva.",
    tags: ["Wordpress", "SEO", "Woocommerce"],
    link: "https://marvelaccesorios.com/",
  },
  {
    title: "Glenn Wesley",
    category: "LANDING PAGE",
    image: glennImg,
    desc: "Micrositio enfocado en captación de leads con diseño vanguardista, optimizado para una experiencia de usuario fluida en dispositivos móviles.",
    tags: ["Figma", "Wordpress", "Html", "Css"],
    link: "http://glennwesley.com/",
  },
  {
    title: "23 Grados",
    category: "E-COMMERCE",
    image: grados23Img,
    desc: "Plataforma de comercio electrónico optimizada para conversión, con pasarela de pagos integrada y gestión automatizada de inventarios.",
    tags: ["Wordpress", "SEO", "Woocommerce"],
    link: "https://veintitresgrados.com/",
  },
];
