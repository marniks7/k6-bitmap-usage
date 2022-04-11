## Prerequisites

- [k6](https://k6.io/docs/getting-started/installation)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install) (optional)

## Installation
* **Install dependencies**

```bash
yarn install
```

## Running the test

```bash
yarn webpack
```
* Bitmap
```bash
GOMAXPROCS=2 k6 run dist/bitmap-v1-different-test.ts
```
* Map
```bash
GOMAXPROCS=2 k6 run dist/map-v1-different-test.ts
```
