import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-purple-600 dark:text-purple-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Go Back Home
          </Link>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Looking for something specific?</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/gallery" className="text-purple-600 hover:underline">
                Gallery
              </Link>
              <Link href="/pricing" className="text-purple-600 hover:underline">
                Pricing
              </Link>
              <Link href="/tutorials" className="text-purple-600 hover:underline">
                Tutorials
              </Link>
              <Link href="/blog" className="text-purple-600 hover:underline">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
