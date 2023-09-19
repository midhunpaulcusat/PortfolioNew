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
    pinkerala,
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
      title: "Data Analyst",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Power BI",
      icon: powerBI,
    },
    {
      name: "Excel",
      icon: excel,
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
      name: "React JS",
      icon: reactjs,
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
      title: "Data Analyst",
      company_name: "Freelance",
      icon: powerBI,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed a Python-based web application that leverages MongoDB and Google Charts to analyze and visualize data from the Spotify music platform.",
        "Developed a Python-based web application that recommends new songs to spotify users based on their listening habits",
      ],
    },
    {
      title: "Laravel Developer",
      company_name: "Qburst",
      icon: qburst,
      iconBg: "#383E56",
      date: "August 2021 - December 2022",
      points: [
        "Developing and maintaining web applications for Japanese E-commerce firm Adastria by utilizing technologies like Laravel, Bootstrap, and associated tools.",
        "Working closely with cross-functional teams, including designers, product managers, and fellow developers, to produce top-notch products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Engaging in code reviews and offering valuable feedback to fellow developers.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "The Sparks Foundation",
      icon: sparks,
      iconBg: "#383E56",
      date: "Nov 2020 - Dec 2020",
      points: [
        "Developing web applications using HTML, CSS, and JavaScript",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "Pinkerala",
      icon: pinkerala,
      iconBg: "#E6DEDD",
      date: "Mar 2020 - Apr 2020",
      points: [
        "Designing logos and brochures using Adobe Illustrator",
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
        "Bachelor of Information Technology",
      college: "Cochin Univeristy of Science and Technology",
      city: "Kochi",
      grade: "First Class Honour",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUlm2ox2FnmkywXUp_8V63Q4hK7164ZY-PDsDOaM&s",
    },
  ];
  
  const projects = [
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
    },
    {
      name: "Adastria",
      description:
        "A Japanese E-commerce platform, made admin pages for the platform using Laravel, jQuery and boostrap",
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
      source_code_link: "https://github.com/",
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
  ];
  
  export { services, technologies, experiences, educations, projects };