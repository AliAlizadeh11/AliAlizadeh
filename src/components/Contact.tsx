import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="card">
            <h2 className="text-3xl font-bold section-heading">Contact</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                Feel free to reach out to me! I'm always open to discussing new opportunities, collaborations, or just connecting.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
                <a href="mailto:alializadeh.dev10@gmail.com" className="flex items-center gap-3 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full px-6 py-3 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                    <i className="fas fa-envelope text-xl"></i>
                    <span className="font-medium">Email</span>
                </a>
                <a href="https://github.com/AliAlizadeh11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-6 py-3 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                    <i className="fab fa-github text-xl"></i>
                    <span className="font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ali-alizadeh-1153b721a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white bg-gradient-to-r from-blue-400 to-blue-500 rounded-full px-6 py-3 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                    <i className="fab fa-linkedin-in text-xl"></i>
                    <span className="font-medium">LinkedIn</span>
                </a>
                <a href="https://t.me/AliAlz11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full px-6 py-3 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                    <i className="fab fa-telegram-plane text-xl"></i>
                    <span className="font-medium">Telegram</span>
                </a>
            </div>
        </section>
    );
};

export default Contact; 