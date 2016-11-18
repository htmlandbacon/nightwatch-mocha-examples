const jar = require('selenium-server-standalone-jar');
const browsers = require('./browsers.js');

const config = {
  src_folders: ['tests'],
  output_folder: 'reports',
  selenium: {
    start_process: true,
    server_path: jar.path,
    log_path: 'logs',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': 'node_modules/chromedriver/bin/chromedriver',
      'webdriver.gecko.driver': 'node_modules/geckodriver/bin/geckodriver'
    }
  },
  test_runner: {
    type: 'mocha',
    options: {
      ui: 'bdd',
      reporter: 'spec'
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        path: 'screenshots'
      },
      desiredCapabilities: browsers.select()
    }
  }
};

module.exports = config;
