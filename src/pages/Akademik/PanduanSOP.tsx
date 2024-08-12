import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import SectionTitle from "@/components/SectionTitle";
import { getPanduanSOP } from "@/lib/network-data/panduanSOP";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { CgArrowTopRight } from "react-icons/cg";

export default function PanduanSOP() {
  const { data, isLoading, error } = useQuery({
    queryFn: getPanduanSOP,
    queryKey: ["panduan-dan-sop"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <>
      <section id="informasi-jurusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Panduan & SOP" />
        </div>
        <div className="mt-10 flex h-full w-full flex-col gap-10 px-4 md:gap-14 lg:px-12 xl:px-20">
          <div className="flex flex-col gap-2">
            <h1 className="w-fit bg-gradient-to-r from-secondary-100 to-primary-100 bg-clip-text text-2xl font-bold text-transparent lg:text-5xl">
              Panduan
            </h1>
            <p className="text-sm lg:max-w-screen-2xl lg:text-lg">
              Panduan Kampus Universitas adalah dokumen atau referensi yang
              disediakan oleh sebuah universitas untuk membantu mahasiswa,
              dosen, dan staf dalam memahami berbagai aturan, prosedur,
              fasilitas, dan layanan yang ada di kampus. Panduan ini biasanya
              mencakup informasi tentang hal-hal berikut:
            </p>
            <div className="lg:gap- grid grid-flow-row grid-cols-1 gap-2 lg:grid-cols-2">
              {data?.panduan.map((item, index) => (
                <a
                  className={cn(
                    `flex flex-nowrap items-center justify-between rounded-md border-2 border-primary px-2 py-2 font-semibold transition-all duration-300 ease-in-out hover:bg-primary max-md:text-sm`,
                    {
                      "even:border-secondary hover:bg-secondary md:border-secondary":
                        index % 4 < 2,
                    },
                  )}
                  href={item.file}
                  key={index + "button"}
                >
                  {item.judul}
                  <CgArrowTopRight className="text-xl" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="w-fit bg-gradient-to-r from-secondary-100 to-primary-100 bg-clip-text text-2xl font-bold text-transparent lg:text-5xl">
              Standar Operasional Prosedur
            </h1>
            <p className="text-sm lg:max-w-screen-2xl lg:text-lg">
              SOP (Standard Operating Procedure) Kampus adalah serangkaian
              panduan dan instruksi yang dirancang untuk memastikan bahwa
              berbagai proses dan kegiatan di kampus berjalan dengan konsisten,
              efisien, dan sesuai dengan standar yang telah ditetapkan. SOP
              Kampus mencakup prosedur operasional untuk berbagai aspek, seperti
              akademik, administrasi, manajemen fasilitas, dan layanan lainnya
              yang ada di kampus.
            </p>
            <div className="lg:gap- grid grid-flow-row grid-cols-1 gap-2 lg:grid-cols-2">
              {data?.sop.map((item, index) => (
                <a
                  className={cn(
                    `flex flex-nowrap items-center justify-between rounded-md border-2 border-primary px-2 py-2 font-semibold transition-all duration-300 ease-in-out hover:bg-primary max-md:text-sm`,
                    {
                      "even:border-secondary hover:bg-secondary md:border-secondary":
                        index % 4 < 2,
                    },
                  )}
                  href={item.file}
                  key={index + "button"}
                >
                  {item.judul}
                  <CgArrowTopRight className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
