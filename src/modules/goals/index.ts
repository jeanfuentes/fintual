import axios from "../../config/axios";
import { Goal } from "./models/goal";
import { FintualGoal } from "./models/fintual.goal";
import { getInvestments } from "./investments";

export const getGoals = async (
  email: string,
  token: string
): Promise<Goal[]> => {
  const { data } = await axios.get<{ data: FintualGoal[] }>(
    `/goals?user_email=${email}&user_token=${token}`
  );
  const goals = [];
  for (const item of data.data) {
    const goal = await toGoal(item);
    goals.push(goal);
  }
  return goals;
};

export const getGoal = async (
  email: string,
  token: string,
  id: string
): Promise<Goal> => {
  const { data } = await axios.get<{ data: FintualGoal }>(
    `/goals/${id}?user_email=${email}&user_token=${token}`
  );
  return toGoal(data.data);
};

const toGoal = async ({ id, attributes }: FintualGoal): Promise<Goal> => {
  const investments = await getInvestments(attributes.investments);
  return {
    id,
    name: attributes.name_without_suffix,
    createdAt: attributes.created_at,
    deposited: attributes.deposited,
    hidden: attributes.hidden,
    profit: attributes.profit,
    regime: attributes.regime,
    investments,
  };
};
