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
  data: { berita: Berita[] };
};

export type GetBeritaBySlugResponse = {
  status: {
    code: number;
    message: string;
  };
  data: { berita: Berita };
};
