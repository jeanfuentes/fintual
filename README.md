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
import { getAccessToken, getGoals, getGoalById } from "fintual";

// You have to save this token
const token = await getAccessToken({
  email: "<user email>",
  password: "<user email>",
});

// The API requires email and token in every request

const goals = await getGoals({ email, token });

const goal = await getGoalById({ email, token }, "<goal id>");
```

```jsonc
// Goals response
[
  {
    "id": "111",
    "attributes": {
      "name": "Goal #1",
      "deposited": 125000,
      "profit": 15000
      // ...
    }
  },
  {
    "id": "222"
    // ...
  },
  {
    "id": "333"
    // ...
  }
]

// Goal by id response
{
  "id": "85234",
  "attributes": {
    "name": "Travel",
    "deposited": 3000000,
    "profit": 250000
    // ...
  }
}
```
