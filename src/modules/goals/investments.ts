import { getAsset } from "../funds/service";
import { FintualInvestment } from "./models/fintual.investment";
import { Investment } from "./models/investment";

export const getInvestments = async (
  items: FintualInvestment[]
): Promise<Investment[]> => {
  const investments = [];
  for (const item of items) {
    const { id, name } = await getAsset(item.asset_id);
    investments.push({ id, name, weight: item.weight });
  }
  return investments;
};
