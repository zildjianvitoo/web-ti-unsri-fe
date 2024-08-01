import { Skeleton } from "./ui/skeleton";

export default function LoadingScreen() {
  return (
    <section className="grid min-h-screen w-full grid-cols-1 gap-x-10 gap-y-8 px-4 md:grid-cols-2 md:gap-y-12 lg:mt-10 lg:grid-cols-3 lg:px-12 xl:px-20">
      {Array.from({ length: 3 }, () => (
        <div>
          <Skeleton className="h-[325px] w-full" />
          <Skeleton className="mt-2 h-[60px]" />
          <Skeleton className="mt-2 h-[30px] w-2/5" />
        </div>
      ))}
    </section>
  );
}
