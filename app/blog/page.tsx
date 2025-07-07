import BlogPostCard from "../../src/components/BlogPostCard";
import Newsletter from "../../src/components/Newsletter";
import { blogPosts } from "../../src/constants/blog";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Latest insights and updates about AI art generation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <Newsletter />
      </div>
    </div>
  );
}
