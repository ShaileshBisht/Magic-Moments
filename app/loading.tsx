export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Loading...</h2>
          <p className="text-gray-600 dark:text-gray-300">Please wait while we load the page for you.</p>
        </div>
      </div>
    </div>
  );
}
