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
