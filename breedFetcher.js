/*
Fetch the information from the cat API and print out a short description of that breed.
*/
const request = require("request");

const API_URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  const query = API_URL + breedName;
  let description = "";
  request(query, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      const breedDescription = data[0].description;
      if (!breedDescription) {
        description = `Breed is not found.`;
      } else {
        description = `${breedDescription}`;
      }
    } else {
      description = null;
    }

    callback(error, description);
  });
};

module.exports = { fetchBreedDescription };
