import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Search Engine Optimization Seo",
  description: "Learn more about our Search Engine Optimization Seo offerings and expertise.",
});

export default function SearchEngineOptimizationSeoPage() {
  return (
    <div>
      <PageHeader title="Search Engine Optimization Seo" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Search Engine Optimization Seo page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
