import React, { useState } from 'react';

const ResearchInterests: React.FC = () => {
    const [expandedInterest, setExpandedInterest] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentInterestId, setCurrentInterestId] = useState<string | null>(null);

    const researchTopics = [
        {
            id: "ai-ml",
            icon: "🤖",
            title: "Machine Learning for Biology",
            description: "Applying ML algorithms to uncover patterns and insights from complex biological data.",
            color: "blue"
        },
        {
            id: "software-eng",
            icon: "🧬",
            title: "Computational Biology",
            description: "Developing software and models to simulate and understand biological systems.",
            color: "green"
        },
        {
            id: "cybersecurity",
            icon: "🔬",
            title: "Bioinformatics",
            description: "Designing computational tools to manage, analyze, and interpret genomic and molecular data.",
            color: "purple"
        },
        {
            id: "data-science",
            icon: "💊",
            title: "Drug Discovery",
            description: "Leveraging data-driven methods to identify potential therapeutic compounds and predict drug interactions.",
            color: "pink"
        },
        {
            id: "rna-protein",
            icon: "🧪",
            title: "RNA & Protein Structure Prediction",
            description: "Exploring algorithms to model the 3D structure of RNA and proteins for functional analysis.",
            color: "orange"
        },
        {
            id: "healthcare-ai",
            icon: "🏥",
            title: "Deep Learning in Healthcare",
            description: "Utilizing deep neural networks to improve diagnostics, treatment planning, and patient outcomes.",
            color: "red"
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300",
            green: "from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300",
            purple: "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300",
            pink: "from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700 border-pink-200 dark:border-pink-800 text-pink-800 dark:text-pink-300",
            orange: "from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-300",
            red: "from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300"
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    const expandInterest = async (interestText: string, interestId: string) => {
        setLoading(true);
        setExpandedInterest(null);
        setCurrentInterestId(interestId);

        try {
            const prompt = `Expand on the following research interest in a concise paragraph suitable for a personal academic website: "${interestText}". Focus on its significance and potential applications.`;
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = "";
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
            <h2 className="text-3xl font-bold section-heading mb-8">Research Interests</h2>
            
            {/* Introduction */}
            <div className="mb-8">
                <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                    My research focuses on the intersection of <strong className="text-blue-600 dark:text-blue-400">computer science</strong> and <strong className="text-green-600 dark:text-green-400">biology</strong>, 
                    where I develop computational methods to solve complex biological problems.
                </p>

            </div>

            {/* Research Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchTopics.map((topic) => (
                    <div key={topic.id} className="group relative h-full">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col min-h-[260px]">
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className={`text-2xl bg-gradient-to-r ${getColorClasses(topic.color)} bg-clip-text text-transparent`}>
                                    {topic.icon}
                                </div>
                                <h4 className="font-bold dark:text-white text-gray-800 text-lg">
                                    {topic.title}
                                </h4>
                            </div>
                            {/* Description */}
                            <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed flex-1">
                                {topic.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ResearchInterests; 