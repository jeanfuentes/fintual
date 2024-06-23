> A wrapper for the [Fintual API](https://fintual.cl/api-docs/index.html)

[![NPM Version](https://img.shields.io/npm/v/fintual?style=flat-square)](https://www.npmjs.com/package/fintual)
[![NPM Downloads](https://img.shields.io/npm/d18m/fintual?style=flat-square)](https://www.npmjs.com/package/fintual)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/fintual?style=flat-square)](https://bundlephobia.com/package/fintual)

## Installation

```bash
npm install fintual
```

## Usage

```js
import { getAccessToken, getGoals, getGoal, getBanks } from "fintual";

const email = "<user email>";
const password = "<user password>";

// https://fintual.cl/api/access_tokens
const token = await getAccessToken({ email, password });

// https://fintual.cl/api/goals?user_email=${email}&user_token=${token}
const goals = await getGoals({ email, token });

// https://fintual.cl/api/goals/${id}?user_email=${email}&user_token=${token}
const goal = await getGoal({ email, token }, "<goal id>");

// https://fintual.cl/api/banks
const banks = await getBanks();

// https://fintual.cl/api/real_assets/${id}
// goal -> attributes -> investment -> asset_id
const asset = await getAsset("<asset id>");
```
