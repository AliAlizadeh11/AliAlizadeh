import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import ResearchInterests from './components/ResearchInterests';
import Honors from './components/Honors';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main App component
const App: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8">
                <Navbar />
                <main className="w-full max-w-4xl pt-20 sm:pt-24">
                    <Hero />
                    <AboutMe />
                    <Education />
                    <ResearchInterests />
                    <Honors />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
