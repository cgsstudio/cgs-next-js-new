import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Ui Ux Design",
  description: "Learn more about our Ui Ux Design offerings and expertise.",
});

export default function UiUxDesignPage() {
  return (
    <div>
      <PageHeader title="Ui Ux Design" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Ui Ux Design page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
