import { getAccessToken } from "./modules/auth";
import { getGoals, getGoal } from "./modules/goals";
import { getAsset } from "./modules/funds";
import { getBanks } from "./modules/banks";

interface Credentials {
  email: string;
  password: string;
}

export const Fintual = async ({ email, password }: Credentials) => {
  try {
    const token = await getAccessToken(email, password);
    return {
      getGoals: () => getGoals(email, token),
      getGoal: (id: string) => getGoal(email, token, id),
      getAsset: (id: number) => getAsset(id),
      getBanks: () => getBanks(),
    };
  } catch (err) {
    throw new Error("Check your credentials");
  }
};
