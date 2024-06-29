import axios from "../config/axios";
import { Credentials } from "../models/credentials";
import { Token } from "../models/token";

export const getAccessToken = async ({
  email,
  password,
}: Credentials): Promise<string> => {
  const { data } = await axios.post<{ data: Token }>("/access_tokens", {
    user: { email, password },
  });
  return data.data.attributes.token;
};
