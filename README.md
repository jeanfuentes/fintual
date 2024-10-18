> A wrapper for the [Fintual API](https://fintual.cl/api-docs/index.html)

[![NPM Version](https://img.shields.io/npm/v/fintual?style=flat-square)](https://www.npmjs.com/package/fintual)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/fintual?style=flat-square)](https://bundlephobia.com/package/fintual)

## Installation

```bash
npm install fintual
```

## Usage

```js
const { getAccessToken, getGoals } = require("fintual");

const token = await getAccessToken({
  email: "<user email>",
  password: "<user email>",
});

const goals = await getGoals({ email, token });
```
