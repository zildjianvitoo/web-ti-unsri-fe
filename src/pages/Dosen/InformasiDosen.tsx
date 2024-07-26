import DetailDosen from "@/components/App/Dosen/DetailDosen";
import SectionTitle from "@/components/SectionTitle";

export default function InformasiDosen() {
  return (
    <>
      <section id="title-page">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Informasi Dosen" />
        </div>
      </section>
      <DetailDosen />
    </>
  );
}
