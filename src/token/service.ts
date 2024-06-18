import axios from "axios";
import { TokenResponse } from "./models/token.response";

const endpoint = "https://fintual.cl/api/access_tokens";

export const getToken = async (
  email: string,
  password: string
): Promise<string> => {
  const { data } = await axios.post<TokenResponse>(endpoint, {
    user: { email, password },
  });
  return data.data.attributes.token;
};
