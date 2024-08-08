import { useTheme } from "@/hooks/useTheme";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <footer
      id="footer"
      className="bottom-0 left-0 mt-16 border-t px-4 py-6 lg:px-12 xl:px-20"
    >
      <div className="bg-background py-12 lg:py-16">
        <div className="relative mx-auto flex w-full flex-col gap-6">
          <div className="flex flex-col gap-10 text-sm md:gap-10 lg:flex-row">
            <div className="flex w-fit flex-col gap-3 lg:max-w-[40%]">
              <figure>
                <img
                  src={
                    theme === "light"
                      ? "/images/logo-ti-footer.png"
                      : "/images/logo-ti-footer-dark.png"
                  }
                  alt="Logo BP2MI"
                  width={230}
                  height={80}
                />
              </figure>

              <p className="mt-4 text-justify text-base leading-relaxed tracking-wide lg:mt-6 lg:w-[80%]">
                Palembang: Jl. Masjid Al Gazali, Bukit Lama, Kec. Ilir Bar. I,
                Kota Palembang, Sumatera Selatan 30128
              </p>
              <p className="text-justify text-base leading-relaxed tracking-wide lg:w-[80%]">
                Indralaya: Jl. Raya Palembang - Prabumulih No.KM. 32, Indralaya
                Indah, Indralaya, Ogan Ilir Regency, South Sumatra 30862
              </p>
            </div>

            <div className="flex w-full flex-col gap-8 tracking-wide max-lg:justify-between md:flex-row lg:gap-14 xl:gap-20">
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold text-black dark:text-white lg:text-xl">
                  Pages
                </h4>
                <ul className="flex flex-col gap-3 text-base text-slate-500 dark:text-slate-200 md:gap-4 md:text-lg lg:mt-6">
                  <li>
                    <Link
                      to={"/"}
                      className="duration-200 hover:text-black dark:hover:text-slate-100"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/pengumuman"}
                      className="duration-200 hover:text-black dark:hover:text-slate-100"
                    >
                      Pengumuman
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/berita"}
                      className="duration-200 hover:text-black dark:hover:text-slate-100"
                    >
                      Berita
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold text-black dark:text-white lg:text-xl">
                  Detail
                </h4>
                <ul className="flex flex-row gap-6 text-base text-slate-500 dark:text-slate-200 md:gap-4 md:text-lg lg:mt-6">
                  <div className="flex flex-col gap-3">
                    <li>
                      <Link
                        to={"/informasi-jurusan"}
                        className="duration-200 hover:text-black dark:hover:text-slate-100"
                      >
                        Informasi Jurusan
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/kurikulum"}
                        className="duration-200 hover:text-black dark:hover:text-slate-100"
                      >
                        Kurikulum
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        to={"/struktur-jabatan"}
                        className="duration-200 hover:text-black dark:hover:text-slate-100"
                      >
                        Struktur Jabatan
                      </Link>
                    </li>
                  </div>
                  <div className="flex flex-col gap-3">
                    <li>
                      <Link
                        to={"/sarana-dan-prasarana"}
                        className="duration-200 hover:text-black dark:hover:text-slate-100"
                      >
                        Sarana & Prasarana
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/tenaga-pendidik"}
                        className="duration-200 hover:text-black dark:hover:text-slate-100"
                      >
                        Tenaga Pendidik
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        to={"/profil-lulusan"}
                        className="duration-200 hover:text-black dark:hover:text-slate-100"
                      >
                        Profil Lulusan
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold text-black dark:text-white lg:text-xl">
                  Contact
                </h4>
                <ul className="flex flex-col gap-3 text-base text-slate-500 dark:text-slate-200 md:gap-4 md:text-lg">
                  <li>
                    <a
                      href={"#"}
                      className="flex items-center gap-2 duration-200 hover:text-black dark:hover:text-slate-100"
                    >
                      <BsFillTelephoneFill />
                      (+62) 123-456-789
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="flex items-center gap-2 duration-200 hover:text-black dark:hover:text-slate-100"
                    >
                      <IoMdMail />
                      if.unsri@blabla.ac.id
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="flex items-center gap-2 break-keep text-base duration-200 hover:text-black dark:hover:text-slate-100"
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
        <div className="hidden h-[2px] bg-black/20 dark:bg-white lg:block lg:w-[30%]" />
        <p className="text-base max-sm:mt-2">
          © Copyright 2024, Designed and Developed by{" "}
          <strong>Teknik Informatika Universitas Sriwijaya</strong>
        </p>
      </div>
    </footer>
  );
}
