import React from 'react';

const projects = [
    {
        icon: '🌐',
        title: 'NoCodi.ir',
        category: 'Software Engineering Course Project',
        technologies: ['React.js', 'Django', 'Material-UI','PostgreSQL'],
        description: '• Developed responsive website using React.js and Django REST Framework\n• Built frontend with Redux state management and Material-UI components\n• Implemented RESTful API with JWT authentication and role-based access control\n• Integrated PostgreSQL database for data persistence',
        link: 'https://github.com/nocodi',
        linkText: 'View Project',
        color: 'from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50',
    },
    {
        icon: '📱',
        title: 'Seven Apply',
        category: 'System Analysis and Design Course Project',
        technologies: ['React.js', 'Django', 'Tailwind Css'],
        description: '• Built full-stack website with React.js frontend and Django backend\n• Developed component-based architecture with REST API integration\n• Implemented database schema design and user authentication modules\n• Created dynamic data rendering through API endpoints',
        link: 'https://github.com/Team-Se7en',
        linkText: 'View Project',
        color: 'from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50',
    },
    {
        icon: '🔧',
        title: 'Domain-Specific Language for Clustering',
        category: 'Compiler Design Project',
        technologies: ['ANTLR', 'DSL', 'Clustering Algorithms', 'AST'],
        description: '• Designed and implemented DSL to simplify clustering workflows using ANTLR\n• Supported multiple clustering algorithms (K-Means, DBSCAN, Spectral, Agglomerative)\n• Built custom grammar and listener to parse DSL commands\n• Generated Abstract Syntax Tree (AST) for command processing',
        link: 'https://github.com/AliAlizadeh11/dsl-model-clustering',
        linkText: 'View Project',
        color: 'from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50',
    },
    {
        icon: '📈',
        title: 'Volatility Modeling for Crypto Asset Allocation',
        category: 'Algorithmic Trading Course Project',
        technologies: ['Black-Litterman', 'Portfolio Optimization'],
        description: '• Estimated crypto asset volatility using GARCH, EGARCH, and FIGARCH models\n• Applied statistical estimators for volatility forecasting\n• Optimized portfolio weights using Black-Litterman model\n• Maximized Sharpe ratio for improved risk-adjusted returns',
        link: 'https://github.com/AliAlizadeh11/volatility-portfolio-optimization',
        linkText: 'View Project',
        color: 'from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50',
    },
    {
        icon: '🤖',
        title: 'Naïve Bayes Text Classification',
        category: 'Artificial Intelligence Course Project',
        technologies: ['Naïve Bayes', 'Text Preprocessing', 'Feature Extraction', 'Machine Learning'],
        description: '• Built complete text classification pipeline using Naïve Bayes algorithm\n• Performed text preprocessing (tokenization, normalization)\n• Implemented feature extraction and model training\n• Evaluated performance on labeled datasets and generated predictions',
        link: 'https://github.com/kooshalahouti/AI-Project',
        linkText: 'View Project',
        color: 'from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50',
    },
    {
        icon: '⚙️',
        title: 'XV6 System Call and OS Kernel Development',
        category: 'Operating Systems Course Project',
        technologies: ['C', 'x86 Assembly', 'Process Management', 'Threading'],
        description: '• Developed Unix-like educational OS kernel using C and x86 Assembly\n• Implemented process management: creation, scheduling, and termination\n• Extended XV6 by adding threading support in C\n• Built system calls for kernel-level operations',
        link: 'https://github.com/SajadMRjl/OS-Project',
        linkText: 'View Project',
        color: 'from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="card">
            <h2 className="text-3xl font-bold section-heading mb-8">Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`bg-gradient-to-br ${project.color} rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 flex flex-col h-full`}
                    >
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mr-3">
                                <span className="text-2xl">{project.icon}</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg dark:text-white text-gray-800">{project.title}</h3>
                                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{project.category}</span>
                            </div>
                        </div>
                        
                        <div className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4 text-sm flex-1">
                            {project.description.split('\n').map((line, i) => (
                                <p key={i} className="mb-1">{line}</p>
                            ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-auto">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 text-white hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-200 hover:shadow-md w-full justify-center"
                            >
                                {project.linkText}
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Projects; 