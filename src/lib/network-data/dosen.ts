import { axiosInstance } from "../axiosInstance";
import { GetAllDosenResponse, GetDosenByIDResponse } from "@/types/dosen";

export async function getAllDosen() {
  const { data } = await axiosInstance.get<GetAllDosenResponse>("/dosen");

  return data.data.dosen;
}

export async function getDosenByID(slug: string) {
  const { data } = await axiosInstance.get<GetDosenByIDResponse>(
    `/dosen/${slug}`,
  );

  return data.data;
}
