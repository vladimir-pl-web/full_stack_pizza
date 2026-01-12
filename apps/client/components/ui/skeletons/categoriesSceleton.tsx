import { Skeleton } from '../skeleton'

export const CategoriesSkeleton = () => {
  return (
    <div className="inline-flex justify-between gap-1 rounded-2xl bg-gray-50 p-1 dark:bg-neutral-200">
      {Array.from({ length: 7 }).map((_, i) => (
        <Skeleton key={i} className="h-11 w-20 rounded-2xl bg-gray-200 dark:bg-neutral-300" />
      ))}
    </div>
  )
}
