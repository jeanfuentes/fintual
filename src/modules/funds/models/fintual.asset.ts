export interface FintualAsset {
  id: string;
  type: string;
  attributes: {
    name: string;
    symbol: string;
    serie: string;
    start_date: string;
    end_date: string;
    previous_asset_id: string;
    last_day: { net_asset_value: number; date: string };
    conceptual_asset_id: number;
  };
}
