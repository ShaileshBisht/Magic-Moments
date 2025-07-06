import Link from "next/link";
import { Tutorial } from "../constants/tutorials";

interface TutorialCardProps {
  tutorial: Tutorial;
}

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  const getLevelColor = (level: Tutorial["level"]) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300";
      case "Intermediate":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300";
      case "Advanced":
        return "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300";
      default:
        return "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(tutorial.level)}`}>{tutorial.level}</span>
            <span className="ml-3 text-gray-600 dark:text-gray-300 text-sm">{tutorial.duration}</span>
          </div>
          {tutorial.category && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
              {tutorial.category}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{tutorial.title}</h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{tutorial.description}</p>

        <Link
          href={tutorial.link}
          className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition-colors duration-200"
        >
          Start Tutorial
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
