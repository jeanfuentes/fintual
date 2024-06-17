export interface GoalsResponse {
  data: Goal[];
}

interface Goal {
  id: string;
  type: string;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  name_without_suffix: string;
  created_at: string;
  deposited: number;
  hidden: boolean;
  profit: number;
}
