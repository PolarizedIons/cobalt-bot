# Cobalt-Bot

## Twitch bot portion of Project Cobalt

| Project      | Link                                         |
| ------------ | -------------------------------------------- |
| Bot          | https://github.com/PolarizedIons/cobalt-bot  |
| Core         | https://github.com/PolarizedIons/cobalt-core |
| MicroService | https://github.com/PolarizedIons/cobalt-ms   |
| UI           | https://github.com/PolarizedIons/cobalt-ui   |

## Usage

This is the twitch bot that runs Project Cobalt. To use it, simply fill out the `.env` file (use `.env.example` as a template), or provide the appropriate environment variables and run via `yarn start`.

Output is in [pino](https://getpino.io/#/) format

## Environment Variables

| Variable         | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| **BOT_USERNAME** | The username to authenticate as. This will be your bot username                                                    |
| **BOT_PASSWORD** | The oauth based password for the bot user. Will start with `oauth:`. [Get yours here](https://twitchapps.com/tmi/) |
| **BOT_CHANNELS** | Comma seperated list of channels for the bot to join                                                               |
| **NATS_URL**     | The [NATS](https://nats.io/) server to connect to for communication with the rest of the services.                 |
