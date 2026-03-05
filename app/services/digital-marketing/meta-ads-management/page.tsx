import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Meta Ads Management",
  description: "Learn more about our Meta Ads Management offerings and expertise.",
});

export default function MetaAdsManagementPage() {
  return (
    <div>
      <PageHeader title="Meta Ads Management" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Meta Ads Management page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
