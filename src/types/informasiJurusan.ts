type InformasiJurusan = {
  informasi: string;
  visi: {
    judul: string;
    deskripsi: string;
  };
  misi: [
    {
      icon: string;
      judul: string;
      deskripsi: string;
    },
  ];
};

export type GetAllInformasiJurusanResponse = {
  status: {
    code: number;
    message: string;
  };
  data: InformasiJurusan;
};
