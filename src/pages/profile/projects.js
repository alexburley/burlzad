import { BACKEND, FRONTEND } from "./skills.jsx";

export default [
  {
    name: "Wedding Website",
    description:
      "A website to support information for my wedding, served on express with password login and rendered using pug templates.",
    tags: [FRONTEND],
    link: "https://www.burleywedding.co.uk/",
  },
  {
    name: "Personal Website",
    description:
      "This website is used to provide a professional profile and record the books I read.",
    link: "https://github.com/alexburley/burlzad",
    tags: [FRONTEND],
  },
  // {
  //   name: "whipsnap",
  //   description:
  //     "A rudimentary static site generator that I was going to use to provision a blog written in NodeJS.",
  //   link: "https://github.com/alexburley/whipsnap",
  //   tags: [FRONTEND],
  // },
  {
    name: "Authentication Service",
    description:
      "A POC authorisation system I had some ideas for. I wanted to spike out the ideas to use day to day at work.",
    link: "https://github.com/alexburley/auth-service",
    tags: [BACKEND],
  },
  {
    name: "Axios Client Builder",
    description:
      "NPM package to add some utilities to an axios client and standarizing patterns across services",
    link: "https://github.com/alexburley/axios-client-builder",
    tags: [BACKEND, FRONTEND],
  },
  // {
  //   name: "JS for CSS",
  //   description:
  //     "Learning JS for CSS from Josh Comeaux, now I like writing CSS.",
  //   link: "https://css-for-js.dev/",
  //   tags: [FRONTEND],
  // },
  // {
  //   name: "Functional Programming in Scala",
  //   description: "Introduction into FP concepts, currying, monads etc.",
  //   link: "https://www.coursera.org/learn/scala-functional-programming",
  //   tags: [BACKEND],
  // },
];
