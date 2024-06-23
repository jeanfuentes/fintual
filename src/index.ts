import { getAccessToken } from "./services/auth";
import { getBanks } from "./services/banks";
import { getGoal, getGoals } from "./services/goals";

export { getAccessToken } from "./services/auth";
export { getGoals, getGoal } from "./services/goals";
export { getBanks } from "./services/banks";

const test = async () => {
  const email = "jeanfuentesn@gmail.com";
  const password = "Fintualxdxd77@";

  const token = await getAccessToken({ email, password });

  const goals = await getGoals({ email, token });
  console.log(goals);

  const goal = await getGoal({ email, token }, "1052294");
  console.log(goal);

  const banks = await getBanks();
  console.log(banks);
};

test();
