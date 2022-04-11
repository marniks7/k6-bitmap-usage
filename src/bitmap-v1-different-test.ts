import {Options} from "k6/options";
import http from "k6/http";
import {check} from "k6";
// import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
// import {textSummary} from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import {SharedArray} from "k6/data";

const url = `http://localhost:8091/v1/search/bitmap/prices`;

const jsonData = new SharedArray('search price requests', function () {

    return JSON.parse(open('./search-price-bulk-request-3000.json')); // f must be an array[]

});
export let options: Options = {
    vus: 20,
    duration: '30s',
    noConnectionReuse: false,
    discardResponseBodies: true,
    summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(75)', 'p(90)', 'p(95)', 'p(97)', 'p(98)', 'p(99)', 'p(99.99)', 'count']
};

export default (): void => {
    const randomSearchRequest = jsonData[Math.floor(Math.random() * jsonData.length)];
    const data = JSON.stringify(randomSearchRequest)
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = http.post(url, data, params);

    check(response, {
        'status is 200': r => r.status === 200,
    });

};
//
// export function handleSummary(data) {
//     return {
//         "summary.html": htmlReport(data),
//         stdout: textSummary(data, { indent: " ", enableColors: true }),
//     };
// }