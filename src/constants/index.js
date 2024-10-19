import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    bootstrap,
    laravel,
    php,
    html,
    excel,
    python,
    css,
    reactjs,
    tailwind,
    qburst,
    git,
    figma,
    meta,
    spotifyRec,
    jobit,
    tripguide,
    threejs,
    powerBI,
    sparks,
    pyspark,
    spotify,
    adastria
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [

    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Full Stack Engineer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "UI Designer",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Power BI",
      icon: powerBI,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "css",
      icon: css,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "HTML 5",
      icon: html,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Engineer",
      company_name: "Qburst",
      icon: qburst,
      iconBg: "#383E56",
      date: "August 2021 - December 2022",
      points: [
        "Contributed to the development of full-stack solutions across multiple client projects, specializing in e-commerce platforms.",
        "Worked extensively with front-end technologies like React.js and Vue.js, alongside back-end frameworks such as Laravel and Python.",
        "Designed and developed scalable, high-performance applications, focusing on optimizing user experiences and streamlining business operations. Enhanced e-commerce solutions by integrating third-party APIs, managing databases, and implementing secure payment gateways.",
        "Collaborated with cross-functional teams in an Agile setting, utilizing Git for version control and CI/CD practices for efficient, reliable deployments.",
        
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "The Sparks Foundation",
      icon: sparks,
      iconBg: "#383E56",
      date: "Nov 2020 - Dec 2020",
      points: [
        "Developed dynamic web applications using modern web technologies including React, JavaScript, HTML, CSS, and Bootstrap.",
        "Collaborated in an Agile environment to design responsive, user-friendly interfaces, and optimized performance through React hooks, functional components, and state management (Redux).",
        " Integrated RESTful APIs for seamless data handling and implemented Git for version control and collaborative development.",
      ],
    },
  ];
  
  const educations = [
    {
      course:
        "Big Data Analytics",
      college: "Georgian College",
      city: "Barrie",
      grade: "Deans List",
      image: "https://equitek.ca/wp-content/uploads/2017/04/georgian-logo.jpg",
    },
    {
      course:
        "Business Analytics",
      college: "Seneca College",
      city: "Markham",
      grade: "Presidents Honor List",
      image: "https://mrbasile.com/wp-content/uploads/2017/02/seneca-college-logo.png",
    },
    {
      course:
        "Bachelor of Information Technology",
      college: "Cochin Univeristy of Science and Technology",
      city: "India",
      grade: "First Class Honour",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUlm2ox2FnmkywXUp_8V63Q4hK7164ZY-PDsDOaM&s",
    },
  ];
  
  const projects = [
    {
      name: "Adastria",
      description:
        "Leveraged front-end technologies like React.js to create dynamic, responsive user interfaces and used back-end frameworks such as Laravel and Python for building scalable, high-performance applications. Enhanced the platform by integrating third-party APIs, managing MySQL databases, and implementing secure payment gateways.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "jQuery",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: adastria,
      source_code_link: "",
    },
    {
      name: "MidhunInventory",
      description:
        "Built an Inventory Management System using the MERN stack, featuring real-time inventory tracking and CRUD operations. Integrated MongoDB Atlas for data storage, developed RESTful APIs with Express.js, and created a responsive front-end with React.js. Used Node.js for efficient backend operations.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "yellow-text-gradient",
        },
      ],
      image: javascript, 
      source_code_link: "https://mid-invent-app.onrender.com/dashboard",
    },
    {
      name: "Spotify Data Analysis",
      description:
        "Analysed a spotify dataset and created visualizations using matplotlib in Jupyter notebook",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "matplotlib",
          color: "green-text-gradient",
        }
      ],
      image: spotifyRec,
      source_code_link: "https://github.com/midhunpaul396/Spotify-Data-Analysis",
    },
    {
      name: "Spotify Recommendation",
      description:
        "Music Recommendation system using PySpark that recommends music to users based on their listening habits",
      tags: [
        {
          name: "pyspark",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ALSalgorithm",
          color: "pink-text-gradient",
        },
      ],
      image: spotifyRec,
      source_code_link: "https://github.com/midhunpaul396/spotify-recommendation-system",
    }
  ];
  
  export { services, technologies, experiences, educations, projects };