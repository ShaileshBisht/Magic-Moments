export default function FontShowcaseLoader() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-80 mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-96 mx-auto mb-12 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
