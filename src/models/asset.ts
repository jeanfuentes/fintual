export interface Asset {
  id: string;
  type: string;
  attributes: {
    name: string;
    symbol: string;
    serie: string;
    start_date: string | null;
    end_date: string | null;
    previous_asset_id: number | null;
    last_day: { net_asset_value: number; date: string };
    conceptual_asset_id: number;
  };
}
