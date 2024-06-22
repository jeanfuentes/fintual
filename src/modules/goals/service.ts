import axios from "../../config/axios";
import { Goal } from "../../models/goal";
import { FintualGoals } from "../../models/fintual.goals";
import { FintualGoal } from "../../models/fintual.goal";
import { getAsset } from "../funds/service";

export const getGoals = async (
  email: string,
  token: string
): Promise<Goal[]> => {
  const { data } = await axios.get<FintualGoals>(
    `/goals?user_email=${email}&user_token=${token}`
  );
  const goals = [];
  for (const item of data.data) {
    const attributes = item.attributes;
    const investments = await getInvestments(attributes.investments);
    goals.push({
      id: item.id,
      name: attributes.name_without_suffix,
      createdAt: attributes.created_at,
      deposited: attributes.deposited,
      hidden: attributes.hidden,
      profit: attributes.profit,
      regime: attributes.regime,
      investments,
    });
  }
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
  const investments = await getInvestments(attributes.investments);
  return {
    id: goal.id,
    name: attributes.name_without_suffix,
    createdAt: attributes.created_at,
    deposited: attributes.deposited,
    hidden: attributes.hidden,
    profit: attributes.profit,
    regime: attributes.regime,
    investments,
  };
};

const getInvestments = async (
  data: {
    weight: number;
    asset_id: number;
  }[]
) => {
  const investments: { id: number; name: string; weight: number }[] = [];
  for (const item of data) {
    const { id, name } = await getAsset(item.asset_id);
    investments.push({ id, name, weight: item.weight });
  }
  return investments;
};
