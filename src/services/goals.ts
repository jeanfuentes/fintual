import axios from "../config/axios";
import { Goal } from "../models/goal";

export const getGoals = async ({
  email,
  token,
}: {
  email: string;
  token: string;
}): Promise<Goal[]> => {
  const { data } = await axios.get<{ data: Goal[] }>(
    `/goals?user_email=${email}&user_token=${token}`
  );
  return data.data;
};

export const getGoalById = async (
  { email, token }: { email: string; token: string },
  id: string
): Promise<Goal> => {
  const { data } = await axios.get<{ data: Goal }>(
    `/goals/${id}?user_email=${email}&user_token=${token}`
  );
  return data.data;
};
