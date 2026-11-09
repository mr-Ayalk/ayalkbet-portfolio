export const profile = {
  name: "Ayalkbet Teketel",
  role: "Software engineer",
  email: "ayalkteketel7@gmail.com",
  phoneDisplay: "+251 926 184 233",
  phoneHref: "+251926184233",
  github: "https://github.com/mr-Ayalk",
  linkedin: "https://linkedin.com/in/ayalk/",
  cv: "/Ayalkbet-Teketel-CV.pdf",
  location: "Addis Ababa, Ethiopia",
};

export const filters = [
  { id: "all", label: "All work" },
  { id: "saas", label: "SaaS" },
  { id: "ai", label: "AI" },
  { id: "commerce", label: "Commerce" },
  { id: "iot", label: "IoT & hardware" },
  { id: "education", label: "Education" },
  { id: "client", label: "Client products" },
];

export const groups = [
  {
    id: "flagship",
    title: "Flagship",
    text: "The four I would open first: an AI product I co-founded, two operational platforms, and an assistive system that joins hardware, machine learning, and a mobile app.",
  },
  {
    id: "operations",
    title: "Operations platforms",
    text: "SaaS for institutions. Inventory, learning, projects, school administration, and deliveries each have a system built to be used, not demonstrated once.",
  },
  {
    id: "commerce",
    title: "Commerce",
    text: "Ecommerce platforms: one general trading product, plus two built for specialist retailers.",
  },
  {
    id: "connected",
    title: "Connected systems",
    text: "Computer engineering applied. One system controls a home. The other measures electrical energy and turns the samples into power, watt-hours, and cost.",
  },
  {
    id: "more",
    title: "Study, games, and client work",
    text: "An AI study app, a desktop game with the portal that manages its vouchers, and a client landing page.",
  },
];

export const projects = [
  {
    id: "negarit",
    group: "flagship",
    title: "Negarit AI",
    kicker: "AI product · Travel",
    kind: "In development",
    summary:
      "An AI tour guide for Ethiopian places. Visitors get conversational guidance, including Amharic, so the story of a place is easier to reach.",
    role: "Co-founder and AI engineer",
    tags: ["LLM integration", "Mobile", "Product architecture"],
    filters: ["ai"],
    layout: "rows",
    diagramLabel: "Negarit",
    nodes: [
      { title: "Place", detail: "Heritage sites and destinations" },
      { title: "Guide", detail: "Conversation, including Amharic" },
    ],
  },
  {
    id: "etta",
    group: "flagship",
    title: "Etta",
    kicker: "SaaS · NGO operations",
    kind: "SaaS",
    summary:
      "A project-management platform for NGO teams. Project tracking, team coordination, and operational visibility live in one product, including workflows that keep working when connectivity drops.",
    role: "End-to-end product build",
    tags: ["Full-stack", "Workflow design", "Offline-aware"],
    filters: ["saas"],
    layout: "tiles",
    diagramLabel: "Etta",
    nodes: [
      { title: "Projects", detail: "Status and delivery" },
      { title: "Teams", detail: "Who is doing the work" },
      { title: "Field", detail: "Offline-aware use" },
    ],
  },
  {
    id: "healthcare",
    group: "flagship",
    title: "Healthcare Management",
    kicker: "SaaS · Clinics",
    kind: "SaaS",
    summary:
      "A role-based platform for clinics. Patients, doctors, and administrators each have a path through appointments, care records, billing, and payments.",
    role: "End-to-end product build",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    filters: ["saas"],
    layout: "tiles",
    diagramLabel: "Care",
    nodes: [
      { title: "Patient", detail: "Visits and records" },
      { title: "Clinician", detail: "The day’s appointments" },
      { title: "Admin", detail: "Billing and payments" },
    ],
  },
  {
    id: "birhan",
    group: "flagship",
    title: "BIRHAN",
    kicker: "Assistive technology",
    kind: "Assistive system",
    summary:
      "Smart glasses for blind and low-vision people. Sensing hardware, machine learning, and a companion mobile app work together so guidance is available outside the screen.",
    role: "Hardware, AI, and mobile",
    tags: ["IoT", "AI / ML", "Mobile"],
    filters: ["ai", "iot"],
    layout: "tiles",
    diagramLabel: "BIRHAN",
    nodes: [
      { title: "Sensing", detail: "The glasses in the world" },
      { title: "Model", detail: "Machine learning on the signal" },
      { title: "Mobile", detail: "Companion app" },
    ],
  },
  {
    id: "blood",
    group: "operations",
    title: "Blood Bank Management",
    kicker: "SaaS · Health operations",
    kind: "SaaS",
    summary:
      "A system for blood-bank operations. Staff work with stock, donor records, and requests through a Next.js interface and a FastAPI service.",
    role: "End-to-end product build",
    tags: ["FastAPI", "Next.js", "REST API"],
    filters: ["saas"],
    layout: "tiles",
    diagramLabel: "Blood bank",
    nodes: [
      { title: "Stock", detail: "What is on hand" },
      { title: "Donors", detail: "Who can give" },
      { title: "Requests", detail: "What a hospital needs" },
    ],
  },
  {
    id: "pm",
    group: "operations",
    title: "Project Management System",
    kicker: "SaaS · Institutions",
    kind: "SaaS",
    summary:
      "A project-management tool for any institution that needs a system it can keep. Planning, tracking, and delivery sit on a Spring Boot backend.",
    role: "End-to-end product build",
    tags: ["Spring Boot", "Java", "SaaS"],
    filters: ["saas"],
    layout: "tiles",
    diagramLabel: "Delivery",
    nodes: [
      { title: "Plan", detail: "The work ahead" },
      { title: "Track", detail: "Where it stands" },
      { title: "Deliver", detail: "What shipped" },
    ],
  },
  {
    id: "school",
    group: "operations",
    title: "School Management",
    kicker: "SaaS · Schools",
    kind: "SaaS",
    summary:
      "An institutional system for running a school. Student and staff records, academic organization, and daily administration share one product.",
    role: "End-to-end product build",
    tags: ["SaaS", "Full-stack", "Education"],
    filters: ["saas", "education"],
    layout: "tiles",
    diagramLabel: "School",
    nodes: [
      { title: "Students", detail: "Records in one place" },
      { title: "Academics", detail: "Classes and progress" },
      { title: "Staff", detail: "Daily administration" },
    ],
  },
  {
    id: "lms",
    group: "operations",
    title: "Learning Management",
    kicker: "SaaS · EdTech",
    kind: "SaaS",
    summary:
      "A learning platform for publishing courses, organizing learners, and following progress. Built for an institution or a training team to run.",
    role: "End-to-end product build",
    tags: ["SaaS", "Full-stack", "EdTech"],
    filters: ["saas", "education"],
    layout: "tiles",
    diagramLabel: "Learning",
    nodes: [
      { title: "Courses", detail: "What is taught" },
      { title: "Learners", detail: "Who is enrolled" },
      { title: "Progress", detail: "How far they are" },
    ],
  },
  {
    id: "logistics",
    group: "operations",
    title: "Logistics & Delivery",
    kicker: "SaaS · Operations",
    kind: "SaaS",
    summary:
      "An operations app for material delivery. Teams assign work, follow status, and coordinate drop-offs in one system.",
    role: "End-to-end product build",
    tags: ["SaaS", "Full-stack", "Operations"],
    filters: ["saas"],
    layout: "route",
    diagramLabel: "A delivery",
    nodes: [
      { title: "Hub", detail: "Assigned" },
      { title: "Transit", detail: "On the way" },
      { title: "Drop", detail: "Received" },
    ],
  },
  {
    id: "wedegebeya",
    group: "commerce",
    title: "Wedegebeya",
    kicker: "Ecommerce platform",
    kind: "Commerce",
    summary:
      "An ecommerce platform for selling online. Merchants get a catalog, a storefront, and an order flow they can run as a business.",
    role: "End-to-end product build",
    tags: ["Ecommerce", "Full-stack", "SaaS"],
    filters: ["saas", "commerce"],
    layout: "tiles",
    diagramLabel: "Wedegebeya",
    nodes: [
      { title: "Catalog", detail: "What is for sale" },
      { title: "Storefront", detail: "How it is presented" },
      { title: "Orders", detail: "What was bought" },
    ],
  },
  {
    id: "boutique",
    group: "commerce",
    title: "Boutique Commerce",
    kicker: "Ecommerce · Clothing",
    kind: "Commerce",
    summary:
      "An ecommerce platform for clothing boutiques. The catalog, the presentation, and the selling flow are shaped for a fashion retailer.",
    role: "End-to-end product build",
    tags: ["Ecommerce", "Full-stack", "Retail"],
    filters: ["saas", "commerce"],
    layout: "tiles",
    diagramLabel: "Boutique",
    nodes: [
      { title: "Pieces", detail: "The collection" },
      { title: "Presentation", detail: "How a piece is shown" },
      { title: "Orders", detail: "How it sells" },
    ],
  },
  {
    id: "perfume",
    group: "commerce",
    title: "Perfume Commerce",
    kicker: "Ecommerce · Fragrance",
    kind: "Commerce",
    summary:
      "An ecommerce platform for a perfume brand. Product storytelling, the catalog, and online selling sit in one store.",
    role: "End-to-end product build",
    tags: ["Ecommerce", "Full-stack", "Retail"],
    filters: ["saas", "commerce"],
    layout: "tiles",
    diagramLabel: "Fragrance",
    nodes: [
      { title: "Story", detail: "The scent, explained" },
      { title: "Catalog", detail: "The line" },
      { title: "Orders", detail: "The sale" },
    ],
  },
  {
    id: "smarthome",
    group: "connected",
    title: "Smart Home Automation",
    kicker: "IoT · AAU Innovation Center",
    kind: "Connected system",
    summary:
      "A home system for remote appliance control and energy optimization. Arduino hardware is paired with a Java application, backend services, and real-time communication.",
    role: "Full-stack developer, AAU Innovation Center",
    tags: ["Arduino", "Java", "IoT", "APIs"],
    filters: ["iot"],
    layout: "rows",
    diagramLabel: "Smart home",
    nodes: [
      { title: "Hardware", detail: "Arduino at the appliance" },
      { title: "Software", detail: "Java app, APIs, live status" },
    ],
  },
  {
    id: "meter",
    group: "connected",
    title: "Arduino Energy Meter",
    kicker: "Embedded · Measurement",
    kind: "Laboratory prototype",
    summary:
      "A low-voltage laboratory meter. The Arduino samples voltage and current. Software computes instantaneous power, accumulated energy in Wh and kWh, and cost from a tariff.",
    role: "Embedded systems build",
    tags: ["Arduino", "Embedded", "Measurement"],
    filters: ["iot"],
    layout: "equation",
    diagramLabel: "Energy",
    diagramNote: "Sampled on the device. Power, energy, and cost are computed in software.",
    nodes: [
      { title: "Voltage" },
      { title: "Current" },
      { title: "Power, Wh, cost" },
    ],
  },
  {
    id: "bible",
    group: "more",
    title: "Bible Study",
    kicker: "AI · Study",
    kind: "AI product",
    summary:
      "A Bible study app with AI beside the text. An individual or a group can read and study with guidance in the same product.",
    role: "End-to-end product build",
    tags: ["AI integration", "Study product"],
    filters: ["ai", "education"],
    layout: "rows",
    diagramLabel: "Study",
    nodes: [
      { title: "Text", detail: "Scripture, ready to read" },
      { title: "Guide", detail: "AI help beside the study" },
    ],
  },
  {
    id: "bingo",
    group: "more",
    title: "Bingo & Voucher Portal",
    kicker: "Desktop game · Operations",
    kind: "Product",
    summary:
      "A desktop bingo game and the portal that runs it. Play lives in the game. Issuing and managing vouchers lives in the admin system.",
    role: "End-to-end product build",
    tags: ["Desktop app", "Admin portal", "Game"],
    filters: ["client"],
    layout: "tiles",
    diagramLabel: "Bingo",
    nodes: [
      { title: "Game", detail: "Desktop play" },
      { title: "Vouchers", detail: "Issue and manage" },
    ],
  },
  {
    id: "eyoha",
    group: "more",
    title: "Eyoha Digitals",
    kicker: "Client site",
    kind: "Client site",
    summary:
      "A landing page for Eyoha Digitals. It introduces the studio, states the offer, and gives a visitor a clear way to start a conversation.",
    role: "Frontend build",
    tags: ["Landing page", "Frontend"],
    filters: ["client"],
    layout: "tiles",
    diagramLabel: "Eyoha Digitals",
    nodes: [
      { title: "Studio", detail: "Who they are" },
      { title: "Offer", detail: "What they do" },
      { title: "Contact", detail: "How to begin" },
    ],
  },
];

export const experience = [
  {
    role: "Co-Founder & AI Engineer",
    org: "Negarit AI",
    meta: "Remote",
    dates: "2026 — Present",
    summary:
      "Co-founded an AI-integrated Amharic tour guide and lead the technical work: LLM-powered conversation and the product architecture around it.",
  },
  {
    role: "Software Engineer Lead",
    org: "Phevion Digital Solutions",
    meta: "Contract · Remote",
    dates: "Apr 2026 — Jul 2026",
    summary:
      "Led a software engineering team delivering full-stack client solutions, and set direction on architecture, code quality, and delivery timelines.",
  },
  {
    role: "Full Stack Developer",
    org: "Warka-Link BPO",
    meta: "Contract · Remote",
    dates: "Jan 2026 — Jun 2026",
    summary:
      "Built scalable web platforms and secure APIs, and worked on reliability and performance.",
  },
  {
    role: "Full Stack Developer",
    org: "Bel-tech Solutions",
    meta: "Contract · Remote",
    dates: "Oct 2025 — Mar 2026",
    summary:
      "Designed and developed full-stack applications for business clients, and improved the performance of backend services.",
  },
  {
    role: "Software Architecture & Design",
    org: "Mahber Startup",
    meta: "Addis Ababa",
    dates: "Sep 2025 — Feb 2026",
    summary:
      "Designed modular system architectures and led technical decisions aimed at maintainability and performance.",
  },
  {
    role: "Full Stack Developer",
    org: "Smart Home Automation Team, AAU Innovation Center",
    meta: "Addis Ababa",
    dates: "Sep 2024 — Feb 2025",
    summary:
      "Built smart-home software for remote device control and energy optimization, including backend APIs and real-time communication.",
  },
  {
    role: "Freelance Full Stack Developer",
    org: "Remote and local clients",
    meta: "Addis Ababa & remote",
    dates: "Sep 2021 — Aug 2025",
    summary:
      "Delivered 25+ responsive web applications and a large share of the platforms on this page, for institutions, startups, and individuals.",
  },
];

export const education = [
  {
    type: "Undergraduate · current",
    title: "BSc Electrical & Computer Engineering",
    place: "Addis Ababa University",
    detail: "Jan 2022 — Feb 2027 · Computer Engineering major · 5th year",
  },
  {
    type: "Undergraduate · current",
    title: "BSc Computer Science",
    place: "University of the People",
    detail: "Sep 2024 — Jan 2028",
  },
  {
    type: "Professional training",
    title: "Full Stack Web Development",
    place: "Evangadi Tech Bootcamp",
    detail: "2023",
  },
];

export const skillGroups = [
  {
    index: "01",
    title: "Software development",
    items: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "Spring Boot",
      "FastAPI",
      "React Native",
      "Tailwind CSS",
      "Flutter · basic",
    ],
  },
  {
    index: "02",
    title: "Data and delivery",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma ORM",
      "Docker",
      "Git",
      "GitHub Actions",
      "Postman",
      "CI/CD",
      "Production deployment",
    ],
  },
  {
    index: "03",
    title: "AI",
    items: [
      "LLM integration",
      "AI-powered applications",
      "Prompt engineering",
      "AI automation",
      "Machine learning",
    ],
  },
  {
    index: "04",
    title: "Computer engineering",
    items: [
      "Embedded systems",
      "IoT",
      "Hardware design",
      "Digital systems",
      "Microcontrollers",
      "Electrical systems",
      "Real-time communication",
    ],
  },
];

export const capabilities = [
  {
    index: "01",
    title: "Product engineering",
    text: "Turn a real operational need into software a team can keep using.",
  },
  {
    index: "02",
    title: "AI inside the product",
    text: "Put language models and machine learning where they help a person finish a task.",
  },
  {
    index: "03",
    title: "Software and hardware",
    text: "Connect an interface and an API to a controller, a sensor, or a device.",
  },
  {
    index: "04",
    title: "Delivery",
    text: "Carry the work through architecture, implementation, and deployment.",
  },
];
