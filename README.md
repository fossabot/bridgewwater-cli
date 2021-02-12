[![Node-CI](https://github.com/bridgewwater/bridgewwater-cli/workflows/Node-CI/badge.svg?branch=main)](https://github.com/bridgewwater/bridgewwater-cli/actions?query=workflow%3ANode-CI)
[![NPM Version](http://img.shields.io/npm/v/bridgewwater-cli.svg?style=flat)](https://www.npmjs.org/package/bridgewwater-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/bridgewwater-cli.svg?style=flat)](https://npmcharts.com/compare/bridgewwater-cli?minimal=true)


# bridgewwater-cli

[https://github.com/bridgewwater/bridgewwater-cli](https://github.com/bridgewwater/bridgewwater-cli)

this is for https://github.com/bridgewwater/ project cli maker.

## character

- support code check `prettier` `eslint` `tslint`
- support unit test `jest` for typescript
- support `rollup` build node cli
- support `nodemon` auto build
- support global config setting and log save

## env

| item              | version           |
|:------------------|:------------------|
| node              | 10.+ |
| prettier          | ^2.2.1 |
| eslint            | ^7.18.0 |
| tslint            | ^6.1.3 |
| jest              | ^26.6.3 |
| rollup            | ^2.38.0 |
| nodemon           | ^2.0.7 |
| log4js            | ^6.3.0 |

## dev

```bash
npm install
npm run dev

# then test cli --help as
npm run cli:help

# prettier
npm run format
# lint check ts or js
npm run lint
```

## prod

```bash
npm ci
# or
npm install

# then
npm run build
```