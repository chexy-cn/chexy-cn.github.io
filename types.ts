export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    demoUrl?: string;
    repoUrl?: string;
  }
  
  export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
  }
  
  export interface ChatMessage {
    id: string;
    role: 'user' | 'model' | 'system';
    text: string;
    timestamp: Date;
    isThinking?: boolean;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }