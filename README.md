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

const email = "<user email>";
const password = "<user password>";

const token = await getAccessToken({ email, password });

const goals = await getGoals({ email, token });

const goal = await getGoalById({ email, token }, "<goal id>");
```
