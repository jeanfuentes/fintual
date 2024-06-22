import axios from "../../config/axios";
import { Bank } from "./models/bank";
import { FintualBank } from "./models/fintual.bank";

export const getBanks = async (): Promise<Bank[]> => {
  const { data } = await axios.get<{ data: FintualBank[] }>("/banks");
  const banks = data.data.map((item) => ({
    id: item.id,
    name: item.attributes.name,
  }));
  return banks.sort((a, b) => a.name.localeCompare(b.name));
};
