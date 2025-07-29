import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="card">
            <h2 className="text-3xl font-bold section-heading">Experience</h2>
            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">Undergraduate Research Assistant
                , IUST</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">Sept 2024 - Present | Tehran, Iran</p>
                <ul className="list-disc list-inside dark:text-gray-300 text-gray-700 leading-relaxed">
                    <li>Supervisor: Dr. Reza Entezari-Maleki</li>
                    <li>Academic paper: Predicting RNA 3D Structures from Sequence Using Machine Learning</li>
                    <li>Developed and implemented machine and deep learning models for RNA-related research, using
                    frameworks such as PyTorch, PyTorch Geometric, Keras, TensorFlow, Scikit-learn and Pandas</li>
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">Software Engineer Intern, System Group</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">Summer 2024 | Tehran, Iran</p>
                <ul className="list-disc list-inside dark:text-gray-300 text-gray-700 leading-relaxed">
                    <li>Back-End Developer Internship</li>
                    <li>Technologies: C# and .NET Framework</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience; 