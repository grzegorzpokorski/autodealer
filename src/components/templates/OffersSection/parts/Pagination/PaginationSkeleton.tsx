export const PaginationSkeleton = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-center items-center gap-2">
        <div className="bg-skeleton rounded w-10 h-9"></div>
        <div className="bg-skeleton rounded w-10 h-9"></div>
        <div className="bg-skeleton rounded w-10 h-9"></div>
      </div>
    </div>
  );
};
