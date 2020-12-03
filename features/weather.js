//
// Weather information in Raleigh
//

const climacell = require('../api/climacell');

module.exports = function (controller) {

    const command = 'weather';

    controller.hears(command, 'message,direct_message', async (bot, message) => {

        const location = await climacell.getLocation();

        await bot.reply(message, `I will return weather information from climacell ${location.name}`);
    });

    controller.commandHelp.push({ command: command, text: 'Displays weather information' });
}