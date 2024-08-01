import { GetAllBeritaResponse, GetBeritaBySlugResponse } from "@/types/berita";
import { axiosInstance } from "../axiosInstance";

export async function getAllBerita({
  pageIndex = 1,
}: {
  pageIndex?: number | string;
}) {
  const { data } = await axiosInstance.get<GetAllBeritaResponse>(
    `/berita?halaman=${pageIndex}`,
  );

  return data.data;
}

export async function getBeritaBySlug(slug: string) {
  const { data } = await axiosInstance.get<GetBeritaBySlugResponse>(
    `/berita/${slug}`,
  );

  return data.data.berita;
}
