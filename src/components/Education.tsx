import React from 'react';

const Education: React.FC = () => {
    return (
        <section id="education" className="card">
            <h2 className="text-3xl font-bold section-heading mb-8">Education</h2>

            <div className="space-y-8">
                {/* Current Education */}
                <div className="relative">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold dark:text-white text-gray-800">
                                    B.Sc. in Computer Engineering
                                </h3>
                                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    Current
                                </span>
                            </div>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-200 mb-1">
                                Iran University of Science & Technology (IUST)
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                                Expected Graduation: February 2026
                            </p>
                        </div>
                        <div className="lg:text-right mt-2 lg:mt-0">
                            <div className="bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-lg">
                                <div className="text-sm font-medium">GPA (Last 2 Years)</div>
                                <div className="text-xl font-bold">3.66 / 4.0</div>
                                <div className="text-xs opacity-90">17.37 / 20.0 (Iranian scale)</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                🎯 Thesis Focus
                            </h4>
                            <p className="text-sm dark:text-gray-300 text-gray-700">
                                Predicting RNA 3D Structures from Sequence Using Machine Learning
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                🏆 Academic Standing
                            </h4>
                            <p className="text-sm dark:text-gray-300 text-gray-700">
                                Ranked among <strong>Top 10%</strong> of class GPA
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                            🏛️ University ranked among the <strong>Top 4 in Iran</strong>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

                {/* Previous Education */}
                <div className="relative">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold dark:text-white text-gray-800">
                                    High School Diploma - Biology
                                </h3>
                                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    Completed
                                </span>
                            </div>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-200 mb-1">
                                National Organization for Development of Exceptional Talents (Sampad)
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                                Graduation Year: 2018
                            </p>
                        </div>
                        <div className="lg:text-right mt-2 lg:mt-0">
                            <div className="bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-lg">
                                <div className="text-sm font-medium">GPA</div>
                                <div className="text-xl font-bold">4.0 / 4.0</div>
                                <div className="text-xs opacity-90">Perfect Score</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                            🏆 Prestigious Institution
                        </h4>
                        <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed">
                            Sampad is a prestigious, highly selective school system in Iran for exceptionally talented students, 
                            admitting through a rigorous two-stage national exam. Only the top performers nationwide are accepted.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Education; 