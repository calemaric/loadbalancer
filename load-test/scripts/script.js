import http from 'k6/http';
import { check } from "k6";

export const options = {
  stages: [
      // Ramp-up from 1 to 5 VUs in 5s
      { duration: "5s", target: 100 },
      // Ramp-down from 5 to 0 VUs for 5s
      { duration: "5s", target: 0 }
  ]
};

export default function () {
  const response = http.get('http://host.docker.internal/product/acousticaura-guitar-effects-pedal/');
  check(response, { "status is 200": (r) => r.status === 200 });
}
