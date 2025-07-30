import React from "react";

export const FRONTEND = "FE";
export const BACKEND = "BE";
export const MANAGEMENT = "MGMT";
export const DEVOPS = "OPS";

export default [
  {
    title: "JS/TS",
    children: [
      "Expert JavaScript and TypeScript developer",
      "Extremely proficient in implementing ES6 patterns",
      "Confident in diagnosing issues within NodeJS runtime",
      "Knowledgable on NodeJS core libraries such as streams and http",
    ],
    tags: [FRONTEND, BACKEND],
  },
  {
    title: "APIs",
    children: [
      "Passionate about building discoverable and well designed interfaces",
      "Deep knowledge of building middleware and API gateways",
      "Experienced creating both REST and GraphQL apis and discussing tradeoffs with each",
    ],
    tags: [BACKEND, DEVOPS, MANAGEMENT],
  },
  {
    title: "AWS",
    children: [
      "Multiple years working with AWS building with AWS CDK, Cloudformation and Serverless Framework",
      "Confident in managing AWS resources and security",
      "Passionate about building event driven serverless software leveraging SNS, SQS and Lambda ",
    ],
    tags: [DEVOPS, BACKEND],
  },
  {
    title: "Testing",
    children: [
      "Testing evangelist with broad experience across many areas of automated testing strategies",
      "Experienced in extending Jest for increasing capability within teams",
      `Built a testing library to implement an ease of use library for junior engineers at Tray.io`,
    ],
    tags: [FRONTEND, BACKEND],
  },
  {
    title: "Serverless",
    children: [
      "Passionate about serverless technology and experienced using Serverless Framework and AWS CDK",
      "Experienced in leading microservice development based on lambda",
      "Knowledgable on managing serverless applications and common design patterns of this style",
    ],
    tags: [DEVOPS, BACKEND],
  },
  {
    title: "JVM",
    children: [
      "Led delivery of a Java based printing service for Tesco Tills",
      "Confident in using OOP design patterns",
      "Completed course in FP fundamentals in Scala",
    ],
    tags: [BACKEND],
  },
  {
    title: "React",
    children: [
      "Experienced in building React applications",
      "Confident using NextJS to provision React apps",
      "Familiar with Atomic design and best practices for building components",
    ],
    tags: [FRONTEND],
  },
  {
    title: "SQL",
    children: [
      "Experienced working with Postgresql",
      "Implemented MySQL and Postgresql integrations at Tray.io",
      "Contributed to the mysql open source node library",
    ],
    tags: [BACKEND],
  },
  {
    title: "NoSQL",
    children: [
      "Passionate about single table design using DynamoDB",
      "Experienced in implementing data layers for NoSQL applications",
      "Experienced in using MongoDB",
    ],
    tags: [BACKEND],
  },
  {
    title: "HTML/CSS",
    children: [
      "Great knowledge of CSS fundamentals and layouts",
      "Completed JS in CSS course by Josh Comeaux",
      "Passionate about accessibility and utilising semantic elements",
    ],
    tags: [FRONTEND],
  },
  {
    title: "Agile",
    children: [
      "Interested in maximising value and minimising time to production through agile thought",
      "Confident in exploiting agile methodology without introducing cumbersome processes",
    ],
    tags: [MANAGEMENT],
  },
  {
    title: "Mentorship",
    children: [
      "Significant experience mentoring junior developers",
      "Line manager for senior engineers at Bloom",
      "Became a technical leader within multiple teams",
    ],
    tags: [MANAGEMENT],
  },
  {
    title: "Open Source",
    children: [
      "Happy contributing to completely new projects to enable team",
      "Contributions to open source software e.g. mysql and needle NodeJS libararies",
      "Strong proponent of teams maintaing their own set of open source libraries",
    ],
    tags: [BACKEND],
  },
  {
    title: "DevOps",
    children: [
      "Huge on CI/CD and figuring out best practice for teams",
      "Experienced using AWS CodePipeline, Jenkins, Github Actions",
    ],
    tags: [DEVOPS],
  },
  {
    title: "Engineering",
    children: [
      "Proven experience in multiple languages using both OOP and FP design patterns",
      "Strong Computer Science and analytical background",
      "Experience with Haskell, Python, Java, Scala, JS, C#",
    ],
    tags: [FRONTEND, BACKEND],
  },
  {
    title: "Communication",
    children: [
      "Strong public speaker and presenter",
      "Good writer and passionate about maintaining documentation",
      "Genuine, honest and fair",
    ],
    tags: [MANAGEMENT],
  },
].map(({ children, ...rest }) => ({
  ...rest,
  children: (
    <ul>
      {children.map((c, index) => (
        <li key={index}>{c}</li>
      ))}
    </ul>
  ),
}));
