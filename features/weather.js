//
// Weather information in Raleigh
//
module.exports = function (controller) {
    const command = 'weather';

    controller.hears(command, 'message,direct_message', async (bot, message) => {

        /*
        lt markDown = '```json\n';
        markDown += JSON.stringify(controller.botCommons, null, 4);
        markDown += '\n```'
        */

        await bot.reply(message, 'I will return weather information from climacell');
    });

    controller.commandHelp.push({ command: command, text: 'Displays weather information' });
}