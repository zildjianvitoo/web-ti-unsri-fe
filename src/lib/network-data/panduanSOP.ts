import { GetAllPanduanSOPResponse } from "@/types/panduanSOP";
import { axiosInstance } from "../axiosInstance";

export async function getPanduanSOP() {
  const { data } =
    await axiosInstance.get<GetAllPanduanSOPResponse>("/panduan-dan-sop");

  return data.data;
}
