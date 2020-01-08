const tmi = require("tmi.js");
const config = require("./config");
const log = require("./log");

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true,
    },
    identity: {
        username: config.bot.username,
        password: config.bot.password,
    },
    channels: config.bot.channels,
    logger: log,
});

module.exports = client;
