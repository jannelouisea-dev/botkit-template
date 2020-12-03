require('dotenv').config();


const RALEIGH_LOCATION = process.env.RALEIGH_CLIMACELL_LOCATION_ID;

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://api.climacell.co/v3',
    timeout: 2500,
    headers: {
        'apikey': `${process.env.CLIMACELL_API_KEY}`,
        'content-type': 'application/json',
    },
});

exports.getLocation = async () => {
    try {
        const resp = await instance.get(`/locations/${RALEIGH_LOCATION}`);
        return resp.data;
    } catch (err) {
        console.log(err);
    }
}

exports.getWeatherRealtime = async () => {
    const params = {
        'location_id': RALEIGH_LOCATION,
        'unit_system': 'us',
        'fields': [
            'temp',
            'feels_like',
            'dewpoint',
            'humidity'
        ]
    };

    try {
        const resp = await instance.get('/weather/realtime', { params: params });
        return resp.data;
    } catch (err) {
        console.log(err);
    }
}