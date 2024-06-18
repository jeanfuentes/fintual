import axios from "axios";
import { Goal, toGoal } from "./models/goal";
import { GoalReponse } from "./models/goal.response";

const endpoint = "https://fintual.cl/api/goals";

export const getGoals = async (
  email: string,
  token: string
): Promise<Goal[]> => {
  const { data } = await axios.get<{ data: GoalReponse[] }>(
    `${endpoint}?user_email=${email}&user_token=${token}`
  );
  const goals = data.data.map(toGoal);
  return goals;
};

export const getGoal = async (
  email: string,
  token: string,
  id: string
): Promise<Goal> => {
  const { data } = await axios.get<{ data: GoalReponse }>(
    `${endpoint}/${id}?user_email=${email}&user_token=${token}`
  );
  const goal = toGoal(data.data);
  return goal;
};
