import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Generative Ai Automation",
  description: "Learn more about our Generative Ai Automation offerings and expertise.",
});

export default function GenerativeAiAutomationPage() {
  return (
    <div>
      <PageHeader title="Generative Ai Automation" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Generative Ai Automation page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
