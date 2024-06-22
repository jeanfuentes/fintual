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
    "profit": 1000,
    ...
  },
  {
    "id": "222222",
    "name": "APV A",
    "deposited": 12345,
    "profit": 1000,
    ...
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
  "profit": 1000,
  ...
}
```
