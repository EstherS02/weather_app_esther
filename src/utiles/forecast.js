const request = require("request");

const forcast = (result) => {

    return new Promise((resolve, reject) => {
        var url = `http://api.weatherstack.com/current?access_key=07e57935d6d89cc19382560cc714c473&query=${result.latitude},${result.logitute}`;

        request(url, function (error, response, body) {
            if (error) {
                reject("Internet Problem");
            }
            var temp = JSON.parse(body);
            resolve(temp.current.weather_descriptions[0])
        });
    })
}

module.exports = forcast;
