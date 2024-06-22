import { Goal } from "./goal";
import { Asset } from "./asset";

export interface Client {
  getGoals: () => Promise<Goal[]>;
  getGoal: (id: string) => Promise<Goal>;
  getAsset: (id: string) => Promise<Asset>;
}
