import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Website Ui Ux Design",
  description: "Learn more about our Website Ui Ux Design offerings and expertise.",
});

export default function WebsiteUiUxDesignPage() {
  return (
    <div>
      <PageHeader title="Website Ui Ux Design" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Website Ui Ux Design page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
