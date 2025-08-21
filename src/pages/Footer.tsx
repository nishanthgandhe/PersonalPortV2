const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Nishanth Gandhe. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Available for Fall 2025 & 2026 internships</span>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
