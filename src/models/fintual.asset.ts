export interface FintualAsset {
  data: {
    id: number;
    type: string;
    attributes: {
      name: string;
      symbol: string;
      serie: string;
    };
  };
}
