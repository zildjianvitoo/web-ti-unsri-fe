import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-sm !bg-gray-100 bg-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
