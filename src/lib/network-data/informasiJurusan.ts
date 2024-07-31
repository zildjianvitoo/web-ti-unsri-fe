import { GetAllInformasiJurusanResponse } from "@/types/informasiJurusan";
import { axiosInstance } from "../axiosInstance";

export async function getAllInformasiJurusan() {
  const { data } =
    await axiosInstance.get<GetAllInformasiJurusanResponse>(
      "/informasi-jurusan",
    );

  return data.data;
}
