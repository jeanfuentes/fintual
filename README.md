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

// Goals module
const goals = await client.getGoals();
const goal = await client.getGoal("<goal id>");

// Assets module
const asset = await client.getAsset(245);

// Banks module
const banks = await client.getBanks();
```
