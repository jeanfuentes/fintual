export interface TokenResponse {
  data: {
    type: string;
    attributes: { token: string };
  };
}
