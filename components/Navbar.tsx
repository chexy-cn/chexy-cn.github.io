import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_LINKS, MY_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink 
          to="/" 
          className="flex items-center space-x-2 rtl:space-x-reverse text-gray-900 dark:text-white"
          onClick={() => setIsOpen(false)}
        >
            <div className="bg-primary-600 p-1.5 rounded-lg text-white">
              <Terminal size={20} />
            </div>
            <span className="self-center text-xl font-bold whitespace-nowrap">{MY_NAME}</span>
        </NavLink>

        <button 
          onClick={toggleMenu}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block py-2 px-3 rounded md:p-0 transition-colors ${
                      isActive 
                      ? 'text-primary-600 dark:text-primary-400 font-bold' 
                      : 'text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;