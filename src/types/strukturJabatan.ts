export type StrukturJabatan = {
  pimpinan: [
    {
      id: string;
      nama: string;
      jabatan: string;
      deskripsi: string;
      foto: string;
    },
  ];
  admin: [
    {
      id: string;
      name: string;
      foto: string;
      lokasi: string;
    },
  ];
};

export type Pimpinan = {
  id: string;
  nama: string;
  jabatan: string;
  deskripsi: string;
  foto: string;
};
export type Admin = {
  id: string;
  name: string;
  foto: string;
  lokasi: string;
};

export type GetStrukturJabatanResponse = {
  status: {
    code: number;
    message: string;
  };
  data: {
    strukturJabatan: StrukturJabatan;
    pimpinan: Pimpinan[];
    admin: Admin[];
  };
};
