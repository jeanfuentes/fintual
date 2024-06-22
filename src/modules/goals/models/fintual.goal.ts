import { FintualInvestment } from "./fintual.investment";

export interface FintualGoal {
  id: string;
  type: string;
  attributes: {
    name_without_suffix: string;
    created_at: string;
    deposited: number;
    hidden: boolean;
    profit: number;
    regime: string;
    investments: FintualInvestment[];
  };
}
