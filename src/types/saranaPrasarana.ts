type saranaPrasarana = {
  id: string;
  nama: string;
  lokasi: string;
  foto: string;
};

export type GetAllSaranaPrasaranaResponse = {
  status: {
    code: number;
    message: string;
  };
  data: {
    saranaPrasarana: saranaPrasarana[];
  };
};
