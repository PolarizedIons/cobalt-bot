const client = require("./client");
const log = require("./log");
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

log.info("Starting...");
client.connect();
