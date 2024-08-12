type Panduan = {
  judul: string;
  file: string;
};
type SOP = {
  judul: string;
  file: string;
};

export type GetAllPanduanSOPResponse = {
  status: {
    code: number;
    message: string;
  };
  data: { panduan: Panduan[]; sop: SOP[] };
};
