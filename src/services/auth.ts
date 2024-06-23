import axios from "../config/axios";
import { Credentials } from "../models/credentials";
import { TokenResponse } from "../models/token.response";

export const getAccessToken = async ({
  email,
  password,
}: Credentials): Promise<string> => {
  const { data } = await axios.post<TokenResponse>("/access_tokens", {
    user: { email, password },
  });
  return data.data.attributes.token;
};
