import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="card">
            <h2 className="text-3xl font-bold section-heading">About Me</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                
                I'm Ali Alizadeh, a passionate <strong>Computer Engineering Student</strong>. I'm currently focused on the exciting intersection of <strong>machine learning and biology</strong>, applying computational power to biological challenges. My journey in computer engineering began with a fascination for how technology could unravel complex systems, leading me to explore its vast potential. I love exploring new technologies and solving challenging problems.
            </p>

            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Outside of my studies, I enjoy <b>playing chess, playing football, and practicing calisthenics</b>. I believe in continuous learning and always strive to improve my skills and knowledge.
            </p>
        </section>
    );
};

export default AboutMe; 