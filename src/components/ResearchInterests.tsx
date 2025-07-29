import React, { useState } from 'react';

const ResearchInterests: React.FC = () => {
    const [expandedInterest, setExpandedInterest] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentInterestId, setCurrentInterestId] = useState<string | null>(null);

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

export default ResearchInterests; 