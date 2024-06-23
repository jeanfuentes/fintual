import axios from "../config/axios";
import { Asset } from "../models/asset";
import { AssetResponse } from "../models/asset.response";

export const getAsset = async (id: number): Promise<Asset> => {
  const { data } = await axios.get<AssetResponse>(`/real_assets/${id}`);
  return data.data;
};
