import {
  GetAllPengumumanResponse,
  GetPengumumanBySlugResponse,
} from "@/types/pengumuman";
import { axiosInstance } from "../axiosInstance";

export async function getAllPengumuman({
  pageIndex = 1,
}: {
  pageIndex?: number;
}) {
  const { data } = await axiosInstance.get<GetAllPengumumanResponse>(
    `/pengumuman?halaman=${pageIndex}`,
  );

  return data.data;
}

export async function getPengumumanBySlug(slug: string) {
  const { data } = await axiosInstance.get<GetPengumumanBySlugResponse>(
    `/pengumuman/${slug}`,
  );

  return data.data.pengumuman;
}
