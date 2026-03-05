import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Contact Us",
  description: "Learn more about our Contact Us offerings and expertise.",
});

export default function ContactUsPage() {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Contact Us page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
