import axios from "../config/axios";
import { Bank } from "../models/bank";
import { BanksResponse } from "../models/banks.response";

export const getBanks = async (): Promise<Bank[]> => {
  const { data } = await axios.get<BanksResponse>("/banks");
  return data.data;
};
