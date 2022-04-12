# K6 with bitmap-usage

[K6](https://k6.io/docs/getting-started/installation/) with [bitmap-usage](https://github.com/marniks7/bitmap-usage/).
This is just a testing project, possible replacement of [wrk](https://github.com/wg/wrk)
and [Jmeter](https://jmeter.apache.org/) for other projects, something feature-rich for Load Testing.

## Comparison

* `Wrk` uses `lua` + `c`, `k6` uses `javascript` + `go`
* `Wrk` is able to generate higher load in `4` - `5` times then `k6`
* `k6` has a lot of examples, much more developer-friendly
* `k6` high quality reporting and analyzing tools are available only in `k6 cloud`. Other options (
  like `Grafana dashboards`) requires configuration
* I didn't test it, but `postman-to-k6`, `openapi generator for k6`, `har-to-k6`, and
  abandoned `jmeter-to-k6` can be used to port scripts to `k6` (note! nuances are very important)
* `Jmeter` has non-friendly, overcomplicated UI
* `Jmeter` doesn't have scripting options and this is one of the main reasons I don't like it
* `Jmeter` text summary report (printed over time) is cool for `Chaos Engineering` experiments
* Too many investments into `Jmeter` adoption over the years, recordings from browser, etc
* I have invested already my time into `wrk` (developed scripts, customizations)
* I have very simple test cases suitable for `wrk`
* There is no ready-to-use free analytics for `k6`

## Conclusion
As of now I will stick to `wrk` and `Jmeter`, but I may use `k6` for more complex test cases instead of `wrk`

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
