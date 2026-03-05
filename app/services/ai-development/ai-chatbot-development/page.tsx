import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Ai Chatbot Development",
  description: "Learn more about our Ai Chatbot Development offerings and expertise.",
});

export default function AiChatbotDevelopmentPage() {
  return (
    <div>
      <PageHeader title="Ai Chatbot Development" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Ai Chatbot Development page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
