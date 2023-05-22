export const FiltersSkeleton = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-2 md:items-center justify-between py-8 text-base">
      <div className="hidden md:inline-flex w-48 h-6 rounded bg-skeleton"></div>
      <div className="flex flex-row flex-wrap items-center justify-between gap-2">
        <div className="w-12 h-6 rounded bg-skeleton"></div>
        <div className="w-52 h-10 rounded bg-skeleton"></div>
      </div>
    </nav>
  );
};
