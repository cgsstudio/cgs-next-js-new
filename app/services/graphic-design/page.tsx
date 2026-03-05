import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Graphic Design",
  description: "Learn more about our Graphic Design offerings and expertise.",
});

export default function GraphicDesignPage() {
  return (
    <div>
      <PageHeader title="Graphic Design" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Graphic Design page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
