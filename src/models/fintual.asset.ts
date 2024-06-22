export interface FintualAsset {
  data: {
    id: string;
    type: string;
    attributes: {
      name: string;
      symbol: string;
      serie: string;
    };
  };
}
