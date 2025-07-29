import React from 'react';

const Honors: React.FC = () => {
    return (
        <section id="honors" className="card">
            <h2 className="text-3xl font-bold section-heading">Honors & Awards</h2>
            <ul className="list-disc list-inside dark:text-gray-300 text-gray-700 space-y-2">
                <li>
                    Among top 10% in class GPA (17.37/20) <br />
                    <span className="text-sm text-gray-500">- School of Computer Science, IUST</span>
                    <br />
                    <span className="text-sm text-gray-500">- Class of 110 students</span>
                </li>
                <li>
                    Ranked within top 0.5% in Iranian University Entrance Exam <br />
                    <span className="text-sm text-gray-500">- Mathematics and Physics majors</span>
                    <br />
                    <span className="text-sm text-gray-500">- Ranked 175 among 127,000 students</span>
                </li>
            </ul>
        </section>
    );
};

export default Honors; 