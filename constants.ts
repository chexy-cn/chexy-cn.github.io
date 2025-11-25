import { Project, Experience, SocialLink } from './types';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code2, 
  Globe, 
  Cpu 
} from 'lucide-react';

export const MY_NAME = "Alex Developer";
export const MY_ROLE = "Senior Frontend Engineer";

// Navigation
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
];

// Portfolio Data - Replace this with your actual data
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers featuring real-time data visualization using D3.js and React.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'A SaaS application leveraging the Gemini API to help writers generate creative content drafts and outlines.',
    technologies: ['Next.js', 'Google GenAI SDK', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'TaskMaster Pro',
    description: 'Collaborative project management tool with drag-and-drop Kanban boards and real-time updates via WebSockets.',
    technologies: ['Vue', 'Firebase', 'Pinia'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    demoUrl: '#',
    repoUrl: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Leading a team of 5 developers in rebuilding the core product dashboard. Improved performance by 40%.'
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2018 - 2021',
    description: 'Developed award-winning marketing websites for Fortune 500 clients using React and WebGL.'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
];

export const SKILLS = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "AWS",
  "UI/UX Design",
  "Google Gemini API"
];

// System instruction for the AI Assistant
export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for ${MY_NAME}'s personal portfolio website. 
Your goal is to answer questions about Alex's professional background, skills, and projects based on the following information:

Name: ${MY_NAME}
Role: ${MY_ROLE}
Skills: ${SKILLS.join(', ')}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}

Tone: Professional, friendly, and concise.
Constraint: Do not answer questions unrelated to Alex's professional life. If asked about general topics, politely steer the conversation back to Alex's work.
`;
