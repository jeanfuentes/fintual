export interface Goal {
  id: string;
  type: string;
  attributes: {
    name: string;
    name_without_suffix: string;
    nav: number;
    created_at: string;
    timeframe: number;
    deposited: number;
    hidden: boolean;
    profit: number;
    investments: { weight: number; asset_id: number }[];
    public_link: string | null;
    param_id: number;
    goal_type: string;
    translated_goal_type: string;
    regime: string;
    completed: boolean;
    has_any_withdrawals: boolean;
    eligible_for_deposits: boolean;
    eligible_for_internal_mlt: boolean;
    monthly_deposit: number;
    simulated_deposit: number;
    funds_source: string;
    funds_source_description: string | null;
    not_net_deposited: number;
    withdrawn: number;
    group_goal_id: number | null;
  };
}
