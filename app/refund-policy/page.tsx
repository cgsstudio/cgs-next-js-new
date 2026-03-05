import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Refund Policy",
  description: "Learn more about our Refund Policy offerings and expertise.",
});

export default function RefundPolicyPage() {
  return (
    <div>
      <PageHeader title="Refund Policy" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Refund Policy page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
