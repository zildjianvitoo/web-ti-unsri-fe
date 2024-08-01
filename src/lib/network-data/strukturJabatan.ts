import { axiosInstance } from "../axiosInstance";
import { GetStrukturJabatanResponse } from "@/types/strukturJabatan";

export async function getStrukturJabatan() {
  const { data } =
    await axiosInstance.get<GetStrukturJabatanResponse>("/struktur-jabatan");

  return data.data;
}
