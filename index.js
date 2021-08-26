const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});

/*
Ouput:
node index.js Siberian
Breed Description:
The Abyssinian is easy to care for, and a joy to have in your home.
They’re affectionate cats and love both people and other animals.
*/
