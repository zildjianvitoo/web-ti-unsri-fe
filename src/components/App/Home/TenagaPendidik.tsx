import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import TenagaPendidikCard from "@/components/TenagaPendidikCard";
import { getAllDosen } from "@/lib/network-data/dosen";
import { useQuery } from "@tanstack/react-query";

export default function TenagaPendidik() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllDosen,
    queryKey: ["dosen"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="tenaga-pendidik"
    >
      <div className="flex flex-col gap-7 lg:gap-10">
        <h1 className="text-3xl font-bold md:text-4xl">Tenaga Pendidik</h1>

        <div className="relative grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {data
            ?.slice(0, 5)
            .map((item, index) => (
              <TenagaPendidikCard key={index} teacher={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
