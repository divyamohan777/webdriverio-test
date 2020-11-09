# Automated Test using webdriverio

Automated Test using webdriverio for a-million-more project

## Installation

Pre-requisie in Mac

```bash
brew install node
```

## Setup webdriverio

```bash
npm init -y
npm i --save-dev @wdio/cli
```

## Configure

```bash
npx wdio config 
```

## Run this project

```bash
npx wdio run wdio.conf.js
```

## Run in docker

```bash
docker-compose run --rm wdio wdio.conf.js
```

## More on webdriverio

[Get Started](https://webdriver.io/docs/gettingstarted.html)


## License
[MIT](https://choosealicense.com/licenses/mit/)
