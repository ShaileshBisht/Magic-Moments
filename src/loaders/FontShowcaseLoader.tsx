export default function FontShowcaseLoader() {
  const INITIAL_DISPLAY_COUNT = 8;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-80 mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-96 mx-auto mb-12 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: INITIAL_DISPLAY_COUNT }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
            </div>
          ))}
        </div>

        {/* Elegant Show More Button Skeleton */}
        <div className="text-center mt-12">
          <div className="relative">
            {/* Gradient fade effect skeleton */}
            <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />

            <div className="inline-flex items-center space-x-2 px-4 py-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20 animate-pulse"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16 animate-pulse opacity-70"></div>
              <div className="h-5 w-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
