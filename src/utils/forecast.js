const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=86b7f404f401430c8e550259230602&q=" +
    lat +
    "," +
    long +
    "&aqi=no";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      calback("Unable to connect location services", undefined);
    } else if (body.error) {
      callback("Unable to find locations.Try another search", undefined);
    } else {
      callback(
        undefined,
        body.current.condition.text +
          `. The temp is ` +
          body.current.temp_c +
          ` degrees and it feels like ` +
          body.current.feelslike_c +
          ` degrees`
      );
    }
  });
};

module.exports = forecast;
