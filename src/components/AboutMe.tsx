import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="card">
            <h2 className="text-3xl font-bold section-heading mb-6">About Me</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                    <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4 text-lg">
                        I'm <span className="font-semibold text-gray-600 dark:text-gray-200">Ali Alizadeh</span>, a passionate Computer Engineering student with a deep fascination for the intersection of technology and life sciences. My academic journey has led me to explore the exciting realm of <span className="font-semibold text-gray-600 dark:text-gray-200">machine learning and computational biology</span>, where I apply computational power to solve complex biological challenges.
                    </p>
                    
                    {/* <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                        My passion for technology began with a curiosity about how complex systems work, which naturally evolved into a desire to build solutions that can make a real impact. I believe in the power of interdisciplinary approaches and enjoy tackling problems that require both technical expertise and creative thinking.
                    </p> */}
                    
                    <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                        When I'm not coding or studying, you'll find me <span className="font-medium">playing chess</span>, <span className="font-medium">playing football</span> and practicing <span className="font-medium">calisthenics</span> to maintain physical and mental discipline.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🎯 Current Focus</h3>
                        <p className="text-sm dark:text-gray-300 text-gray-700">Machine Learning & Computational Biology</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🎓 Education</h3>
                        <p className="text-sm dark:text-gray-300 text-gray-700">Computer Engineering Student</p>
                    </div>

                </div>
            </div>
            

        </section>
    );
};

export default AboutMe; 