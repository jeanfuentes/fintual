import axios from "axios";
import { Goal } from "@goals/models/goal";
import { GoalsResponse } from "@goals/models/goals.response";

const endpoint = "https://fintual.cl/api/goals";

export const getGoals = async (
  email: string,
  token: string
): Promise<Goal[]> => {
  const { data } = await axios.get<GoalsResponse>(
    `${endpoint}?user_email=${email}&user_token=${token}`
  );
  const goals = data.data.map((goal) => {
    const attributes = goal.attributes;
    return {
      id: goal.id,
      name: attributes.name_without_suffix,
      createdAt: attributes.created_at,
      deposited: attributes.deposited,
      profit: attributes.profit,
    };
  });
  return goals;
};
