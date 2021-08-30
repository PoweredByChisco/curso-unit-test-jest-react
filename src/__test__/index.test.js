const randomStrings = require("../index");

describe("Functionalities tries of random string", () => {
  test("Functionality try", () => {
    expect(typeof randomStrings()).toBe("string");
  }); /* Typeof te dice que tipo de dato tiene el valor que le pasemos */
  test("Check if a city doesn't exist", () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  }); /* Usamos una nueva negacion, con not */
}); /* Esto es una suite, un test de test por asi decit */
