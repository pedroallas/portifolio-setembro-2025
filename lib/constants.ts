export const PROFESSIONAL_DATA = {
  name: "Pedro Allas",
  titles: [
    "Engenheiro de Software",
    "Especialista em Matemática",
    "Arquiteto de Soluções",
    "Tech Lead",
    "Full Stack Developer",
  ],
  experience: "20+ anos",
  location: "Brasil",
  email: "pedro.allas@email.com",
  phone: "+55 (11) 99999-9999",
  linkedin: "https://linkedin.com/in/pedroallas",
  github: "https://github.com/pedroallas",
} as const

export const SKILLS = {
  languages: [
    { name: "TypeScript", level: 95, years: 8 },
    { name: "Python", level: 90, years: 12 },
    { name: "Java", level: 85, years: 15 },
    { name: "C++", level: 80, years: 10 },
    { name: "Go", level: 75, years: 5 },
  ],
  frameworks: [
    { name: "React/Next.js", level: 95, years: 7 },
    { name: "Node.js", level: 90, years: 8 },
    { name: "Spring Boot", level: 85, years: 10 },
    { name: "Django", level: 80, years: 6 },
    { name: "Kubernetes", level: 85, years: 5 },
  ],
  databases: [
    { name: "PostgreSQL", level: 90, years: 12 },
    { name: "MongoDB", level: 85, years: 8 },
    { name: "Redis", level: 80, years: 6 },
    { name: "Elasticsearch", level: 75, years: 4 },
  ],
} as const

export const CERTIFICATIONS = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialId: "AWS-SAP-2023-001",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2022",
    credentialId: "GCP-PCA-2022-001",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2021",
    credentialId: "CKA-2021-001",
  },
] as const
