import { getToken } from "@token/service";
import { getGoals } from "@goals/service";

interface FintualClient {
  email: string;
  password: string;
}

export const Fintual = async ({ email, password }: FintualClient) => {
  try {
    const token = await getToken(email, password);
    return {
      getGoals: () => getGoals(email, token),
    };
  } catch (err) {
    throw new Error("Check your credentials");
  }
};
