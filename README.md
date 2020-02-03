<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <a href="https://github.com/Microsoft/botframework-sdk#bot-framework-sdk" target="blank"><img src="https://botberg81bd.blob.core.windows.net/images/botframework-logo.jpg?st=2020-02-03T20%3A48%3A42Z&se=2025-02-04T20%3A48%3A00Z&sp=rl&sv=2018-03-28&sr=b&sig=Pz93FqBzCuHMRfWW9jGdKuoj5r7SKfDRViSuN4xHKJ4%3D" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core?color=red&label=nestjs&style=plastic" alt="Nestjs on NPM" /></a>
<a href="https://www.npmjs.com/botbuilder"><img src="https://img.shields.io/npm/v/botbuilder?color=skyblue&label=botbuilder&style=plastic" alt="Botbuilder on NPM" /></a>
<a href="https://www.npmjs.com/package/botframework-webchat"><img src="https://img.shields.io/npm/v/botframework-webchat?color=orange&label=botframework-webchat&style=plastic" alt="BotFramework-WebChat on NPM" /></a>
<a href="https://www.npmjs.com/pug"><img src="https://img.shields.io/npm/v/pug?color=green&label=pug&style=plastic" alt="Pug on NPM" /></a>
<!-- <a href="https://tbd"><img src="https://img.shields.io/badge/website-visit%20me-brightgreen"></a> -->
</p>

## Description

This project asks the question of how a bot, a token server, and web chat can be built using one framework. [Nest](https://github.com/nestjs/nest), as that framework, provides a single solution to these three requests.

A bot server is created for running a [BotFramework](https://github.com/Microsoft/botframework-sdk#bot-framework-sdk) designed bot. The bot is then exposed, as a service, via an API.

A token server is created for generating and refreshing [Direct Line](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channel-directline?view=azure-bot-service-4.0) tokens. The token server is then exposed, as a service, via a set of APIs. Tokens are requested and consumed by Web Chat for communicating with the bot.

[BotFramework-WebChat](https://github.com/microsoft/BotFramework-WebChat#bot-framework-web-chat) is used on the client side providing a user interface for interacting with the bot.

[Pug](https://pugjs.org/api/getting-started.html) is used for as view's rendering engine.


## Installation

```bash
$ npm install
```

## Configuring the app

```bash
# .env file
MicrosoftAppId=<YOUR_BOTS_APP_ID>
MicrosoftAppPassword=<YOUR_BOTS_APP_PASSWORD>
DIRECT_LINE_SECRET=<DIRECT_LINE_CHANNEL_SECRET>
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Navigate to Web Chat

```bash
http://localhost:8080/webchat
```

## Test

```bash
Comming soon
```

<!-- ```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->

### Notes

- The [02.echo-bot](https://github.com/Microsoft/BotBuilder-Samples/tree/master/samples/typescript_nodejs/02.echo-bot) sample is used for the bot in this project. Additional samples and features are available at [BotBuilder-Samples](https://github.com/Microsoft/BotBuilder-Samples).
- The [01.getting-started](https://github.com/Microsoft/BotFramework-WebChat/tree/master/samples/01.getting-started/e.host-with-react) Web Chat sample is used in this project. Additional samples and features are available at [BotFramework-WebChat](https://github.com/Microsoft/BotFramework-WebChat).
- `client.service.ts` is presently unused but is preserved for future use. At the time of development, the intent was to use `@nestjs/serve-static` to serve the web page hosting the Web Chat component. However, the "serve-static" package is not functioning correctly, so an alternative method is used in `main.ts`.
  - Because the file is served via `main.ts`, via the `<NestExpressApplication>` interface, a rendering engine is required. [Pug](https://pugjs.org/api/getting-started.html) was chosen to fulfill the requirement.
## License

  This project is [MIT licensed](LICENSE).
