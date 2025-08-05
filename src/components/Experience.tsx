import React from 'react';

const experiences = [
  {
    icon: '🔬',
    role: 'Undergraduate Research Assistant',
    org: 'IUST',
    location: 'Tehran, Iran',
    date: 'Sept 2024 - Present',
    supervisor: 'Dr. Reza Entezari-Maleki',
    paper: 'RNA structure prediction using deep learning',
    details: [
      'Developed and implemented machine and deep learning models for RNA-related research',
      'Used frameworks: PyTorch, PyTorch Geometric, Keras, TensorFlow, Scikit-learn, Pandas',
    ],
    tech: ['PyTorch', 'PyG', 'Keras', 'TensorFlow', 'Scikit-learn', 'Pandas'],
    color: 'from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50',
  },
  {
    icon: '💻',
    role: 'Software Engineer Intern',
    org: 'System Group',
    location: 'Tehran, Iran',
    date: 'Summer 2024',
    details: [
      'Back-End Developer Internship',
      'Worked with C# and .NET Framework',
    ],
    tech: ['C#', '.NET Framework'],
    color: 'from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="card">
      <h2 className="text-3xl font-bold section-heading mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row md:items-center bg-gradient-to-br ${exp.color} rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md`}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mr-0 md:mr-6 mb-4 md:mb-0">
              <span className="text-3xl">{exp.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-lg dark:text-white text-gray-800">{exp.role}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold">{exp.org}</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                  {exp.date} | {exp.location}
                </div>
              </div>
              {exp.supervisor && (
                <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <span className="font-medium">Supervisor:</span> {exp.supervisor}
                </div>
              )}
              {exp.paper && (
                <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <span className="font-medium">Academic paper:</span> {exp.paper}
                </div>
              )}
              <ul className="list-disc list-inside dark:text-gray-300 text-gray-700 leading-relaxed mb-2">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              {exp.tech && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 