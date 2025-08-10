import React, { useState } from 'react';

const ResearchInterests: React.FC = () => {
    const [expandedInterest, setExpandedInterest] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentInterestId, setCurrentInterestId] = useState<string | null>(null);

    const researchTopics = [
        {
            id: "machine-learning",
            icon: "🧠",
            title: "Machine Learning & Deep Learning",
            description: "Developing and applying advanced ML algorithms to extract patterns, make predictions, and optimize decision-making",
            color: "gray"
        },
        {
            id: "computational-biology",
            icon: "🧬",
            title: "Computational Biology",
            description: "Developing software and models to simulate and understand biological systems.",
            color: "gray"
        },
        {
            id: "bioinformatics",
            icon: "🔬",
            title: "Bioinformatics",
            description: "Designing computational tools to manage, analyze, and interpret genomic and molecular data.",
            color: "gray"
        },
        {
            id: "computer-vision",
            icon: "🔢",
            title: "Computer Vision",
            description: "Designing algorithms to enable machines to perceive, interpret, and understand visual information from images and videos.",
            color: "gray"
        },
        {
            id: "natural-language-processing",
            icon: "📝",
            title: "Natural Language Processing (NLP)",
            description: "Building models to understand, generate, and translate human language for applications in information retrieval, conversation, and knowledge extraction.",
            color: "gray"
        },
        {
            id: "healthcare-ai",
            icon: "🏥",
            title: "AI for Healthcare & Life Sciences",
            description: "Applying AI to improve diagnostics, treatment planning, drug discovery, and biological understanding.",
            color: "gray"
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            gray: "from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.gray;
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
                    My research focuses on the intersection of <strong className="text-gray-800 dark:text-gray-200">computer science</strong> and <strong className="text-gray-800 dark:text-gray-200">biology</strong>, 
                    where I develop computational methods to solve complex biological problems.
                </p>

            </div>

            {/* Research Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchTopics.map((topic) => (
                    <div key={topic.id} className="group relative h-full">
                        <div className={`bg-gradient-to-br ${getColorClasses(topic.color)} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col min-h-[260px]`}>
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className="text-2xl">
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