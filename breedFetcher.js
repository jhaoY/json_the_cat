const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback("Error occured", null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Could not find breed", null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = {
  fetchBreedDescription,
};