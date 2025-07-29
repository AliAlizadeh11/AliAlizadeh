import React from 'react';
// Import your image from the assets folder
import profilePic from '../assets/Ali-photo.jpeg';

const Hero: React.FC = () => {
    return (
        <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-transparent mb-10">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8 lg:pr-12">
                <p className="text-base sm:text-lg dark:text-gray-400 text-gray-600 mb-2">Hi, my name is</p>
                <h1 className="text-2xl sm:text-6xl md:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900 mb-2">Ali Alizadeh</h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Computer Engineering Student</h2>
                <h3 className="text-sm sm:text-base md:text-lg font-medium dark:text-gray-400 text-gray-700 mb-6 md:mb-8">Machine Learning & Computational Biology Enthusiast</h3>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href={require('../assets/AliAlizadeh-CV.pdf')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 border border-gray-500 dark:text-white text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition duration-300 ease-in-out text-center">
                        Resume
                    </a>
                    <div className="flex space-x-4">
                        <a href="https://github.com/AliAlizadeh11" target="_blank" className="social-icon-button">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ali-alizadeh-1153b721a/" target="_blank" className="social-icon-button">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="mailto:alializadeh.dev10@gmail.com" target="_blank" className="social-icon-button">
                            <i className="fas fa-envelope text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                {/* Image source now imports from the assets folder */}
                <img src={profilePic} alt="Ali Alizadeh Profile" className="rounded-xl shadow-lg w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover" />
            </div>
        </section>
    );
};

export default Hero; 