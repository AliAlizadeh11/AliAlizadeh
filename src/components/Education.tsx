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
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white px-4 py-2 rounded-lg shadow-lg">
                                <div className="text-sm font-medium">GPA (Last 2 Years)</div>
                                <div className="text-xl font-bold">3.66 / 4.0</div>
                                <div className="text-xs opacity-90">17.37 / 20.0 (Iranian scale)</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                                🎯 Thesis Focus
                            </h4>
                            <p className="text-sm dark:text-gray-300 text-gray-700">
                                Predicting RNA 3D Structures from Sequence Using Machine Learning
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                                🏆 Academic Standing
                            </h4>
                            <p className="text-sm dark:text-gray-300 text-gray-700">
                                Ranked among <strong>Top 10%</strong> of class GPA
                            </p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <p className="text-sm text-yellow-800 dark:text-yellow-300 font-medium">
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
                                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
                            <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white px-4 py-2 rounded-lg shadow-lg">
                                <div className="text-sm font-medium">GPA</div>
                                <div className="text-xl font-bold">4.0 / 4.0</div>
                                <div className="text-xs opacity-90">Perfect Score</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
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