const selenium = require('selenium-standalone');

exports.config = {
  tests: "./tests/**/*.js",
  timeout: 10000,
  "output": "./output",
  require: ['import-export'],
  helpers: {
    WebDriverIO: {
      url: 'https://www.pizza.de',
      browser: "chrome",
      desiredCapabilities: {
        chromeOptions: {
          args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
      },
      restart: true,
      windowSize: "1440x700",
      waitForNavigation: ["networkidle2","domcontentloaded"],
    }
  },
  bootstrap: (done) => {
    selenium.start((err, child) => {
      if (err) {
        throw err;
      }

      selenium.__child = child;
      done();
    });
  },
  teardown: (done) => {
    setTimeout(() => {
      try {
        if (selenium.__child) selenium.__child.kill();
      } catch (e) {}
    }, 3000);
    done();
  },
  mocha: {
    reporterOptions: {
        reportDir: "output"
    }
  },
  name: "pizza-ui-tests",
  multiple: {
    parallel: {
      chunks: 2
    }
  },
  include: {
    homePage: './pages/HomePage.js',
    loginPage: './pages/LoginPage.js',
    data: './develop.data.js',
  }
}