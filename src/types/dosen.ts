type Dosen = {
  id: string;
  nama: string;
  nip: string;
  nidn: string;
  jabatan: string;
  foto: string;
  pendidikan: [
    {
      jenjang: string;
      jurusan: string;
      institusi: string;
    },
  ];
  bidangPenelitian: [
    {
      nama: string;
    },
  ];
};

export type GetAllDosenResponse = {
  status: {
    code: number;
    message: string;
  };
  data: { dosen: Dosen[] };
};

export type GetDosenByIDResponse = {
  status: {
    code: number;
    message: string;
  };
  data: { dosen: Dosen };
};
