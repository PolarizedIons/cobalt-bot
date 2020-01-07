module.exports = {
    bot: {
        username: process.env.BOT_USERNAME,
        password: process.env.BOT_PASSWORD,
        channels: process.env.BOT_CHANNELS.split(",").map(channel =>
            channel.trim()
        ),
    },
    natsUrl: process.env.NATS_URL,
};
