/* eslint-env node */

const FastBootAppServer = require('fastboot-app-server');
const ExpressHTTPServer = require('fastboot-app-server/src/express-http-server');

const bodyParser = require('body-parser');
const path = require('path');
const process = require('process');

class PostEnabledAppServer extends ExpressHTTPServer {
  
  serve(fastbootMiddleware) {
    const app = this.app;

    app.use(bodyParser.json());

    app.post('/*', fastbootMiddleware);

    return super.serve(fastbootMiddleware);
  }
}

const httpServer = new PostEnabledAppServer();

const server = new FastBootAppServer({
  distPath: path.resolve(process.cwd(), 'dist'),
  gzip: false,
  httpServer
});

server.start();