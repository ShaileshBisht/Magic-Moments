export default function GalleryLoader() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-64 mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-96 mx-auto mb-12 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden animate-pulse">
              <div className="aspect-square bg-gray-300 dark:bg-gray-600"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
