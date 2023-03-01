const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiaW1yYW5raGFuOTUiLCJhIjoiY2xkdTlhamxxMDNtOTNvbWZkazhqZHZ1aCJ9.NTRlHC8OofOXiZE0ZlBh0w";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect location services", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find locations.Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
