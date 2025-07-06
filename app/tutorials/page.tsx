import Link from "next/link";
import { tutorials } from "../../src/constants";
import TutorialCard from "../../src/components/TutorialCard";

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Tutorials</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn how to create amazing artwork with MagicMoments. From beginner basics to advanced techniques, our comprehensive tutorials
            will help you master AI art generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Want to learn more?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out our blog for the latest tips, tricks, and insights into AI art generation.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
            >
              Visit Blog
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
