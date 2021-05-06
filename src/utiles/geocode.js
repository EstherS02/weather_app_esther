const request = require ("request");

const geocode = (city)=>{

    return new Promise((resolve,reject)=>{

        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiZXN0aGVycnJycnJycnJycnJyciIsImEiOiJja250dGVjYnQwNWNuMnVueG01emExczM0In0.wbbNFu7lmBo8R_H8sFnYKw`;

        request(url, function (error, response, body) {
            if(error){
                reject("Internet Problem");
            }

            const temp = JSON.parse(body);
            var tempObj={
                logitute : temp.features[0].center[0],
                latitude: temp.features[0].center[1]
            }

            resolve(tempObj);
        })
    })
};

module.exports = geocode;
