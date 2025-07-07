import { tutorialContent, TutorialContent as TutorialContentType } from "../constants/tutorialContent";

interface TutorialContentProps {
  tutorialId: string;
}

export default function TutorialContent({ tutorialId }: TutorialContentProps) {
  const content = tutorialContent.find((content) => content.id === tutorialId);

  if (!content) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tutorial Overview</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-4">
                {/* Section number */}
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mt-1">
                  {index + 1}
                </div>

                <div className="flex-1 space-y-4">
                  {/* Section title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    {section.title}
                  </h3>

                  {/* Section content */}
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {Array.isArray(section.content) ? (
                      <div className="space-y-3">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : section.content.type === "list" ? (
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                        <ul className="space-y-3">
                          {section.content.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                              <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-3"></div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Divider (except for last item) */}
              {index < content.sections.length - 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Ready to Begin?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Follow along step by step to master this tutorial</p>
              </div>
            </div>
            <div className="text-sm font-medium text-purple-600 dark:text-purple-400">{content.sections.length} sections</div>
          </div>
        </div>
      </div>
    </div>
  );
}
