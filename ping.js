// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN }); //tells autocode that i want to speak to discord//

await lib.discord.channels['@0.3.0'].messages.create({ //creates a message to the discord channel//
    channel_id: context.params.event.channel_id,
    content: `Pong!`
});