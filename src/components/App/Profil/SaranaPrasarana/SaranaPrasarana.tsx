import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import { getAllSaranaPrasarana } from "@/lib/network-data/saranaPrasarana";
import { useQuery } from "@tanstack/react-query";

export default function SaranaPrasarana() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllSaranaPrasarana,
    queryKey: ["saranaPrasarana"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <div className="mt-10 grid w-full grid-flow-row grid-cols-2 gap-3 gap-y-7 px-4 md:grid-cols-2 lg:mt-20 lg:px-12 xl:grid-cols-3 xl:px-20">
      {data?.map((item, i) => (
        <figure key={i}>
          <div className="group overflow-hidden rounded-md lg:rounded-lg">
            <img
              src={item.foto}
              alt=""
              className="transition-all duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-2">
            <h6 className="text-xl font-bold lg:text-2xl">{item.nama}</h6>
            <p className="-mt-1 text-base lg:text-lg">{item.lokasi}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
