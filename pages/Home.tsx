import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { MY_NAME, MY_ROLE, SOCIAL_LINKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center animate-fade-in">
      {/* Profile Image / Avatar Placeholder */}
      <div className="relative mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <img 
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl"
          src="https://picsum.photos/400/400" 
          alt={MY_NAME} 
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">{MY_NAME}</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
        {MY_ROLE}
      </p>
      
      <p className="max-w-2xl text-gray-500 dark:text-gray-400 mb-10 text-lg leading-relaxed">
        I build accessible, pixel-perfect, and performant web experiences. 
        Specialized in React, Modern CSS, and integrating AI into user interfaces.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link 
          to="/projects"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
        >
          View Work
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-colors"
        >
          <Download className="ml-2 w-5 h-5" />
          Download CV
        </a>
      </div>

      <div className="flex gap-6 mt-4">
        {SOCIAL_LINKS.map((link) => {
            let Icon = Globe;
            if (link.icon === 'Github') Icon = Github;
            if (link.icon === 'Linkedin') Icon = Linkedin;
            if (link.icon === 'Twitter') Icon = Twitter;
            
            return (
                <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                    aria-label={link.name}
                >
                    {/* @ts-ignore - Lucide icons don't always play nice with dynamic selection in strict mode without a map, keeping it simple here */}
                    <Icon size={28} />
                </a>
            )
        })}
      </div>
    </div>
  );
};

// Helper component for dynamic icon rendering just in case
const Globe = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

export default Home;