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
    vosyn,
    msOffice,
    access,
    msSway,
    maersk,
    sharePoint,
    integreon,
    dxc,
    reactjs,
    tailwind,
    qburst,
    git,
    sap,
    figma,
    meta,
    spotifyRec,
    jobit,
    tripguide,
    threejs,
    sql,
    powerBI,
    sparks,
    pyspark,
    spotify,
    adastria,
    tableau,
    maersk2
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
      title: "Procurement Specialist",
      icon: web, // Assuming 'web' could symbolize procurement systems or e-procurement tools
    },
    {
      title: "Supply Chain Analyst",
      icon: mobile, // 'mobile' could be used to represent on-the-go supply chain tracking or logistics apps
    },
    {
      title: "Presentation Specialist",
      icon: backend, // 'backend' might be used creatively to represent the backbone of presentation data handling
    },
    {
      title: "Project Coordinator",
      icon: creator, // 'creator' fits well with project creation and management
    },
  ];
  
  const technologies = [
    
    {
      name: "MS Excel",
      icon: excel,
    },
    {
      name: "MS Access",
      icon: access,
    },
    {
      name: "MS Sway",
      icon: msSway,
    },
    {
      name: "MS Office",
      icon: msOffice,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SAP",
      icon: sap,
    },
    {
      name: "SharePoint",
      icon: sharePoint,
    },
    {
      name: "Power BI",
      icon: powerBI,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "SQL",
      icon: sql,
    }
  ];
  
  
  const experiences = [
    {
      title: "Buyer",
      company_name: "Maersk",
      icon: maersk2,
      iconBg: "#383E56",
      date: "2023 - 2023",
      points: [
        "Collaborated with business units to define key performance indicators (KPIs) and metrics for effective procurement management.",
        "Managed procurement transactions and generated purchase orders in accordance with company policies.",
        "Monitored supplier performance and resolved issues related to delivery, quality, and pricing discrepancies.",
        "Identified opportunities for cost savings and process improvements, enhancing the efficiency of the Procure-to-Pay process.",
      ],
    },
    {
      title: "Senior Associate – Partner Insights",
      company_name: "Maersk",
      icon: maersk2,
      iconBg: "#383E56",
      date: "2021 - 2023",
      points: [
        "Conducted quality assurance and controlled in preparing presentations following the branding style guidelines.",
        "Created data visualizations and dashboards to communicate insights effectively to stakeholders.",
        "Conducted market research and created detailed country profiles adhering to brand guidelines.",
      ],
    },
    {
      title: "Presentation Specialist",
      company_name: "Integreon Managed Solutions",
      icon: integreon,
      iconBg: "#383E56",
      date: "2019 - 2021",
      points: [
        "Developed high-quality presentation templates from scratch to enhance client communications.",
        "Maintained a self-quality control checklist to ensure error-free outputs and independently delivered projects with minimal supervision.",
        "Formatted raw presentations to align with standard client templates, improving presentation quality and consistency.",
      ],
    },
    {
      title: "Project Coordinator",
      company_name: "DXC Technology",
      icon: dxc,
      iconBg: "#383E56",
      date: "2018 - 2019",
      points: [
        "Coordinated with external vendors, subcontractors, and partners to support project requirements.",
        "Maintained project documentation and files, ensuring version control and accessibility for stakeholders.",
        "Communicated project status updates, milestones, and risks to stakeholders, escalating issues as needed.",
      ],
    }    
  ];
  
  
  const educations = [
    {
      course: "Analytics for Business Decision Making",
      college: "George Brown College",
      city: "Toronto",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/69/George_Brown_College_logo.svg", // This image link doesn't match George Brown College, it's just a placeholder
    },
    {
      course: "Supply Chain Management",
      college: "Humber College",
      city: "Toronto",
      image: "https://logosandtypes.com/wp-content/uploads/2020/07/humber.svg",
    },
    {
      course: "Master of Commerce - Accountancy",
      college: "University of Mumbai",
      city: "Mumbai",
      image: "https://webweb.ams3.cdn.digitaloceanspaces.com/data/anna-leela-college.webweb.ai.in/1705571275_a350133f83201298ed4f.png",
    },
    {
      course: "Bachelor of Management Studies - Finance",
      college: "University of Mumbai",
      city: "Mumbai",
      image: "https://webweb.ams3.cdn.digitaloceanspaces.com/data/anna-leela-college.webweb.ai.in/1705571275_a350133f83201298ed4f.png",
    },
  ];
  
  
  const projects = [
    {
      name: "Procure-to-Pay Optimization for Maersk",
      description:
        "Led the automation of the procure-to-pay process at Maersk, focusing on integrating ERP systems and implementing automated approval workflows to streamline procurement, invoicing, and payment workflows.",
      tags: [
        {
          name: "SAP",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
      ],
      image: maersk,
      source_code_link: "", // Assuming no source code link is available for this corporate project
    },
    {
      name: "Warehouse Layout Optimization for Viasox",
      description:
        "Collaborated on a capstone project to redesign the warehouse layout for Viasox, optimizing space utilization and improving inventory management to support the company’s expanding product line.",
      tags: [
        {
          name: "Tableau",
          color: "pink-text-gradient",
        },
        {
          name: "MS Office",
          color: "yellow-text-gradient",
        },
      ],
      image: tableau, // Placeholder, ensure the image aligns with the project theme
      source_code_link: "", // Assuming no source code link for this type of project
    },
    {
      name: "Inventory Management & Loss Prevention at The Home Depot",
      description:
        "Part of the inventory team at The Home Depot, focused on conducting cycle counts, analyzing shrink and swell, and enhancing inventory control to minimize losses and improve financial performance.",
      tags: [
        {
          name: "SharePoint",
          color: "blue-text-gradient",
        },
        {
          name: "SAP",
          color: "green-text-gradient",
        },
      ],
      image: sharePoint, // Placeholder, adjust as per the actual usage
      source_code_link: "", // Assuming this is not applicable
    },
  ];  
  
  export { services, technologies, experiences, educations, projects };