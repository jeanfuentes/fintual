const axios = require("axios");
const config = require("./config");

const getToken = async (email, password) => {
  const { data } = await axios.post(config.tokenURL, {
    user: { email, password },
  });
  return data.data.attributes.token;
};

const getGoals = async (email, token) => {
  const { data } = await axios.get(
    `${config.goalsURL}?user_email=${email}&user_token=${token}`
  );
  console.log(JSON.stringify(data.data, null, 2));
  const goals = data.data.map((goal) => {
    const attributes = goal.attributes;
    return {
      id: goal.id,
      name: attributes.name_without_suffix,
      createdAt: attributes.created_at,
      deposited: attributes.deposited,
      profit: attributes.profit,
    };
  });
  return goals;
};

exports.Fintual = async ({ email, password }) => {
  try {
    const token = await getToken(email, password);
    return {
      getGoals: () => getGoals(email, token),
    };
  } catch (err) {
    throw new Error("Error: check your credentials");
  }
};
