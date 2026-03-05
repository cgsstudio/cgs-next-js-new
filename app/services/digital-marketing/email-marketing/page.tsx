import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Email Marketing",
  description: "Learn more about our Email Marketing offerings and expertise.",
});

export default function EmailMarketingPage() {
  return (
    <div>
      <PageHeader title="Email Marketing" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Email Marketing page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
