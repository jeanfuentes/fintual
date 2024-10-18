const { AUTH_URL } = require("../config");

const getAccessToken = async ({ email, password }) => {
  const response = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: { email, password } }),
  });
  if (!response.ok) throw new Error("getAccessToken: !ok");

  const json = await response.json();
  if (!json) throw new Error("getAccessToken: no json");
  if (!json.data) throw new Error("getAccessToken: no data");
  if (!json.data.attributes) throw new Error("getAccessToken: no attributes");

  const { token } = json.data.attributes;
  if (!token) throw new Error("getAccessToken: no token");
  return token;
};

module.exports = { getAccessToken };
