/*
Fetch the information from the cat API and print out a short description of that breed.
*/
const request = require("request");

const API_URL = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = process.argv.splice(2).join("");
const query = API_URL + breed;

request(query, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
  }
  const data = JSON.parse(body);
  const breedDescription = data[0].description;
  if (!breedDescription) {
    console.log(`${breed} breed is not found.`);
  } else {
    console.log(`Breed Description:\n${breedDescription}`);
  }
});

/*
Ouput:
node breedFetcher.js ss
Breed Description:
The Abyssinian is easy to care for, and a joy to have in your home.
They’re affectionate cats and love both people and other animals.
*/
