import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;