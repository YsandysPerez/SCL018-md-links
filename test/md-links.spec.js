const {mdLinks, readLinks} = require('../index.js');


describe("mdLinks", () => {
  it("should return a promise", () => {
    const path = "prueba.md";
    const result = mdLinks(path);
    expect(result).toBeInstanceOf(Promise);
  });
  it("should return an object", () => {
    const path = "prueba.md";
    const result = mdLinks(path);
    expect(result).toBeInstanceOf(Object);
  });
});

describe("readLinks", () => {
  it("should return an array", () => {
    const path = "prueba.md";
    const result = readLinks(path);
    expect(result).toBeInstanceOf(Array);
  });
});

