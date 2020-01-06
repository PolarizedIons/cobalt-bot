const NATS = require("nats");
const config = require("./config");

const nats = NATS.connect({
    url: config.natsUrl,
    json: true,
});

module.exports = nats;
