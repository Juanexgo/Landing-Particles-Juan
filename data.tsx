import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "https://www.youtube.com/@juanjosecanulpasos8676",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/juanjosecanulpasos",
  },
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 5,
    logo: <Twitch size={30} strokeWidth={1} />,
    src: "#!",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "Freelancer",
    description:
      "Desarrollo en Frontend en proyectos y aplicaciones web de manera independiente y autonoma.",
    date: "Jun 2024 ",
  },
  {
    id: 2,
    title: "Desarrollo Frontend y Tecnico de soporte de TI.",
    subtitle: "Centro de Servicio Multimarcas",
    description:
      "Como desarrollador frontend en un desarrollo de sistemas de venta y como soporte tecnico.",
    date: "Oct 2023",
  },
  {
    id: 3,
    title: "Desarrollo Frontend y Tecnico de soporte de TI.",
    subtitle: "IMSS.",
    description:
      "Únete a nosotros mientras creamos sitios un sistema de citas y  servicio tecnico de computadoras e impresoras estando en el area de informatica.      ",
    date: "Oct 2022",
  },
  {
    id: 4,
    title: "Prácticas Grado",
    subtitle: "IMSS.",
    description:
      "Únete a nosotros mientras creamos sitios un sistema de citas y  servicio tecnico de computadoras e impresoras estando en el area de informatica.      ",
    date: "Sep 2022",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 3,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 3,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 2,
    text: "Premios ganadores",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Portafolio con interactividad",
    image: "/image-1.jpg.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Primer Portafolio",
    image: "/image-2.png",
    urlGithub: "https://github.com/Juanexgo/PrimerPortafolio",
    urlDemo: "https://freelancejuancanul.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce web de cafe",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile3.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile2.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile5.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile4.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
