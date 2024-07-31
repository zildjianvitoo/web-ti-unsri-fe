import {
  GetAllPengumumanResponse,
  GetPengumumanBySlugResponse,
} from "@/types/pengumuman";
import { axiosInstance } from "../axiosInstance";

export async function getAllPengumuman() {
  const { data } =
    await axiosInstance.get<GetAllPengumumanResponse>("/pengumuman");

  return data.data.pengumuman;
}

export async function getPengumumanBySlug(slug: string) {
  const { data } = await axiosInstance.get<GetPengumumanBySlugResponse>(
    `/pengumuman/${slug}`,
  );

  return data.data.pengumuman;
}
