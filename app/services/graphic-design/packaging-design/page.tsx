import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Packaging Design",
  description: "Learn more about our Packaging Design offerings and expertise.",
});

export default function PackagingDesignPage() {
  return (
    <div>
      <PageHeader title="Packaging Design" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Packaging Design page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
