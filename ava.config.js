export default {
  "files": [
    "client/**/*.spec.js",
    "server/**/*.spec.js"
  ],
  "source": [
    "client/**/*.js",
    "server/**/*.js"
  ],
  "failFast": true,
  "babel": true,
  "require": [
    "./server/util/setup-test-env.js"
  ]
}
