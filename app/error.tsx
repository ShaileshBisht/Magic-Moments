"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">Oops!</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Something went wrong</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We encountered an unexpected error. Please try again or go back to the homepage.
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

          <div className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            <p>Need help?</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/contact" className="text-purple-600 hover:underline">
                Contact Support
              </Link>
              <Link href="/gallery" className="text-purple-600 hover:underline">
                Gallery
              </Link>
              <Link href="/pricing" className="text-purple-600 hover:underline">
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
