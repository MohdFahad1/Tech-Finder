import HorizontalNav from "@/components/horizontal-nav";

export default function CategoryLayout({ children, params }) {
  return (
    <div className="mb-6 flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-6 container">
        <HorizontalNav categoryId={params.categoryId} />
        {children}
      </div>
    </div>
  );
}
