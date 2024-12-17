import HorizontalNav from "@/components/horizontal-nav";

export default function CategoryLayout({ children, params }) {
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="container flex flex-col space-y-6">
        <HorizontalNav categoryId={params.categoryId} />
        {children}
      </div>
    </div>
  );
}
