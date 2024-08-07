import { axiosInstance } from "../axiosInstance";
import { GetAllKurikulumResponse } from "@/types/kurikulum";

export async function getAllKurikulum() {
  const { data } =
    await axiosInstance.get<GetAllKurikulumResponse>("/kurikulum");

  return data.data.kurikulum;
}
