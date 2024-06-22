import axios from "../../config/axios";
import { Asset } from "../../models/asset";
import { FintualAsset } from "../../models/fintual.asset";

export const getAsset = async (id: string): Promise<Asset> => {
  const { data } = await axios.get<FintualAsset>(`/real_assets/${id}`);
  const asset = data.data;
  const attributes = asset.attributes;
  return {
    id: asset.id,
    type: asset.type,
    name: attributes.name,
    symbol: attributes.symbol,
    serie: attributes.serie,
  };
};
