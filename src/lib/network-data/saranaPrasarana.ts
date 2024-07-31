import { axiosInstance } from "../axiosInstance";
import { GetAllSaranaPrasaranaResponse } from "@/types/saranaPrasarana";

export async function getAllSaranaPrasarana() {
  const { data } =
    await axiosInstance.get<GetAllSaranaPrasaranaResponse>("/sarana-prasarana");

  return data.data.saranaPrasarana;
}
