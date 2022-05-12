const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN });

await lib.discord.channels['@0.3.0'].messages.create({
    "channel_id": `974357343917703292`,
    "content": `Hey<@${context.params.event.user.id},Welcome to my server!`,
    "tts": false,
    "embeds": [{
        "type": "rich",
        "title": `Here are some rules.`,
        "description": "",
        "color": 0x00FFFF,
        "fields": [{
                "name": `Rule 1`,
                "value": `Dont forget to enjoy life.`
            },
            {
                "name": `Rule 2`,
                "value": `Dont forget to sleep`
            },
            {
                "name": `Rule 3`,
                "value": `Have fun`
            }
        ]
    }]
});