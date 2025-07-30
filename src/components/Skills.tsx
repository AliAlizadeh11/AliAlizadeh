import React from 'react';

const skillCategories = [
    {
        icon: '🤖',
        title: 'AI & Machine Learning',
        color: 'from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30',
        skills: [
            {
                category: 'Frameworks/Libraries',
                items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas']
            },
            {
                category: 'Core Concepts',
                items: ['Deep Learning (CNNs, RNNs, Transformers)', 'LLMs', 'Natural Language Processing (NLP)', 'Computer Vision']
            }
        ]
    },
    {
        icon: '💻',
        title: 'Web Development & Programming',
        color: 'from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/30',
        skills: [
            {
                category: 'Languages',
                items: ['Python', 'JavaScript', 'TypeScript', 'Go', 'C/C++']
            },
            {
                category: 'Backend',
                items: ['FastAPI', 'Django', 'Fiber (Go)', 'GORM']
            },
            {
                category: 'Frontend',
                items: ['React', 'HTML5', 'CSS3']
            },
            {
                category: 'Databases',
                items: ['PostgreSQL', 'MySQL']
            }
        ]
    },
    {
        icon: '⚙️',
        title: 'DevOps, Tools & Professional',
        color: 'from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/30',
        skills: [
            {
                category: 'Tools & Platforms',
                items: ['Git', 'Docker', 'Linux', 'Bash', 'CI/CD']
            }
        ]
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="card">
            <h2 className="text-3xl font-bold section-heading mb-8">Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className={`bg-gradient-to-br ${category.color} rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-200`}
                    >
                        <div className="flex items-center mb-6">
                            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mr-4">
                                <span className="text-3xl">{category.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold dark:text-white text-gray-800">{category.title}</h3>
                        </div>
                        
                        <div className="space-y-6">
                            {category.skills.map((skillGroup, groupIdx) => (
                                <div key={groupIdx}>
                                    <h4 className="text-lg font-semibold dark:text-white text-gray-800 mb-3 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                        {skillGroup.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, skillIdx) => (
                                            <span
                                                key={skillIdx}
                                                className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default Skills; 