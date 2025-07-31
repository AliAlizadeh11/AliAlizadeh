import React from 'react';

const honors = [
  {
    icon: '🏅',
    title: 'Top 10% in Class GPA',
    highlight: '17.37/20',
    subtitle: 'School of Computer Science, IUST',
    details: 'Class of 110 students',
    color: 'from-gray-200 to-gray-300',
    highlightColor: 'text-gray-700 dark:text-gray-300',
  },
  {
    icon: '🎓',
    title: 'Top 0.5% in Iranian University Entrance Exam',
    highlight: 'Rank 175 / 127,000',
    subtitle: 'Mathematics and Physics majors',
    details: 'National Ranking',
    color: 'from-gray-200 to-gray-300',
    highlightColor: 'text-gray-700 dark:text-gray-300',
  },
];

const Honors: React.FC = () => {
  return (
    <section id="honors" className="card">
      <h2 className="text-3xl font-bold section-heading mb-8">Honors & Awards</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {honors.map((honor, idx) => (
          <div
            key={idx}
            className={`flex flex-col h-full bg-gradient-to-br ${honor.color} dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md`}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{honor.icon}</span>
              <div>
                <div className="font-bold text-lg dark:text-white text-gray-800 mb-1">{honor.title}</div>
                <div className={`text-2xl font-extrabold ${honor.highlightColor}`}>{honor.highlight}</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">{honor.subtitle}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{honor.details}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Honors; 