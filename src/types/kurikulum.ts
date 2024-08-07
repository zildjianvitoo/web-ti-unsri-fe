type Kurikulum = {
  nama: string;
  deskripsi: string;
  file: string;
};

export type GetAllKurikulumResponse = {
  status: {
    code: number;
    message: string;
  };
  data: { kurikulum: Kurikulum[] };
};
