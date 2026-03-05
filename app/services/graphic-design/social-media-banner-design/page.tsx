import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Social Media Banner Design",
  description: "Learn more about our Social Media Banner Design offerings and expertise.",
});

export default function SocialMediaBannerDesignPage() {
  return (
    <div>
      <PageHeader title="Social Media Banner Design" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Social Media Banner Design page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
