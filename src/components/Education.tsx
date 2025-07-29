import React from 'react';

const Education: React.FC = () => {
    return (
        <section id="education" className="card">
            <h2 className="text-3xl font-bold section-heading">Education</h2>

            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">
                    B.Sc. in Computer Engineering
                </h3>
                <p className="dark:text-gray-400 text-gray-600">
                    Iran University of Science & Technology (IUST), Tehran, Iran
                </p>
                <p className="dark:text-gray-400 text-gray-600 text-sm">
                    Expected Graduation: February 2026
                </p>
                <ul className="list-disc list-inside dark:text-gray-300 text-gray-700 mt-2">
                    <li>Thesis: Predicting RNA 3D Structures from Sequence Using Machine Learning</li>
                    <li><strong>GPA (Last Two Years): 3.66 / 4.0</strong> (17.37 / 20.0 on Iranian scale)</li>
                    <li>Ranked among <strong>Top 10%</strong> of class GPA</li>
                    <li>University ranked among the <strong>Top 4 in Iran</strong></li>
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">
                    High School Diploma - Biology
                </h3>
                <p className="dark:text-gray-400 text-gray-600">
                    National Organization for Development of Exceptional Talents <strong>(Sampad)</strong>, Rafsanjan, Iran
                </p>
                <p className="dark:text-gray-400 text-gray-600 text-sm">Graduation Year: 2018</p>
                <ul className="list-disc list-inside dark:text-gray-300 text-gray-700 mt-2">
                    <li><strong>GPA: 4.0 / 4.0</strong></li>
                    <li>
                        Sampad is a prestigious, highly selective school system in Iran for exceptionally talented students,
                        admitting through a rigorous two-stage national exam.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Education; 