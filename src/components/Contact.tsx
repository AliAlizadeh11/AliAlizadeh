import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="card">
            <h2 className="text-3xl font-bold section-heading">Contact</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                Feel free to reach out to me! I'm always open to discussing new opportunities, collaborations, or just connecting.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="mailto:alializadeh.dev10@gmail.com" className="text-white bg-red-500 rounded-full p-3 hover:scale-110 transition-transform duration-100">
                    <i className="fas fa-envelope text-2xl sm:text-3xl"></i>
                </a>
                <a href="https://github.com/AliAlizadeh11" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 rounded-full p-3 hover:scale-110 transition-transform duration-100">
                    <i className="fab fa-github text-2xl sm:text-3xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/ali-alizadeh-1153b721a/" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 rounded-lg p-3 hover:scale-110 transition-transform duration-100">
                    <i className="fab fa-linkedin-in text-2xl sm:text-3xl"></i>
                </a>
            </div>
        </section>
    );
};

export default Contact; 