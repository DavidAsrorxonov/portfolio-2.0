import Icons from "../lib/Icons";

const skills = [
  {
    id: 1,
    section: "Programming Languages",
    items: [
      {
        name: "JavaScript",
        Icon: Icons.Langs.JavaScript,
        description:
          "A versatile, event-driven scripting language mainly used for web development.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        Icon: Icons.Langs.TypeScript,
        description:
          "A statically typed superset of JavaScript that compiles to plain JavaScript.",
        link: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "Python",
        Icon: Icons.Langs.Python,
        description:
          "A high-level, interpreted language known for its readability and versatility.",
        link: "https://docs.python.org/3/tutorial/",
      },
      {
        name: "GraphQL",
        Icon: Icons.Langs.GraphQL,
        description:
          "A query language for APIs and a runtime for executing those queries with existing data.",
        link: "https://graphql.org/learn/",
      },
      {
        name: "HTML5",
        Icon: Icons.Langs.HTML5,
        description:
          "The standard markup language for creating the structure of web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      },
      {
        name: "CSS3",
        Icon: Icons.Langs.CSS3,
        description:
          "A style sheet language used for describing the look and layout of a document written in HTML.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JSON",
        Icon: Icons.Langs.JSON,
        description:
          "A lightweight data-interchange format that is easy for humans and machines to understand.",
        link: "https://www.json.org/json-en.html",
      },
      {
        name: "Babel",
        Icon: Icons.Langs.Babel,
        description:
          "A JavaScript compiler that lets you use the latest syntax by transpiling it to backwards-compatible JS.",
        link: "https://babeljs.io/docs/en/",
      },
    ],
  },
  {
    id: 2,
    section: "Frontend",
    items: [
      {
        name: "React",
        Icon: Icons.Frontend.React,
        description:
          "A JavaScript library for building user interfaces in a declarative and component-based way.",
        link: "https://reactjs.org/learn",
      },
      {
        name: "Tailwind CSS",
        Icon: Icons.Frontend.Tailwind,
        description:
          "A utility-first CSS framework for building custom designs directly in your HTML.",
        link: "https://tailwindcss.com/docs",
      },
      {
        name: "Bootstrap",
        Icon: Icons.Frontend.Bootstrap,
        description:
          "A popular CSS framework for building responsive and mobile-first websites.",
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
      },
    ],
  },
  {
    id: 3,
    section: "Backend",
    items: [
      {
        name: "Node.js",
        Icon: Icons.Backend.Nodejs,
        description:
          "A JavaScript runtime built on Chrome's V8 engine for building scalable server-side applications.",
        link: "https://nodejs.dev/en/learn/",
      },
      {
        name: "Express.js",
        Icon: Icons.Backend.Expressjs,
        description:
          "A minimal and flexible Node.js web application framework.",
        link: "https://expressjs.com/en/starter/installing.html",
      },
    ],
  },
  {
    id: 4,
    section: "Databases",
    items: [
      {
        name: "PostgreSQL",
        Icon: Icons.DB.PostgreSQL,
        description:
          "An advanced, open-source relational database system with a strong reputation for reliability.",
        link: "https://www.postgresql.org/docs/",
      },
      {
        name: "MongoDB",
        Icon: Icons.DB.MongoDB,
        description:
          "A NoSQL document-oriented database designed for high performance and scalability.",
        link: "https://www.mongodb.com/docs/",
      },
      {
        name: "Upstash",
        Icon: Icons.DB.Upstash,
        description:
          "A serverless database platform optimized for Redis and Kafka usage.",
        link: "https://docs.upstash.com/",
      },
      {
        name: "Supabase",
        Icon: Icons.DB.Supabase,
        description:
          "An open-source Firebase alternative that provides a Postgres database and auth.",
        link: "https://supabase.com/docs",
      },
    ],
  },
  {
    id: 5,
    section: "Tools",
    items: [
      {
        name: "Git",
        Icon: Icons.Tools.Git,
        description:
          "A distributed version control system for tracking changes in source code.",
        link: "https://git-scm.com/doc",
      },
      {
        name: "GitHub",
        Icon: Icons.Tools.GitHub,
        description:
          "A platform for hosting Git repositories and collaborating on code.",
        link: "https://docs.github.com/en/get-started",
      },
      {
        name: "Docker",
        Icon: Icons.Tools.Docker,
        description:
          "A platform for building, sharing, and running containerized applications.",
        link: "https://docs.docker.com/get-started/",
      },
    ],
  },
];

export default skills;
