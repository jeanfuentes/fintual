export interface FintualGoals {
  data: {
    id: string;
    type: string;
    attributes: {
      name_without_suffix: string;
      created_at: string;
      deposited: number;
      hidden: boolean;
      profit: number;
      regime: string;
      investments: {
        weight: number;
        asset_id: number;
      }[];
    };
  }[];
}
