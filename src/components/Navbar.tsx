import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100; // Offset to account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-black shadow-md backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                <button 
                    onClick={scrollToTop}
                    className="text-xl sm:text-2xl font-bold dark:text-white text-gray-800 hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer"
                >
                    Ali Alizadeh Profile
                </button>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">About Me</a>
                    <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Education</a>
                    <a href="#research-interests" onClick={(e) => { e.preventDefault(); scrollToSection('research-interests'); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Research Interests</a>
                    <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Experience</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Projects</a>
                    <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Skills</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Contact</a>
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
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); setIsMenuOpen(false); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">About Me</a>
                        <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); setIsMenuOpen(false); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Education</a>
                        <a href="#research-interests" onClick={(e) => { e.preventDefault(); scrollToSection('research-interests'); setIsMenuOpen(false); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Research Interests</a>
                        <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); setIsMenuOpen(false); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Experience</a>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); setIsMenuOpen(false); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Projects</a>
                        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); setIsMenuOpen(false); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Skills</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setIsMenuOpen(false); }} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700 cursor-pointer">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar; 