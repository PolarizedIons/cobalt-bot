require("dotenv").config();

const config = require("./config");
const client = require("./client");
const nats = require("./nats");

client.on("message", (channel, tags, message, self) => {
    if (self) {
        return;
    }
    if (!message.startsWith(config.bot.prefix)) {
        return;
    }

    nats.publish("message", { channel, tags, message });
});

nats.subscribe("reply", msg => {
    client.say(msg.channel, msg.message);
});

client.connect();
