const request = require("request");

const forcast = (result,cb)=>{
    console.log("result",result);
    var url = `http://api.weatherstack.com/current?access_key=07e57935d6d89cc19382560cc714c473&query=${result.latitude},${result.logitute}`;

    request(url,function (error, response, body){
        if(error){
            cb("Internet Problem", undefined);
            return;
        }
        var temp = JSON.parse(body);
        console.log(temp);
        cb(undefined, temp.current.weather_descriptions[0])
    });
}

module.exports = forcast;
