"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">Error</h1>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Application Error</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                A critical error occurred. Please refresh the page or try again later.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors mr-4"
              >
                Try Again
              </button>

              <Link
                href="/"
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
