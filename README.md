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
import { Fintual } from "fintual";

const client = await Fintual({
  email: "<user email>",
  password: "<user password>",
});
```

```js
// Get user goals
const goals = await client.getGoals();
```

```json
[
  {
    "id": "111111",
    "name": "Inbox",
    "deposited": 12345,
    "profit": 1000
  },
  {
    "id": "222222",
    "name": "APV A",
    "deposited": 12345,
    "profit": 1000
  }
]
```

```js
// Get user goal by id
const goal = await client.getGoal("111111");
```

```json
{
  "id": "111111",
  "name": "Inbox",
  "deposited": 12345,
  "profit": 1000
}
```

```js
// Get banks
const banks = await client.getBanks();

// Get asset
const asset = await client.getAsset(245);
```
