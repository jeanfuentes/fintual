## Installation

`npm install fintual`

## Usage

```js
import { Fintual } from "fintual";

const client = await Fintual({
  email: "<user email>",
  password: "<user password>",
});

// Get user goals
const goals = await client.getGoals();
console.table(goals);

// Get user goal by id
const goal = await client.getGoal("<goal id>");
console.log(goal);
```
