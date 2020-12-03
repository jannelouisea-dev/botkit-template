//
// Weather information in Raleigh
//

const climacell = require('../api/climacell');

module.exports = function (controller) {

    const command = 'weather';

    controller.hears(command, 'message,direct_message', async (bot, message) => {

        const location = await climacell.getLocation();

        const weather = await climacell.getWeatherRealtime();

        let reply = '';
        reply += `Weather in ${location.name}\n`;
        reply += `Temperature: ${weather.temp.value}${weather.temp.units}\n`;
        reply += `Feels Like: ${weather.feels_like.value}${weather.feels_like.units}\n`;
        reply += `Humidity: ${weather.humidity.value}${weather.humidity.units}\n`;
        reply += `Dewpoint: ${weather.dewpoint.value}${weather.dewpoint.units}\n`;

        await bot.reply(message, reply);

    });

    controller.commandHelp.push({ command: command, text: 'Displays locations I can get weather information for' });
}

module.exports = function (controller) {
    const locations = 'weather-locations';

    controller.hears(locations, 'message,direct_message', async (bot, message) => {
        const locations = await climacell.getLocations();

        const locationsNames = locations.map((x) => { return x.name });

        let reply = 'Here are some locations I can get the weather for:\n';
        reply += locationsNames.join('\n');

        await bot.reply(message, reply);
    });

    controller.commandHelp.push({ command: locations, text: 'Displays locations I can get weather information for' });
}
