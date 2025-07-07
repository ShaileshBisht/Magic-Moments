import Link from "next/link";
import { tutorials } from "../../../src/constants";
import { notFound } from "next/navigation";
import TutorialHeader from "../../../src/components/TutorialHeader";
import TutorialContent from "../../../src/components/TutorialContent";

interface TutorialPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.id,
  }));
}

export default function TutorialPage({ params }: TutorialPageProps) {
  const tutorial = tutorials.find((t) => t.id === params.slug);

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Enhanced Back Button */}
        <div className="mb-8">
          <Link
            href="/tutorials"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-200 cursor-pointer"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Tutorials</span>
          </Link>
        </div>

        {/* Tutorial Header */}
        <TutorialHeader tutorial={tutorial} />

        {/* Tutorial Content */}
        <TutorialContent tutorialId={tutorial.id} />

        {/* Enhanced Call to Action */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-2xl shadow-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          </div>

          <div className="relative z-10 p-8 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tutorial Complete
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Creating?</h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Put your new knowledge to the test and start creating amazing AI artwork! Explore our gallery for inspiration or dive into
                more tutorials.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/gallery"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Explore Gallery
                </Link>

                <Link
                  href="/tutorials"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold hover:scale-105 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  More Tutorials
                </Link>
              </div>

              {/* Additional Quick Actions */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm opacity-75 mb-4">Quick Actions</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors duration-200 text-sm font-medium cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    Read Blog
                  </Link>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors duration-200 text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    Share Tutorial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
