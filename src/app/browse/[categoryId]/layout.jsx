import HorizontalNav from "@/components/horizontal-nav";

export default function CategoryLayout({ children, params }) {
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="container flex flex-col px-5 space-y-6 lg:px-24">
        <HorizontalNav categoryId={params.categoryId} />
        <div className="subCategories">{children}</div>
      </div>
    </div>
  );
}
