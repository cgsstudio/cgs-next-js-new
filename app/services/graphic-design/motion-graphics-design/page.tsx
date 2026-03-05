import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Motion Graphics Design",
  description: "Learn more about our Motion Graphics Design offerings and expertise.",
});

export default function MotionGraphicsDesignPage() {
  return (
    <div>
      <PageHeader title="Motion Graphics Design" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Motion Graphics Design page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
