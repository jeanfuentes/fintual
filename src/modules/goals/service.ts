import axios from "../../config/axios";
import { Goal } from "../../models/goal";
import { FintualGoals } from "../../models/fintual.goals";
import { FintualGoal } from "../../models/fintual.goal";

export const getGoals = async (
  email: string,
  token: string
): Promise<Goal[]> => {
  const { data } = await axios.get<FintualGoals>(
    `/goals?user_email=${email}&user_token=${token}`
  );
  const goals = data.data.map((item) => {
    const attributes = item.attributes;
    return {
      id: item.id,
      name: attributes.name_without_suffix,
      createdAt: attributes.created_at,
      deposited: attributes.deposited,
      hidden: attributes.hidden,
      profit: attributes.profit,
      regime: attributes.regime,
    };
  });
  return goals;
};

export const getGoal = async (
  email: string,
  token: string,
  id: string
): Promise<Goal> => {
  const { data } = await axios.get<FintualGoal>(
    `/goals/${id}?user_email=${email}&user_token=${token}`
  );
  const goal = data.data;
  const attributes = goal.attributes;
  return {
    id: goal.id,
    name: attributes.name_without_suffix,
    createdAt: attributes.created_at,
    deposited: attributes.deposited,
    hidden: attributes.hidden,
    profit: attributes.profit,
    regime: attributes.regime,
  };
};
