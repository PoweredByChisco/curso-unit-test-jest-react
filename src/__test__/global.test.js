const text = "Hello world";
const fruits = ["apple", "banana", "strawberry"];

test("Debe de contener un texto", () => {
  expect(text).toMatch(/world/);
}); /* La funcion (provista por jest) test recibe dos argumentos, un string que describe que va a pasar y el segundo una funcion anonima donde vendra que vamos a probar. El segundo argumento tendra un valor expect, lo que significa que valor esta recibiendo y que valor va a comparar */

test("Do we have a banana", () => {
  expect(fruits).toContain("banana");
}); /* Si contiene */

test("Greater than", () => {
  expect(10).toBeGreaterThan(9);
}); /* Mayor que */

test("True", () => {
  expect(true).toBeTruthy();
}); /* No se le pasa argumento al toBeTruthy porque solamente va a ver si el expect es verdadero */

const reverseString = (string, callback) => {
  callback(string.split("").reverse().join(""));
}; /* Funcion que se encarga de convertir al reves la funcion que le pasemos */

test("Try callback", () => {
  reverseString("Hello", (string) => {
    expect(string).toBe("olleH");
  });
}); /* Un test a traves de un callback */

//Promises

const reverseString2 = (string) => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject(Error("Error"));
    }

    resolve(string.split("").reverse().join(""));
  });
};

test("Try a promise", () => {
  return reverseString2("Hello").then((string) => {
    expect(string).toBe("olleH");
  });
});

//Async Await

test("Try async/await", async () => {
  const string = await reverseString2("Hello")
  expect(string).toBe("olleH")
})

//Specials functions

/* afterEach(() => console.log("After of each try"))
afterAll(() => console.log("After of all trys"))

beforeEach(() => console.log("Before of each try"))
beforeAll(() => console.log("Before of all try")) */
