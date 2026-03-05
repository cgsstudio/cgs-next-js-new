import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/utils/seo';

// Mock DB for demonstration
const posts = {
    "why-nextjs-app-router": {
        title: "Why We Choose Next.js App Router for 2024",
        description: "Exploring the benefits of Server Components and nested routing in modern Next.js.",
        date: "2024-01-15",
        content: "Next.js App Router represents a massive shift in how we build React applications. By introducing Server Components, nested layouts, and simplified data fetching, Vercel has laid the foundation for the next decade of web development...",
    },
    "tailwind-css-best-practices": {
        title: "Tailwind CSS Best Practices for Large Teams",
        description: "How to maintain scalable and clean utility classes in enterprise applications.",
        date: "2024-02-02",
        content: "When working with Tailwind CSS on a large team, discipline is key. Establishing standards for class ordering, utilizing tools like prettier-plugin-tailwindcss, and knowing when to abstract repetative patterns using @apply or components...",
    },
    "seo-in-the-age-of-ai": {
        title: "SEO in the Age of AI Search",
        description: "Adapting your structure and metadata for LLM-based search engines.",
        date: "2024-03-10",
        content: "With the rise of ChatGPT, Perplexity, and SGE, traditional SEO is morphing. Instead of keyword stuffing, the focus must shift towards answering complex questions comprehensively. Structured data, clear semantics, and high-quality, original content are more critical than ever.",
    },
};

type Props = {
    params: Promise<{ slug: string }>;
};

// Next 15 Dynamic Metadata
export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const post = posts[params.slug as keyof typeof posts];

    if (!post) {
        return constructMetadata({
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        });
    }

    return constructMetadata({
        title: post.title,
        description: post.description,
    });
}

// Next 15 Dynamic Page Props
export default async function BlogPostPage(props: Props) {
    const params = await props.params;
    const post = posts[params.slug as keyof typeof posts];

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-[48rem]">
            <header className="mb-10 text-center">
                <time className="text-sm font-medium text-blue-600 dark:text-blue-500 mb-2 block">
                    {new Date(post.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </time>
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                    {post.title}
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                    {post.description}
                </p>
            </header>
            <div className="prose dark:prose-invert prose-lg max-w-none">
                <p>{post.content}</p>
                <p className="mt-8 text-sm text-gray-400">
                    <em>Note: This is a simulated blog post for demonstration purposes.</em>
                </p>
            </div>
        </article>
    );
}
