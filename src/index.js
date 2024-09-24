const axios = require("axios");
const { AUTH_URL, GOALS_URL } = require("./config/api");

const getAccessToken = async ({ email, password }) => {
  try {
    const { data } = await axios.post(AUTH_URL, { user: { email, password } });
    const { token } = data.data.attributes;
    return token;
  } catch (err) {
    throw new Error("Error al obtener token");
  }
};

const getGoals = async ({ email, token }) => {
  try {
    const { data } = await axios.get(
      `${GOALS_URL}?user_email=${email}&user_token=${token}`
    );
    const goals = data.data.map(({ id, attributes }) => ({
      id,
      name: attributes.name_without_suffix,
      createdAt: attributes.created_at,
      deposited: attributes.deposited,
      depositedNotNet: attributes.not_net_deposited,
      profit: attributes.profit,
      withdrawn: attributes.withdrawn,
      type: attributes.goal_type,
      regime: attributes.regime,
    }));
    return goals;
  } catch (err) {
    throw new Error("Error al obtener objetivos");
  }
};

module.exports = { getAccessToken, getGoals };
