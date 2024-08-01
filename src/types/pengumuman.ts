import { Pagination } from "./pagination";

type Pengumuman = {
  id: string;
  judul: string;
  slug: string;
  konten: string;
  thumbnail: string;
  tanggalDibuat: string;
  tanggalDiperbarui: string;
};

export type GetAllPengumumanResponse = {
  status: {
    code: number;
    message: string;
  };
  data: {
    pengumuman: Pengumuman[];
    paginasi: Pagination;
  };
};

export type GetPengumumanBySlugResponse = {
  status: {
    code: number;
    message: string;
  };
  data: {
    pengumuman: Pengumuman;
  };
};
