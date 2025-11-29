import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Senior Developer @ Thoughtworks",
    location: "Manchester, UK",
    description:
        "Engineered a fully responsive Next.js + TypeScript application with secure OIDC/SSO authentication, AWS Lambda serverless infrastructure (OpenNext + Terraform), a complete Jest/Playwright testing suite, and automated CI/CD deployments via GitHub Actions.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Developer @ Thoughtworks",
    location: "Manchester, UK",
    description:
      "Led a major Angular-to-React modernization initiative while delivering secure, enterprise-grade CI/CD pipelines for .NET microservices (GitLab, Octopus, Helm/K8s/Azure), modernizing ETL pipelines and webhook systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Bachelors in CompSci & Engineering",
    location: "Kerala, India",
    description:
        "Successfully completed a four-year program establishing comprehensive foundational knowledge in computer science and engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
] as const;

// TODO: Update this
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Javascript",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "AWS Lambdas",
  "Apache Spark",
  "Octopus Deploy",
  "TeamCity",
  "GitLab CI",
  "Github Actions",
  "Trivy",
  "Checkmarx",
  "Cypress",
  "Jest",
  "Azure AKS",
  "Kubernetes",
  "Docker",
  "Helm",
] as const;
