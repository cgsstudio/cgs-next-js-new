import { constructMetadata } from "@/utils/seo";
import { notFound } from "next/navigation";
import Link from "next/link";

const posts: Record<string, {
    title: string;
    category: string;
    date: string;
    readTime: string;
    body: string;
}> = {
    "why-nextjs-is-the-future-of-web-development": {
        title: "Why Next.js is the Future of Web Development",
        category: "Web Development",
        date: "March 1, 2026",
        readTime: "5 min read",
        body: `Next.js has rapidly become one of the most popular frameworks for building modern web applications. With the introduction of the App Router in Next.js 13 and beyond, developers now have an incredibly powerful, flexible, and performant way to build everything from simple landing pages to complex enterprise applications.

## What Makes Next.js Special?

At its core, Next.js builds on top of React and adds server-side rendering (SSR), static site generation (SSG), API routes, and now with the App Router — React Server Components. This hybrid rendering model means you can pick the right strategy per page, optimizing both performance and developer experience.

## The App Router Revolution

The App Router introduced in Next.js 13 fundamentally changes how routing works. Instead of a file-based pages directory, you now use a more semantic \`app/\` directory with layouts, loading states, and error boundaries baked in at the folder level.

## Conclusion

With its excellent developer experience, strong performance defaults, and growing ecosystem, Next.js is well-positioned to remain the go-to framework for web development in 2026 and beyond.`,
    },
    "top-ai-trends-shaping-2026": {
        title: "Top AI Trends Shaping 2026",
        category: "AI Development",
        date: "February 22, 2026",
        readTime: "7 min read",
        body: `Artificial intelligence continues to evolve at a breakneck pace. As we move through 2026, several key trends are transforming industries and creating new opportunities for businesses.

## 1. Generative AI Goes Mainstream

Generative AI tools have moved well beyond novelty. Businesses are now using them for content generation, design automation, code completion, and customer service at scale.

## 2. Multimodal AI Models

The latest AI models can understand and generate text, images, video, and audio simultaneously. This opens up entirely new product categories and interaction paradigms.

## 3. AI Agents and Automation

Autonomous AI agents that can plan, research, and execute multi-step tasks are becoming practical. This is transforming how businesses handle repetitive workflows.

## Conclusion

The businesses that invest in understanding and adopting AI will have a significant competitive advantage. The key is to start small, experiment quickly, and scale what works.`,
    },
    "seo-strategies-that-actually-work": {
        title: "SEO Strategies That Actually Work in 2026",
        category: "Digital Marketing",
        date: "February 15, 2026",
        readTime: "6 min read",
        body: `SEO has changed dramatically over the past few years. With AI-powered search, zero-click results, and Google's continuous algorithm updates, what worked in 2022 may no longer be effective today.

## Focus on Search Intent

Modern SEO is less about keywords and more about understanding what users actually want. Google rewards content that comprehensively satisfies the searcher's intent.

## Build Topical Authority

Instead of targeting isolated keywords, focus on building deep, comprehensive coverage of your core topics. Internal linking, content clusters, and consistent publishing all contribute to topical authority.

## Core Web Vitals Still Matter

Page experience signals — particularly loading speed, interactivity, and visual stability — remain important ranking factors. Invest in performance optimization.

## Conclusion

The fundamentals of good SEO haven't changed: create genuinely useful content, earn quality backlinks, and provide a great user experience. Focus on those and the rankings will follow.`,
    },
    "shopify-vs-woocommerce-which-is-right-for-you": {
        title: "Shopify vs WooCommerce: Which is Right for You?",
        category: "Web Development",
        date: "February 10, 2026",
        readTime: "8 min read",
        body: `Choosing the right eCommerce platform is one of the most important decisions you'll make for your online store. Shopify and WooCommerce are the two dominant options, but they serve different needs.

## Shopify: All-in-One Simplicity

Shopify is a fully hosted SaaS platform. You don't need to worry about hosting, security updates, or server maintenance. It's ideal for businesses that want to move fast without deep technical involvement.

**Pros:** Easy setup, reliable hosting, excellent app ecosystem, great support.
**Cons:** Monthly fees, limited customization without coding, transaction fees on non-Shopify payments.

## WooCommerce: Unlimited Flexibility

WooCommerce is a WordPress plugin that turns any WordPress site into a full-featured store. It's open source, highly customizable, and gives you full control.

**Pros:** Completely free core, unlimited customization, no transaction fees, powerful with WordPress ecosystem.
**Cons:** Requires hosting and maintenance, steeper learning curve, more responsibility on you.

## The Verdict

Choose **Shopify** if you want speed and simplicity. Choose **WooCommerce** if you need total control and have the technical resources to manage it.`,
    },
    "how-to-build-a-custom-ai-chatbot": {
        title: "How to Build a Custom AI Chatbot for Your Business",
        category: "AI Development",
        date: "February 5, 2026",
        readTime: "10 min read",
        body: `AI chatbots have evolved from simple rule-based systems to sophisticated conversational agents powered by large language models (LLMs). Building one for your business is now more accessible than ever.

## Step 1: Define Your Use Case

Before writing a single line of code, clearly define what your chatbot should do. Customer support? Lead generation? Internal knowledge base? The use case will shape every decision that follows.

## Step 2: Choose Your LLM Provider

Popular options include OpenAI (GPT-4), Anthropic (Claude), and Google (Gemini). Each has different strengths, pricing, and API capabilities.

## Step 3: Build the Conversation Logic

Use a framework like LangChain or a simple API wrapper to handle the conversation. Implement memory to maintain context across messages.

## Step 4: Add Your Knowledge Base

Use Retrieval-Augmented Generation (RAG) to feed your chatbot with your business-specific data — product info, FAQs, documentation — so it can answer accurately.

## Step 5: Deploy and Monitor

Deploy via API and integrate into your website or app. Set up logging and monitoring to track performance and continuously improve.`,
    },
    "ui-ux-design-principles-for-2026": {
        title: "UI/UX Design Principles Every Designer Should Follow in 2026",
        category: "UI/UX Design",
        date: "January 28, 2026",
        readTime: "6 min read",
        body: `Great design is invisible — it lets users accomplish their goals without friction. As user expectations continue to rise, here are the principles that separate good design from great design in 2026.

## 1. Clarity Over Cleverness

Users shouldn't have to think. Every element on the screen should have a clear purpose. Avoid clever layouts that sacrifice clarity for aesthetics.

## 2. Micro-interactions Matter

Small animations and state transitions communicate system feedback and make the interface feel alive and responsive. Used well, they dramatically improve perceived quality.

## 3. Accessibility is Non-negotiable

Designing for accessibility isn't a nice-to-have — it's essential. Use proper contrast ratios, keyboard navigation, and semantic HTML to ensure everyone can use your product.

## 4. Mobile-First Thinking

Despite increasing screen sizes, users access content on all devices. Design for the smallest screen first, then progressively enhance for larger ones.

## Conclusion

Great UI/UX comes from empathy — understanding your users' needs, frustrations, and goals, and designing systems that serve them effortlessly.`,
    },
};

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = posts[slug];
    if (!post) return constructMetadata({ title: "Blog Post Not Found" });
    return constructMetadata({
        title: post.title,
        description: post.body.slice(0, 155),
    });
}

export function generateStaticParams() {
    return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = posts[slug];

    if (!post) notFound();

    const paragraphs = post.body.split("\n\n");

    return (
        <div className="pt-28 pb-24">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Back link */}
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#ed1d24] transition-colors mb-10"
                >
                    ← Back to Blogs
                </Link>

                {/* Category + Meta */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-semibold bg-[#ed1d24]/10 text-[#ed1d24] border border-[#ed1d24]/20 rounded-full px-3 py-1">
                        {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-10">
                    {post.title}
                </h1>

                {/* Divider */}
                <div className="w-12 h-[3px] bg-[#ed1d24] rounded-full mb-10" />

                {/* Body */}
                <article className="prose prose-invert prose-lg max-w-none">
                    {paragraphs.map((para, i) => {
                        if (para.startsWith("## ")) {
                            return (
                                <h2 key={i} className="text-xl font-heading font-bold text-white mt-10 mb-4">
                                    {para.replace("## ", "")}
                                </h2>
                            );
                        }
                        if (para.startsWith("**") && para.endsWith("**")) {
                            return (
                                <p key={i} className="font-semibold text-white mb-4">
                                    {para.replace(/\*\*/g, "")}
                                </p>
                            );
                        }
                        return (
                            <p key={i} className="text-gray-300 leading-relaxed mb-6">
                                {para}
                            </p>
                        );
                    })}
                </article>
            </div>
        </div>
    );
}
