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

        /*
        const weatherCard = {
            'type': 'AdaptiveCard',
            'body': [
                {
                    'type': 'ColumnSet',
                    'columns': [
                        {
                            'type': 'Column',
                            'items': [
                                {
                                    'type': 'Image',
                                    'style': 'Person',
                                    'url': 'https://cdn.iconscout.com/icon/free/png-512/weather-192-461761.png',
                                    'size': 'Medium',
                                    'height': '50px'
                                }
                            ],
                            'width': 'auto'
                        },
                        {
                            'type': 'Column',
                            'items': [
                                {
                                    'type': 'TextBlock',
                                    'text': 'Cisco Webex Teams Bot Demo',
                                    'weight': 'Lighter',
                                    'color': 'Accent'
                                },
                                {
                                    'type': 'TextBlock',
                                    'weight': 'Bolder',
                                    'text': 'Raleigh, NC USA Weather',
                                    'horizontalAlignment': 'Left',
                                    'wrap': true,
                                    'color': 'Light',
                                    'size': 'Large',
                                    'spacing': 'Small'
                                }
                            ],
                            'width': 'stretch'
                        }
                    ]
                },
                {
                    'type': 'ColumnSet',
                    'columns': [
                        {
                            'type': 'Column',
                            'width': 35,
                            'items': [
                                {
                                    'type': 'TextBlock',
                                    'text': 'Weather Conditions:',
                                    'weight': 'Lighter',
                                    'color': 'Light'
                                },
                                {
                                    'type': 'TextBlock',
                                    'text': 'Temperature:',
                                    'color': 'Light'
                                },
                                {
                                    'type': 'TextBlock',
                                    'text': 'Feels Like:',
                                    'weight': 'Lighter',
                                    'color': 'Light',
                                    'spacing': 'Small'
                                },
                                {
                                    'type': 'TextBlock',
                                    'text': 'Humidity:',
                                    'weight': 'Lighter',
                                    'color': 'Light',
                                    'spacing': 'Small'
                                },
                                {
                                    'type': 'TextBlock',
                                    'text': 'Dewpoint:',
                                    'weight': 'Lighter',
                                    'color': 'Light',
                                    'spacing': 'Small'
                                }
                            ]
                        },
                        {
                            'type': 'Column',
                            'width': 65,
                            'items': [
                                {
                                    'type': 'TextBlock',
                                    'text': `${weather.weather_code}`,
                                    'weight': 'Lighter',
                                    'color': 'Light'
                                },
                                {
                                    'type': 'TextBlock',
                                    'text': `${weather.temp.value}${weather.temp.units}`,
                                    'color': 'Light'
                                },
                                {
                                    'type': 'TextBlock',
                                    'text': `${weather.feels_like.value}${weather.feels_like.units}`,
                                    'color': 'Light',
                                    'weight': 'Lighter',
                                    'spacing': 'Small'
                                },
                                {
                                    'type': 'TextBlock',
                                    'text': `${weather.humidity.value}${weather.humidity.units}`,
                                    'weight': 'Lighter',
                                    'color': 'Light',
                                    'spacing': 'Small'
                                },
                                {
                                    'type': 'TextBlock',
                                    'text': `${weather.dewpoint.value}${weather.dewpoint.units}`,
                                    'weight': 'Lighter',
                                    'color': 'Light',
                                    'spacing': 'Small'
                                }
                            ]
                        }
                    ],
                    'spacing': 'Padding',
                    'horizontalAlignment': 'Center'
                }
            ],
            '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
            //'version': '1.2'
        };*/

        await bot.reply(message, reply);

        /*
        await bot.reply(message, {
            text: 'Some weather info',
            attachments: [
                weatherCard
            ]
        });*/
    });

    controller.commandHelp.push({ command: command, text: 'Displays weather information' });
}