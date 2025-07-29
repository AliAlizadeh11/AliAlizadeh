import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-black shadow-md backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                <div className="text-xl sm:text-2xl font-bold dark:text-white text-gray-800">Ali Alizadeh Profile</div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#about" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">About Me</a>
                    <a href="#experience" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Experience</a>
                    <a href="#education" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Education</a>
                    <a href="#research-interests" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Research Interests</a>
                    <a href="#contact" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Contact</a>
                    <button id="theme-toggle" onClick={toggleTheme} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">
                        <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button id="theme-toggle" onClick={toggleTheme} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">
                        <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
                    </button>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
                    <nav className="flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">About Me</a>
                        <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Experience</a>
                        <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Education</a>
                        <a href="#research-interests" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Research Interests</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar; 