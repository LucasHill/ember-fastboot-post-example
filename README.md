# ember-fastboot-post-example
This is a simple demo of how one would enable POST requests in a fastboot application. Examples are provided for both in development (ember serve) and using the production ready fastboot-app-server. The commits should provide a good story of the work needed to enable this in your own app.

To POST to this app, try this example cURL:
```
curl -X POST \
  http://localhost:4200/ \
  -H 'accept: text/html' \
  -H 'content-type: application/json' \
  -d '{
	"message": "This was in the POST request!!"
}'
```

To run the example 'production' server run:
```
npm run example-server
```


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-fastboot-post-example`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
