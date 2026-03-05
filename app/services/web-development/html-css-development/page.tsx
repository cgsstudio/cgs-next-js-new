import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";

export const metadata = constructMetadata({
  title: "Html Css Development",
  description: "Learn more about our Html Css Development offerings and expertise.",
});

export default function HtmlCssDevelopmentPage() {
  return (
    <div>
      <PageHeader title="Html Css Development" />
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the Html Css Development page. This is placeholder content that will be updated soon.
        </p>
      </div>
    </div>
  );
}
