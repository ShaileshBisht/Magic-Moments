"use client";

import { useState } from "react";
import { fonts } from "../constants";

export default function FontShowcase() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 8;

  const displayedFonts = showAll ? fonts : fonts.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreFonts = fonts.length > INITIAL_DISPLAY_COUNT;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our AI Models Can Generate Text in These Fonts</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">Experience the power of AI with our extensive font collection</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedFonts.map((font) => (
            <div key={font.name} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`text-2xl mb-4 ${font.className}`}>{font.text}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{font.name}</div>
            </div>
          ))}
        </div>

        {hasMoreFonts && (
          <div className="text-center mt-12">
            <div className="relative">
              {!showAll && (
                <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
              )}

              <button
                onClick={() => setShowAll(!showAll)}
                className="group relative inline-flex items-center justify-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-full bg-purple-50 dark:bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />

                <div className="relative flex items-center space-x-2 px-4 py-2">
                  {showAll ? (
                    <>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="font-medium">Show Less</span>
                    </>
                  ) : (
                    <>
                      <span className="font-medium">Show More</span>
                      <span className="text-sm opacity-70">({fonts.length - INITIAL_DISPLAY_COUNT} more)</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
