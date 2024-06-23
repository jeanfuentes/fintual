import axios from "../config/axios";
import { Goal } from "../models/goal";
import { GoalsResponse } from "../models/goals.response";
import { GoalResponse } from "../models/goal.response";

export const getGoals = async ({
  email,
  token,
}: {
  email: string;
  token: string;
}): Promise<Goal[]> => {
  const { data } = await axios.get<GoalsResponse>(
    `/goals?user_email=${email}&user_token=${token}`
  );
  return data.data;
};

export const getGoal = async (
  { email, token }: { email: string; token: string },
  id: string
): Promise<Goal> => {
  const { data } = await axios.get<GoalResponse>(
    `/goals/${id}?user_email=${email}&user_token=${token}`
  );
  return data.data;
};
