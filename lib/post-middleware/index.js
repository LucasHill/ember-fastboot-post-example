/* eslint-env node */
'use strict';

const HistorySupportAdddon = require('ember-cli/lib/tasks/server/middleware/history-support');
const cleanBaseURL = require('clean-base-url');

class PostFriendlyHistorySupport extends HistorySupportAdddon {
  constructor(project) {
    super(project);
  }

  shouldAddMiddleware(environment) {
    const config = this.project.config(environment);
    const locationType = config.locationType;

    return ['auto', 'history'].indexOf(locationType) !== -1;
  }

  shouldHandleRequest(req, options) {
    const acceptHeaders = req.headers.accept || [];
    const hasHTMLHeader = acceptHeaders.indexOf('text/html') !== -1;

    if(['POST', 'GET'].indexOf(req.method) === -1) {
      return false;
    }

    if(!hasHTMLHeader) {
      return false;
    }

    const baseURL = options.rootURL === '' ? '/' : cleanBaseURL(options.rootURL || options.baseURL);
    const baseURLRegexp = new RegExp(`^${baseURL}`);

    return baseURLRegexp.test(req.path);
  }
}

module.exports = PostFriendlyHistorySupport;
