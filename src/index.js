const cities = ["CDMX", "Bogotá", "Lima", "Buenos Aires", "Guadalajara"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString2 = (string) => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject(Error("Error"));
    }
    
    resolve(string.split("").reverse().join(""));
  });
};

module.exports = randomString;