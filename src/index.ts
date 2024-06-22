import { Credentials } from "./models/credentials";
import { Client } from "./models/client";
import { getAccessToken } from "./modules/auth/service";
import { getGoals, getGoal } from "./modules/goals";
import { getAsset } from "./modules/funds/service";

export const Fintual = async ({
  email,
  password,
}: Credentials): Promise<Client> => {
  try {
    const token = await getAccessToken(email, password);
    return {
      getGoals: () => getGoals(email, token),
      getGoal: (id: string) => getGoal(email, token, id),
      getAsset: (id: number) => getAsset(id),
    };
  } catch (err) {
    throw new Error("Check your credentials");
  }
};
