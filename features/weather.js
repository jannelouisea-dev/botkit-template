//
// Weather information in Raleigh
//

const climacell = require('../api/climacell');

module.exports = function (controller) {

    const command = 'weather';

    controller.hears(command, 'message,direct_message', async (bot, message) => {

        const location = await climacell.getLocation();

        const weather = await climacell.getWeatherRealtime();
        //console.log(weather);

        /*
        let reply = `I will return weather information from climacell\n`;
        reply += `location: ${location.name}\n`;
        reply += `weather: ${weather}\n`;*/

        let reply = '';
        reply += `Weather in ${location.name}\n`;
        reply += `Temperature: ${weather.temp.value}${weather.temp.units}\n`;
        reply += `Feels Like: ${weather.feels_like.value}${weather.feels_like.units}\n`;
        reply += `Humidity: ${weather.humidity.value}${weather.humidity.units}\n`;
        reply += `Dewpoint: ${weather.dewpoint.value}${weather.dewpoint.units}\n`;

        await bot.reply(message, reply);
    });

    controller.commandHelp.push({ command: command, text: 'Displays weather information' });
}