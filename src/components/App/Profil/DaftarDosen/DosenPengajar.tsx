import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import TenagaPendidikCard from "@/components/TenagaPendidikCard";
import { getAllDosen } from "@/lib/network-data/dosen";
import { useQuery } from "@tanstack/react-query";

export default function DosenPengajar() {
  const {
    data: data2,
    isLoading,
    error,
  } = useQuery({
    queryFn: getAllDosen,
    queryKey: ["dosen"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  const groupedByField: { [key: string]: typeof data2 } =
    data2?.reduce(
      (acc, dosen) => {
        dosen.bidangPenelitian.forEach((field) => {
          if (!acc[field.nama]) {
            acc[field.nama] = [];
          }
          acc[field.nama]!.push(dosen);
        });
        return acc;
      },
      {} as { [key: string]: typeof data2 },
    ) || {};

  return (
    <section
      id="tentang-jurusan"
      className="mt-20 flex w-full flex-col gap-16 px-4 md:gap-8 lg:px-12 xl:px-20"
    >
      {Object.keys(groupedByField).map((field, index) => (
        <div key={index}>
          <h1 className="mb-3 text-xl font-bold lg:text-4xl">{field}</h1>
          <div className="grid w-full grid-cols-2 justify-start gap-5 md:grid-flow-row md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {groupedByField[field]?.map((dosen, index) => (
              <TenagaPendidikCard teacher={dosen} key={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
