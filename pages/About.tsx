import React from 'react';
import { Briefcase, Code, User } from 'lucide-react';
import { EXPERIENCE, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 animate-slide-up">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
        <User className="text-primary-600" />
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I'm a passionate developer who loves solving complex problems with simple, elegant solutions. 
            My journey in tech started 5 years ago, and I've been hooked ever since.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
             When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new AI tools.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <Code size={20} className="text-primary-500" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
        <Briefcase className="text-primary-600" />
        Experience
      </h2>

      <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="mb-10 ml-6 group">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
              <div className="w-2.5 h-2.5 bg-primary-600 rounded-full"></div>
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                    </h3>
                    <span className="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        {exp.period}
                    </span>
                </div>
                <div className="text-base font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company}
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {exp.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;