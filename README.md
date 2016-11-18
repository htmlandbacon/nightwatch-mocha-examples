# nightwatch-mocha-examples

This is an example of [nightwatch.js](http://nightwatchjs.org/) using [mocha](https://mochajs.org/).

This demo is running against the [gov-uk-prototype toolkit](https://govuk-prototype-kit.herokuapp.com).

This requires a instance of the kit to be running to test against.

This package includes [selenium-server](http://www.seleniumhq.org/), [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/), [geckodriver](https://github.com/mozilla/geckodriver/releases) and [phantom.js](http://phantomjs.org/) installed via npm.

Running full nightwatch tests

```
nightwatch tests/*
```

Running an individual test

``` 
nightwatch tests/form.js
```

Currently it is expected to run against a site on http://localhost:3000.

You can change this with the following

```
SITE=http://localhost:4000 nightwatch tests/form.js
```

You can switch between browsers by running BROWSER=firefox or chrome or phantom.

### Requirements

- node 6
- Java for selenium server

### Todo

- [ ] Pure mocha example
- [ ] Extended script examples with forms
- [ ] tab ordering checks against pages
- [ ] stand alone pages to test against
