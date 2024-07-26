import SectionTitle from "@/components/SectionTitle";
import SaranaPrasaranaGallery from "@/components/App/Profil/SaranaPrasarana/SaranaPrasarana";

export default function SaranaPrasarana() {
  return (
    <>
      <section id="sarana-prasarana">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Sarana & Prasarana" />
          <SaranaPrasaranaGallery />
        </div>
      </section>
    </>
  );
}
