import { GetAllBeritaResponse, GetBeritaBySlugResponse } from "@/types/berita";
import { axiosInstance } from "../axiosInstance";

export async function getAllBerita() {
  const { data } = await axiosInstance.get<GetAllBeritaResponse>("/berita");

  return data.data.berita;
}

export async function getBeritaBySlug(slug: string) {
  const { data } = await axiosInstance.get<GetBeritaBySlugResponse>(
    `/berita/${slug}`,
  );

  return data.data.berita;
}
