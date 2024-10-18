const { GOALS_URL } = require("../config");

const getGoals = async ({ email, token }) => {
  const response = await fetch(
    `${GOALS_URL}?user_email=${email}&user_token=${token}`
  );
  if (!response.ok) throw new Error("getGoals: !ok");

  const json = await response.json();
  if (!json) throw new Error("getGoals: no json");
  if (!json.data) throw new Error("getGoals: no data");

  const goals = json.data.map(({ id, attributes }) => ({
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
};

module.exports = { getGoals };
