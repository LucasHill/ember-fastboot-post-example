/* eslint-env node */
'use strict';
const bodyParser = require('body-parser');

module.exports = {
  name: 'body-parser-middleware',

  isDevelopingAddon() {
    return true;
  },

  serverMiddleware(options) {
    const app = options.app;

    app.use(bodyParser.json());
  }
};
