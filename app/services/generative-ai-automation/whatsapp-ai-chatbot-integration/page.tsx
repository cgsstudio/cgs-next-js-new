import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Whatsapp Ai Chatbot Integration",
  description: "Learn more about our Whatsapp Ai Chatbot Integration offerings and expertise.",
});

export default function WhatsappAiChatbotIntegrationPage() {
  return (
    <div>
      <PageHeader title="Whatsapp Ai Chatbot Integration" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Whatsapp Ai Chatbot Integration page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
