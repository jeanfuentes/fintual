export interface GoalReponse {
  id: string;
  type: string;
  attributes: {
    name: string;
    name_without_suffix: string;
    created_at: string;
    deposited: number;
    hidden: boolean;
    profit: number;
  };
}
