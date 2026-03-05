import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Terms And Conditions",
  description: "Learn more about our Terms And Conditions offerings and expertise.",
});

export default function TermsAndConditionsPage() {
  return (
    <div>
      <PageHeader title="Terms And Conditions" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Terms And Conditions page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
