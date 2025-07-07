import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  image: string;
  author?: string;
  tags?: string[];
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group">
      <div className="relative h-48 overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
          <time dateTime={post.date} className="font-medium">
            {post.date}
          </time>
          <span className="mx-2 text-gray-400">•</span>
          <span className="font-medium">{post.readTime} min read</span>
        </div>
        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition-colors duration-300 group-hover:translate-x-1"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
