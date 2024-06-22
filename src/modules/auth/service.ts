import axios from "../../config/axios";
import { FintualToken } from "../../models/fintual.token";

export const getAccessToken = async (
  email: string,
  password: string
): Promise<string> => {
  const { data } = await axios.post<FintualToken>("/access_tokens", {
    user: { email, password },
  });
  return data.data.attributes.token;
};
