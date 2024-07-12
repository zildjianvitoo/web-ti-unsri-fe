import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bottom-0 left-0 mt-16 border-t px-4 py-6 xl:px-20"
    >
      <div className="bg-background py-12 lg:py-16">
        <div className="relative mx-auto flex w-full flex-col gap-6">
          <div className="flex flex-col gap-10 text-sm md:gap-10 lg:flex-row">
            <div className="flex w-fit flex-col gap-3 lg:max-w-[40%]">
              <figure>
                <img
                  src={"/images/logo-ti-footer.png"}
                  alt="Logo BP2MI"
                  width={230}
                  height={80}
                />
              </figure>

              <p className="mt-4 text-justify text-lg leading-relaxed tracking-wide lg:mt-6 lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>

            <div className="flex w-full flex-col gap-8 tracking-wide max-lg:justify-between md:flex-row lg:gap-14 xl:gap-20">
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold text-black lg:text-xl">
                  Pages
                </h4>
                <ul className="flex flex-col gap-3 text-base text-slate-500 md:gap-4 md:text-lg lg:mt-6">
                  <li>
                    <Link to={"/"} className="duration-200 hover:text-black">
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/pengumuman"}
                      className="duration-200 hover:text-black"
                    >
                      Pengumuman
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/berita"}
                      className="duration-200 hover:text-black"
                    >
                      Berita
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold text-black lg:text-xl">
                  Detail
                </h4>
                <ul className="flex flex-row gap-6 text-base text-slate-500 md:gap-4 md:text-lg lg:mt-6">
                  <div className="flex flex-col gap-3">
                    <li>
                      <Link
                        to={"/informasi-jurusan"}
                        className="duration-200 hover:text-black"
                      >
                        Informasi Jurusan
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/kurikulum"}
                        className="duration-200 hover:text-black"
                      >
                        Kurikulum
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        to={"/struktur-jabatan"}
                        className="duration-200 hover:text-black"
                      >
                        Struktur Jabatan
                      </Link>
                    </li>
                  </div>
                  <div className="flex flex-col gap-3">
                    <li>
                      <Link
                        to={"/sarana-dan-prasarana"}
                        className="duration-200 hover:text-black"
                      >
                        Sarana & Prasarana
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/tenaga-pendidik"}
                        className="duration-200 hover:text-black"
                      >
                        Tenaga Pendidik
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        to={"/profil-lulusan"}
                        className="duration-200 hover:text-black"
                      >
                        Profil Lulusan
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold text-black lg:text-xl">
                  Contact
                </h4>
                <ul className="flex flex-col gap-3 text-base text-slate-500 md:gap-4 md:text-lg">
                  <li>
                    <a
                      href={"#"}
                      className="flex items-center gap-2 duration-200 hover:text-black"
                    >
                      <BsFillTelephoneFill />
                      (+62) 123-456-789
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="flex items-center gap-2 duration-200 hover:text-black"
                    >
                      <IoMdMail />
                      if.unsri@blabla.ac.id
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="flex items-center gap-2 break-keep text-base duration-200 hover:text-black"
                    >
                      <FaLocationDot />
                      Indralaya, Sumatera Selatan
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-3 lg:mt-8 lg:flex-row lg:gap-5 lg:py-5">
        <div className="flex gap-4 text-xl max-sm:w-full max-sm:justify-around lg:gap-6 lg:text-2xl">
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaTwitter />
          </a>

          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
        <div className="hidden h-[2px] bg-black/20 lg:block lg:w-[30%]" />
        <p className="text-base max-sm:mt-2">
          © Copyright 2024, Designed and Developed by{" "}
          <strong>Teknik Informatika Universitas Sriwijaya</strong>
        </p>
      </div>
    </footer>
  );
}
