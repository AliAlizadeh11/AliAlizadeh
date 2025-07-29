import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="card">
            <h2 className="text-3xl font-bold section-heading">Projects</h2>
            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">NoCodi.ir</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">Technologies Used: React.js, Django</p>
                <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                    Implemented the Website using Scrum methodology with integrated CI/CD pipelines.
                    <a href="http://nocodi.ir/" target="_blank" className="dark:text-blue-400 text-blue-600 hover:underline ml-2">View Project</a>
                </p>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">Seven apply</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">Technologies Used: React.js, Djanog</p>
                <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                    Developed using Scrum methodology.
                    <a href="https://github.com/Team-Se7en" target="_blank" className="dark:text-blue-400 text-blue-600 hover:underline ml-2">View Project</a>
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">XV6 System Call</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">Operating Systems Course</p>
                <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                    Add threading support to XV6 using C
                    <a href="https://github.com/SajadMRjl/OS-Project" target="_blank" className="dark:text-blue-400 text-blue-600 hover:underline ml-2">View Project</a>
                </p>
            </div>
        </section>
    );
};

export default Projects; 