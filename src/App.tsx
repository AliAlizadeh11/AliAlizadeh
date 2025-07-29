import React, { useState, useEffect, createContext, useContext } from 'react';

// Import your image from the new assets folder
import profilePic from './assets/Ali-photo.jpeg';

// Define the shape of our theme context
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create the Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Theme Provider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<string>(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light'; // Default to light if no preference found
    });

    useEffect(() => {
        const htmlElement = document.documentElement;
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setThemeState((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// --- Component Definitions (normally in separate files) ---

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-black shadow-md backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                <div className="text-xl sm:text-2xl font-bold dark:text-white text-gray-800">Ali Alizadeh Profile</div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#about" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">About Me</a>
                    <a href="#experience" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Experience</a>
                    <a href="#education" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Education</a>
                    <a href="#research-interests" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Research Interests</a>
                    <a href="#contact" className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Contact</a>
                    <button id="theme-toggle" onClick={toggleTheme} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">
                        <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button id="theme-toggle" onClick={toggleTheme} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">
                        <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
                    </button>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
                    <nav className="flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">About Me</a>
                        <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Experience</a>
                        <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Education</a>
                        <a href="#research-interests" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Research Interests</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition duration-300 ease-in-out dark:text-gray-200 text-gray-700">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-transparent mb-10">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <p className="text-lg sm:text-xl dark:text-gray-400 text-gray-600 mb-2">Hi, my name is</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold dark:text-white text-gray-900 mb-4">Ali Alizadeh</h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold dark:text-gray-300 text-gray-700 mb-6 md:mb-8">Computer Engineering Student</h2>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href={require('./assets/AliAlizadeh-CV.pdf')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 border border-gray-500 dark:text-white text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition duration-300 ease-in-out text-center">
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
                <img src={profilePic} alt="Ali Alizadeh Profile" className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md" />
            </div>
        </section>
    );
};

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="card">
            <h2 className="text-3xl font-bold section-heading">About Me</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">

            Hello!
            I'm Ali Alizadeh, a passionate <strong>Computer Engineering Student</strong>. I'm currently focused on the exciting intersection of <strong>machine learning and biology</strong>, applying computational power to biological challenges. My journey in computer engineering began with a fascination for how technology could unravel complex systems, leading me to explore its vast potential. I love exploring new technologies and solving challenging problems.

            </p>

            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Outside of my studies, I enjoy <b>playing chess, playing football, and practicing calisthenics</b>. I believe in continuous learning and always strive to improve my skills and knowledge.
            </p>
        </section>
    );
};

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

const ResearchInterests: React.FC = () => {
    const [expandedInterest, setExpandedInterest] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentInterestId, setCurrentInterestId] = useState<string | null>(null); // To keep track of which interest is being expanded



    const researchTopics = [
        {
          id: "ai-ml",
          text: "Machine Learning for Biology: Applying ML algorithms to uncover patterns and insights from complex biological data.",
        },
        {
          id: "software-eng",
          text: "Computational Biology: Developing software and models to simulate and understand biological systems.",
        },
        {
          id: "cybersecurity",
          text: "Bioinformatics: Designing computational tools to manage, analyze, and interpret genomic and molecular data.",
        },
        {
          id: "data-science",
          text: "Drug Discovery: Leveraging data-driven methods to identify potential therapeutic compounds and predict drug interactions.",
        },
        {
          id: "rna-protein",
          text: "RNA and Protein Structure Prediction: Exploring algorithms to model the 3D structure of RNA and proteins for functional analysis.",
        },
        {
          id: "healthcare-ai",
          text: "Deep Learning in Healthcare: Utilizing deep neural networks to improve diagnostics, treatment planning, and patient outcomes.",
        },
      ];
      

    const expandInterest = async (interestText: string, interestId: string) => {
        setLoading(true);
        setExpandedInterest(null); // Clear previous expansion
        setCurrentInterestId(interestId); // Set current interest ID being expanded

        try {
            const prompt = `Expand on the following research interest in a concise paragraph suitable for a personal academic website: "${interestText}". Focus on its significance and potential applications.`;
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = ""; // Canvas will provide this if empty
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setExpandedInterest(text);
            } else {
                setExpandedInterest("Could not generate expansion. Please try again.");
            }
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            setExpandedInterest("Failed to generate expansion due to an error.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="research-interests" className="card">
            <h2 className="text-3xl font-bold section-heading">Research Interests</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                My primary research interests lie in the areas of:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:text-gray-300 text-gray-700">
                {researchTopics.map((topic) => (
                    <div key={topic.id} className="rounded-md p-3 sm:p-4 flex flex-col dark:text-gray-300 text-gray-700">
                        <span className="font-semibold dark:text-gray-300 text-gray-700 text-sm sm:text-base">{topic.text.split(':')[0]}:</span> 
                        <span className="dark:text-gray-300 text-gray-700 text-sm sm:text-base">{topic.text.split(':')[1]}</span>
                        {loading && currentInterestId === topic.id && <p className="text-sm dark:text-gray-300 text-gray-700 mt-1">Generating expansion...</p>}
                        {expandedInterest && currentInterestId === topic.id && (
                            <div className="mt-2 p-3 bg-gray-800 rounded-md dark:text-gray-300 text-gray-700">
                                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{expandedInterest}</p>

                                <button
                                    onClick={() => setExpandedInterest(null)}
                                    className="mt-2 px-2 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Clear
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed mt-4">
                I am particularly passionate about developing advanced computational methods to <strong>predict RNA structure</strong>.
                
            </p>
        </section>


    );
};

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
            {/* <p className="dark:text-gray-300 text-gray-700">
                For a complete overview of my professional journey, please see my <a href="#" className="dark:text-blue-400 text-blue-600 hover:underline">full resume</a>.
            </p> */}
        </section>
    );
};




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
                    <i className="fab fa-linkedin-in text-2xl sm:text-3xl"></i> {/* Often 'linkedin-in' for the logo without the word */}
                </a>
              
            </div>

        </section>
    );
};


// const Resume: React.FC = () => {
//     return (
//         <section id="resume" className="card">
//             <h2 className="text-3xl font-bold section-heading">Resume</h2>
//             <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
//                 This section is for your full resume. You can embed a PDF viewer or provide a link to your resume document.
//             </p>
//             <a href="#" className="dark:text-blue-400 text-blue-600 hover:underline mt-4 inline-block">Download Full Resume (PDF)</a>
//         </section>
//     );
// };


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


  

const Projects: React.FC = () => {
    return (
        <section id="projects" className="card">
            <h2 className="text-3xl font-bold section-heading">Projects</h2>
            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">NoCodi.ir</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">Technologies Used: React.js, Django</p>
                <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Implemented the Website using Scrum methodology with integrated CI/CD pipelines.
                    <a href="http://nocodi.ir/" target="_blank" className="dark:text-blue-400 text-blue-600 hover:underline ml-2">View Project</a>
                </p>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">Seven apply</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">Technologies Used: React.js, Djanog</p>
                <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Developed using Scrum methodology.
                    <a href="https://github.com/Team-Se7en" target="_blank" className="dark:text-blue-400 text-blue-600 hover:underline ml-2">View Project</a>
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">XV6 System Call</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">Operating Systems Course</p>
                <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Add threading support to XV6 using C
                    <a href="https://github.com/SajadMRjl/OS-Project" target="_blank" className="dark:text-blue-400 text-blue-600 hover:underline ml-2">View Project</a>
                </p>
            </div>
        </section>
    );
};

const Skills: React.FC = () => {
    return (


<section id="skills" className="card">
    <div className="container mx-auto px-4">
    <h2 className="dark:text-gray-300 text-gray-700 text-3xl font-bold section-heading">Skills</h2>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 dark:text-gray-300 text-gray-700">

            {/* AI & Machine Learning Card */}
            <div className="dark:text-gray-300 text-gray-700 rounded-lg shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-300 text-gray-700 mb-4">AI & Machine Learning</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Frameworks/Libraries:</h4>
                        <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">TensorFlow, PyTorch, Keras, Scikit-learn, NumPy, Pandas</p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Core Concepts:</h4>
                        <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">Deep Learning (CNNs, RNNs, Transformers), LLMs, Natural Language Processing (NLP), Computer Vision</p>
                    </div>
                </div>
            </div>

            {/* Web Development & Programming Card */}
            <div className="rounded-lg shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-300 text-gray-700 mb-4">Web Development & Programming</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Languages:</h4>
                        <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">Python, JavaScript, TypeScript, Go, C/C++</p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Backend:</h4>
                        <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">FastAPI, Django, Fiber (Go), GORM</p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Frontend:</h4>
                        <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">React, HTML5, CSS3</p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Databases:</h4>
                        <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">PostgreSQL, MySQL</p>
                    </div>
                </div>
            </div>

            {/* DevOps, Tools & Professional Card */}
            <div className="dark:text-gray-300 text-gray-700 rounded-lg shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300 lg:col-span-2">
                <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-300 text-gray-700 mb-4">DevOps, Tools & Professional</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-300 text-gray-700 mb-2">Tools & Platforms:</h4>
                        <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">Git, Docker, Linux, Bash, CI/CD</p>
                    </div>
                    {/* <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Mobile Development:</h4>
                        <p className="text-gray-300 leading-relaxed">Android, Kotlin</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Professional Skills:</h4>
                        <p className="text-gray-300 leading-relaxed">Teamwork, Team Leadership</p>
                    </div> */}
                </div>
            </div>

        </div>
    </div>
</section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="w-full max-w-4xl text-center mt-10 py-6 dark:text-gray-500 text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Ali Alizadeh. All rights reserved.</p>
        </footer>
    );
};

// Main App component
const App: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8">
                <Navbar />
                <main className="w-full max-w-4xl pt-20 sm:pt-24">
                    <Hero />
                    <AboutMe />
                    <Education />
                    <ResearchInterests />
                    <Honors />
                    <Experience />
                    <Projects />
                    <Skills />
                    {/* <Resume /> */}
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
