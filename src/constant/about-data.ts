export interface AboutTechnology {
  name: string;
  icon: string;
  width: number;
  height: number;
  backdrop?: {
    width: number;
    height: number;
  };
}

export const aboutIntro = {
  greeting: "Hi, I’m Afrizal Yakub 👋",
  description:
    "Building digital products with a focus on crafting visually engaging and seamless user interfaces using React.js. Prioritizing responsive design, performance optimization, and user-centric features to deliver exceptional web experiences.",
} as const;

export const whyChooseMeData = {
  title: "Why Choose Me",
  description:
    "Delivering excellence with innovative solutions and seamless execution.",
  skills: [
    "Adaptable Technology",
    "Responsive Design",
    "React Expert",
    "Team Experience",
    "Clean Code",
    "Performance Optimization",
    "User Experience",
    "Modern Design",
    "Reusable Code",
    "Web Accessibility",
    "Problem Solving",
    "Continuous Learning",
  ],
} as const;

export const expertSkillData = {
  title: "Expert Skill",
  description:
    "Mastering modern technologies to deliver impactful and efficient solutions.",
  rating: 5,

  technologies: [
    {
      name: "HTML",
      icon: "/icons/technologies/html.svg",
      width: 26.24,
      height: 30.81,
    },
    {
      name: "CSS",
      icon: "/icons/technologies/css.svg",
      width: 38.49,
      height: 38.49,
    },
    {
      name: "JavaScript",
      icon: "/icons/technologies/javascript.svg",
      width: 30.21,
      height: 30.21,
      backdrop: {
        width: 17.26,
        height: 23.3,
      },
    },
    {
      name: "TypeScript",
      icon: "/icons/technologies/typescript.svg",
      width: 35.53,
      height: 35.53,
    },
    {
      name: "React",
      icon: "/icons/technologies/react.svg",
      width: 36.25,
      height: 36.25,
    },
    {
      name: "Express.js",
      icon: "/icons/technologies/expressjs.svg",
      width: 31.07,
      height: 31.07,
      backdrop: {
        width: 23.3,
        height: 17.26,
      },
    },
    {
      name: "MongoDB",
      icon: "/icons/technologies/mongodb.svg",
      width: 32.93,
      height: 29.46,
    },
    {
      name: "SQL",
      icon: "/icons/technologies/sql.svg",
      width: 45.49,
      height: 26.24,
    },
    {
      name: "Sequelize",
      icon: "/icons/technologies/sequelize.svg",
      width: 32.06,
      height: 32.06,
    },
    {
      name: "Docker",
      icon: "/icons/technologies/docker.svg",
      width: 34.52,
      height: 34.52,
    },
  ] satisfies readonly AboutTechnology[],
} as const;

export const experienceData = {
  years: "5+ Years",
  title: "Experience",
  mainImage: "/images/about/experience-main.png",

  projects: [
    {
      name: "Web Application",
      image: "/images/about/experience-1.png",
    },
    {
      name: "Dashboard",
      image: "/images/about/experience-2.png",
    },
    {
      name: "Landing Page",
      image: "/images/about/experience-3.png",
    },
  ],
} as const;

export const profileData = {
  firstName: "AFRIZAL",
  lastName: "YAKUB",
  image: "/images/about/profile.png",
  imageAlt: "Afrizal Yakub",
  ctaLabel: "Hire Me",
  ctaHref: "#contact",
} as const;

export const digitalProductsData = {
  title: "Building Digital Products",

  desktopImage: "/images/about/digital-map.png",
  mapImage: "/images/about/round-pixel-world-map.png",

  countryMarkers: [
    {
      country: "germany",
      label: "Germany",
    },
    {
      country: "united-states",
      label: "United States",
    },
    {
      country: "indonesia",
      label: "Indonesia",
    },
  ],

  stats: [
    {
      value: "50+",
      label: "Global Clients Handled",
    },
    {
      value: "99%",
      label: "Client Satisfaction Rate",
    },
    {
      value: "100+",
      label: "Projects Delivered",
    },
  ],
} as const;