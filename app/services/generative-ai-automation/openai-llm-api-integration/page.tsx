import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Openai Llm Api Integration",
  description: "Learn more about our Openai Llm Api Integration offerings and expertise.",
});

export default function OpenaiLlmApiIntegrationPage() {
  return (
    <div>
      <PageHeader title="Openai Llm Api Integration" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Openai Llm Api Integration page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
