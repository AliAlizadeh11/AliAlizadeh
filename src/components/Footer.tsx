import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full max-w-4xl text-center mt-10 py-6 dark:text-gray-500 text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Ali Alizadeh. All rights reserved.</p>
        </footer>
    );
};

export default Footer; 