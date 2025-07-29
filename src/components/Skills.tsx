import React from 'react';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="card">
            <div className="container mx-auto px-4">
                <h2 className="dark:text-gray-300 text-gray-700 text-3xl font-bold section-heading">Skills</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 dark:text-gray-300 text-gray-700">

                    {/* AI & Machine Learning Card */}
                    <div className="dark:text-gray-300 text-gray-700 rounded-lg shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-300 text-gray-700 mb-4">AI & Machine Learning</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Frameworks/Libraries:</h4>
                                <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">TensorFlow, PyTorch, Keras, Scikit-learn, NumPy, Pandas</p>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Core Concepts:</h4>
                                <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">Deep Learning (CNNs, RNNs, Transformers), LLMs, Natural Language Processing (NLP), Computer Vision</p>
                            </div>
                        </div>
                    </div>

                    {/* Web Development & Programming Card */}
                    <div className="rounded-lg shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-300 text-gray-700 mb-4">Web Development & Programming</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Languages:</h4>
                                <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">Python, JavaScript, TypeScript, Go, C/C++</p>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Backend:</h4>
                                <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">FastAPI, Django, Fiber (Go), GORM</p>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Frontend:</h4>
                                <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">React, HTML5, CSS3</p>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Databases:</h4>
                                <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">PostgreSQL, MySQL</p>
                            </div>
                        </div>
                    </div>

                    {/* DevOps, Tools & Professional Card */}
                    <div className="dark:text-gray-300 text-gray-700 rounded-lg shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300 lg:col-span-2">
                        <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-300 text-gray-700 mb-4">DevOps, Tools & Professional</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Tools & Platforms:</h4>
                                <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">Git, Docker, Linux, Bash, CI/CD</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills; 