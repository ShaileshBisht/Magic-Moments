import { Tutorial } from "../constants/tutorials";

interface TutorialHeaderProps {
  tutorial: Tutorial;
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800";
    case "Advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-800";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 border-gray-200 dark:border-gray-800";
  }
};

const getLevelIcon = (level: string) => {
  switch (level) {
    case "Beginner":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "Intermediate":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      );
    case "Advanced":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function TutorialHeader({ tutorial }: TutorialHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="relative h-80 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-75"></div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <div className="text-center text-white max-w-4xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                ✨ Tutorial
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{tutorial.title}</h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${getLevelColor(
                  tutorial.level
                )}`}
              >
                {getLevelIcon(tutorial.level)}
                {tutorial.level}
              </span>

              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {tutorial.duration}
              </span>

              {tutorial.category && (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  {tutorial.category}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About This Tutorial</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{tutorial.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
