// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import djangologo from './assets/tech_logo/django.png';

// Education Section Logo's
import schoolpngpng from './assets/education_logo/school.png';
import ignou from "./assets/education_logo/images.png"
import tack from "./assets/education_logo/tack.jpg"


// Project Section Logo's
import wheatherImg from "./assets/work/wheather.png";
import calculatorImg from "./assets/work/calculater.png";
import todopng from "./assets/work/todo.png"
import ecommercepng from "./assets/work/ecommerce.png"


export const SkillsInfo = [
  {
    title: "[Frontend Languages]",
    skills: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "TailwindCSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
    ],
  },

  {
    title: "[Backend Languages]",
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      // {
      //   name: "MySQL",
      //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      // },
      // {
      //   name: "Django",
      //   logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"
      // },
      // {
      //   name: "Python",
      //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      // },
      {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: tack,
    school: "TechStack Acdemy",
    date: "August 2025 - July 2026",
    Course: "Graphic Designer And Full Stack Developer",
    desc: "Completed Graphic Design and Full Stack Development program, gaining hands-on experience in UI/UX design, frontend and backend technologies."
  },
  {
    id: 1,
    img: schoolpngpng,
    school: "A.T.S.B.V Chhatarpur New Delhi 110074",
    date: "2024 - 2025",
    grade: "Second Divison",
    desc: "Completed Senior Secondary (12th) with focus on core subjects and academic development.",
  },
  {
    id: 2,
    img: ignou,
    school: " Indira Gandhi National Open University (IGNOU) ",
    date: "2025 - Present",
    desc: " Focused on building knowledge in Accounting, Business Management, Finance, Economics, Commerce And extra learning Full Stack Developer"
  }
];

export const projects = [
  {
    id: 0,
    title: "TODO LIST",
    description: "A simple app to add, update, delete, and track daily tasks to stay organized and productive.",
    image: todopng,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/manjeetkumar778/Todo-list-",
    live: "https://manjeetkumar778.github.io/Todo-list-/"
  },
  {
    id: 1,
    title: "Calculator",
    description: "A responsive calculator that performs basic arithmetic operations.",
    image: calculatorImg,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/manjeetkumar778/CALCULATOR",
    live: "calculater-eta-sand.vercel.app"
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather application that shows real-time weather data using API.",
    image: wheatherImg,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/manjeetkumar778/Weather-App",
    live: "https://manjeetkumar778.github.io/Weather-App/"
  },
  {
    id: 4,
    title: "Full Stack E-commerce Website",
    description:
      "A full-stack MERN e-commerce platform with user authentication, product management, shopping cart, order processing, and responsive design.",
    image: ecommercepng,
    tags: ["FullStack", "MERN Stack", "E-commerce"],
    github: "https://github.com/manjeetkumar778/Full-Stack-E-commerce-Website",
    live: "https://full-stack-e-commerce-website-one.vercel.app/"
  }
]