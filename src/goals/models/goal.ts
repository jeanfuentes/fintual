import { GoalReponse } from "./goal.response";

export interface Goal {
  id: string;
  name: string;
  createdAt: string;
  deposited: number;
  profit: number;
}

export const toGoal = (goal: GoalReponse): Goal => {
  const attributes = goal.attributes;
  return {
    id: goal.id,
    name: attributes.name_without_suffix,
    createdAt: attributes.created_at,
    deposited: attributes.deposited,
    profit: attributes.profit,
  };
};
