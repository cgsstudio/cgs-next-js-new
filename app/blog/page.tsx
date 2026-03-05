import Link from "next/link";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
    title: "Blog | Insights & News",
    description: "Read our latest thoughts on web development, design, and SEO.",
});

const posts = [
    {
        slug: "why-nextjs-app-router",
        title: "Why We Choose Next.js App Router for 2024",
        excerpt: "Exploring the benefits of Server Components and nested routing in modern Next.js.",
        date: "2024-01-15",
    },
    {
        slug: "tailwind-css-best-practices",
        title: "Tailwind CSS Best Practices for Large Teams",
        excerpt: "How to maintain scalable and clean utility classes in enterprise applications.",
        date: "2024-02-02",
    },
    {
        slug: "seo-in-the-age-of-ai",
        title: "SEO in the Age of AI Search",
        excerpt: "Adapting your structure and metadata for LLM-based search engines.",
        date: "2024-03-10",
    },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-[64rem]">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Blog</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">
                Latest news and articles from our team.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <article key={post.slug} className="group flex flex-col space-y-2">
                        <time className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(post.date).toLocaleDateString()}
                        </time>
                        <h2 className="text-2xl font-bold tracking-tight">
                            <Link href={`/blog/${post.slug}`} className="hover:underline">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {post.excerpt}
                        </p>
                        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-500 font-medium inline-flex items-center">
                            Read more &rarr;
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
