import { twitter, gigs, scmac, tech4good } from "../../assets";
import { AiEconomist } from "./AiEconomist";
import { ArtsCenter } from "./ArtsCenter";
import { GigWellbeing } from "./GigWellbeing";

export const projectsSummary = [
  {
    image: gigs,
    company: "Tech4Good Lab",
    title: "Gig Well-being",
    body: "At the Tech4Good Lab at UCSC...",
    to: "gig-well-being",
  },
  {
    image: scmac,
    company: "Santa Cruz Mountain Arts Center",
    title: "Human-Centered Design Research",
    body: `Problem solving my local arts center's marketing and leadership issues through the integration of technology`,
    to: "hcd-research",
  },
  {
    image: twitter,
    company: "Center for Applied Values and Ethics in Advancing Technologies",
    title: "Twitter Semantic Analysis",
    body: "At the Center for Applied Values in Emerging Technologies...",
    to: "twitter-semantic-analysis",
  },
  {
    image: tech4good,
    company: "Tech4Good Lab",
    title: "AI-Economist",
    body: "For this AI-Economist...",
    to: "ai-economist",
  },
];

export const projectsFull = {
  "gig-well-being": {
    image: gigs,
    company: "Tech4Good Lab",
    title: "Gig Well-being",
    type: "HCI Research",
    description: `Gig work is very common during this uncertain time that we live in: the DoorDasher who delivers your food is a type of online platform worker or the Uber driver who picks you up and drops you off where you need to go. Gig workers enter into formal agreements with on-demand companies to provide services to the company's clients. They perform important tasks on their own and contribute significantly to our society. However, they are quite different from people who have white collar jobs not just because they don’t work a 9-5. Career development is vital for ensuring a happy and productive workforce for all workers, yet career development is largely ignored in gig work. Research has summarized that gig work platforms like Amazon Mechanical Turk (AMT) do not support gig workers in reskilling and changing careers. After studying the career goals of gig workers and the challenges they face in trying to transition out of gig work and into high-skill jobs offline or into specialized freelance work, mental health becomes a specific topic to understand what is changing these gig workers' well being and helps me to envision a more worker-centric platform. Our current goal is to understand mental health and social support for gig workers through analyzing online forums and conducting interviews with experienced gig workers.`,
    toolkit: ["Python", "Reddit API"],
    methodologies: [
      "User Research",
      "User Interviewing",
      "Qualitative Analysis",
      "Deductive Analysis",
      "Inductive Analysis",
    ],
    Component: GigWellbeing,
  },
  "hcd-research": {
    image: scmac,
    company: "Santa Cruz Mountain Arts Center",
    title: "Human-Centered Design Research",
    type: "UX Research",
    description:
      "The overall goal of this project is to help my local art center to succeed in building a diverse and multicultural community during the pandemic time when they are lacking strong leadership and consistent volunteers.",
    toolkit: ["Figma", "Annota"],
    methodologies: ["User Research", "Coding", "Empathizing"],
    Component: ArtsCenter,
  },
  "twitter-semantic-analysis": {
    image: twitter,
    company: "Center for Applied Values and Ethics in Advancing Technologies",
    title: "Twitter Semantic Analysis",
    type: "HCI Research",
    description: "",
    toolkit: ["Python", "Twitter API"],
    methodologies: ["User Interviewing", "User Research"],
    Component: "",
  },
  "ai-economist": {
    image: tech4good,
    company: "Tech4Good Lab",
    title: "AI-Economist",
    type: "HCI Research",
    description: `The goal of this project is to take an AI Economist approach to understand why it's challenging to scale apprenticeship learning and look into what governments can do to improve apprenticeship learning through subsidies or other policies. 
    Purely analytical modeling would struggle to capture the complex interactions and dynamics involved, but a computational approach through multiagent reinforcement learning has great potential as demonstrated by the AI Economist approach to designing tax policy.`,
    toolkit: ["Machine Learning", "Python"],
    methodologies: ["Literature Reviews"],
    Component: '',
  },
};
