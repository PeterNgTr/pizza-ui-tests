require('import-export');
require('events').EventEmitter.prototype._maxListeners = 100;

exports.config = {
  "tests": "./tests/**/*.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "WebDriverIO": {
      url: 'https://www.pizza.de',
      "browser": "chrome",
      "desiredCapabilities": {
        "chromeOptions": {
          "args": [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
      },
      restart: true,
      "windowSize": "1440x700",
      "waitForNavigation": ["networkidle2","domcontentloaded"],
    }
  },
  "bootstrap": false,
  "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  "name": "pizza-ui-tests",
  "multiple": {
    "parallel": {
      "chunks": 2
    }
  },
  "include": {
    homePage: './pages/HomePage.js',
    loginPage: './pages/LoginPage.js',
    data: './develop.data.js',
  }
}