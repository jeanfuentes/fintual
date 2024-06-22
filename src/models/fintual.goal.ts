export interface FintualGoal {
  data: {
    id: string;
    type: string;
    attributes: {
      name_without_suffix: string;
      created_at: string;
      deposited: number;
      hidden: boolean;
      profit: number;
      investments: {
        weight: number;
        asset_id: number;
      }[];
      regime: string;
    };
  };
}
