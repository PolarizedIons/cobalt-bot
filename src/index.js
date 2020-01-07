require("dotenv").config();

const config = require("./config");
const client = require("./client");
const nats = require("./nats");

client.on("message", (channel, tags, message, self) => {
    if (self) {
        return;
    }

    nats.publish("messageReceived", { channel, tags, message });
});

nats.subscribe("sendMessage", msg => {
    if (client.readyState() === "OPEN") {
        client.say(msg.channel, msg.message);
    }
});

client.connect();
