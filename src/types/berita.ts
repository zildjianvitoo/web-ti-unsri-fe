import { Pagination } from "./pagination";

export type Berita = {
  id: string;
  judul: string;
  slug: string;
  konten: string;
  thumbnail: string;
  tanggalDibuat: string;
  tanggalDiperbarui: string;
};

export type GetAllBeritaResponse = {
  status: {
    code: number;
    message: string;
  };
  data: { berita: Berita[]; paginasi: Pagination };
};

export type GetBeritaBySlugResponse = {
  status: {
    code: number;
    message: string;
  };
  data: { berita: Berita };
};
