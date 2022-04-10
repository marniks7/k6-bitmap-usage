import {Options} from "k6/options";
import http from "k6/http";
import {check} from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";


const file = open('search-price-request.json', 'b');
const url = `http://localhost:8091/v1/search/bitmap/prices`;

export let options: Options = {
    vus: 20,
    duration: '30s',
    noConnectionReuse: false,
    summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(75)', 'p(90)', 'p(95)', 'p(97)', 'p(98)', 'p(99)', 'p(99.99)', 'count']
};

export default (): void => {
    //const data = `{"offeringId":"a38e432c-3965-4c74-8251-aa640002d2b2","groupId":"group5","priceSpecId":"MRC","charValues":[{"char":"Term","value":"18"},{"char":"B2B Traffic","value":"10GB"},{"char":"VPN","value":"ad796998-f1c7-4fcc-9a6b-1b33042fb375"},{"char":"B2B Bandwidth","value":"1Mbps"},{"char":"Router","value":"Included"}]}`
    const data = file
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

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}