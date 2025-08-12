import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="card">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold section-heading">Contact</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4 text-sm sm:text-base lg:text-lg">
                Feel free to reach out to me! I'm always open to discussing new opportunities, collaborations, or just connecting.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8">
                <a href="mailto:alializadeh.dev10@gmail.com" className="flex items-center justify-center gap-2 sm:gap-3 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-200 hover:shadow-lg border-2 border-red-400 w-24 sm:w-28 lg:w-32">
                    <i className="fas fa-envelope text-lg sm:text-xl"></i>
                    <span className="font-medium text-sm sm:text-base">Email</span>
                </a>
                <a href="https://github.com/AliAlizadeh11" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-200 hover:shadow-lg border-2 border-gray-700 w-24 sm:w-28 lg:w-32">
                    <i className="fab fa-github text-lg sm:text-xl"></i>
                    <span className="font-medium text-sm sm:text-base">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ali-alizadeh-1153b721a/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 text-white bg-gradient-to-r from-blue-400 to-blue-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-200 hover:shadow-lg border-2 border-blue-300 w-24 sm:w-28 lg:w-32">
                    <i className="fab fa-linkedin-in text-lg sm:text-xl"></i>
                    <span className="font-medium text-sm sm:text-base">LinkedIn</span>
                </a>
                <a href="https://t.me/AliAlz11" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-200 hover:shadow-lg border-2 border-blue-500 w-24 sm:w-28 lg:w-32">
                    <i className="fab fa-telegram-plane text-lg sm:text-xl"></i>
                    <span className="font-medium text-sm sm:text-base">Telegram</span>
                </a>
            </div>
        </section>
    );
};

export default Contact; 