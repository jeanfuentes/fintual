import { getToken } from "./token/service";
import { getGoals, getGoal } from "./goals/service";

interface Credentials {
  email: string;
  password: string;
}

export const Fintual = async ({ email, password }: Credentials) => {
  try {
    const token = await getToken(email, password);
    return {
      getGoals: () => getGoals(email, token),
      getGoal: (id: string) => getGoal(email, token, id),
    };
  } catch (err) {
    throw new Error("Check your credentials");
  }
};
