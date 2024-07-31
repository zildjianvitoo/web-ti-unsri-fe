import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import { getDosenByID } from "@/lib/network-data/dosen";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// const data = {
//   image: img,
//   name: "Philifs Bryan",
//   nip: "1921456974596224",
//   nidn: "1921456974596224",
//   jabatan: "Dosen Tetap",
//   riwayatPendidikan: [
//     "S1 - Lorem ipsum dolor sit amet",
//     "S2 - Lorem ipsum dolor sit amet",
//     "S3 - Lorem ipsum dolor sit amet",
//   ],
//   bidangRiset: [
//     "Lorem ipsum dolor sit amet",
//     "Lorem ipsum dolor sit amet",
//     "Lorem ipsum dolor sit amet",
//   ],
// };

export default function DetailDosen() {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery({
    queryFn: () => getDosenByID(slug!),
    queryKey: ["dosen", slug],
    enabled: !!slug,
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      id="tentang-jurusan"
      className="mt-20 flex w-full flex-row gap-16 px-4 md:gap-8 lg:px-12 xl:px-20"
    >
      <div className="mx-auto flex flex-col items-center gap-5 md:flex-row">
        <div className="relative flex aspect-[9/11] h-96 flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-br from-primary from-[23%] to-secondary">
          <figure className="flex h-full w-full justify-center">
            <img
              src={data?.foto}
              alt="tenaga-pendidik"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
        <div>
          <table className="custom-table rounded-xl !text-base leading-6 lg:!text-lg">
            <tr>
              <td>Nama</td>
              <td>{data?.nama}</td>
            </tr>
            <tr>
              <td>NIP</td>
              <td>{data?.nip}</td>
            </tr>
            <tr>
              <td>NIDN</td>
              <td>{data?.nidn}</td>
            </tr>
            <tr>
              <td>Jabatan</td>
              <td>{data?.jabatan}</td>
            </tr>
            <tr>
              <td>Riwayat Pendidikan</td>
              <td>
                <ul>
                  {data?.pendidikan.map((item, index) => (
                    <li key={index}>
                      {`${item.jenjang} - ${item.jurusan}`}{" "}
                      <span className="font-medium">{item.institusi}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Bidang Riset</td>
              <td>
                <ul>
                  {data?.bidangPenelitian.map((item, index) => (
                    <li key={index}>{`${index + 1}. ${item.nama}`}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
}
