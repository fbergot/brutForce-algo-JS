//test
const algo_brutForce = require("./appBrut.js");



test("brut_force 1", () => {
  const value = algo_brutForce('test');
  expect(value).toEqual('test');
});

test("brut_force 2", () => {
  const value = algo_brutForce('code');
  expect(value).toEqual('code');
});

test("brut force moins de 2 caractères", () => {
  expect(() => algo_brutForce('a').toThrow(Error));
});

test("mauvais caractère _0", () => {
  expect(() => algo_brutForce(' .2').toThrow(Error));
});

test("mauvais caractère _white space", () => {
  expect(() => algo_brutForce('bj ').toThrow(Error));
});

test("mauvais caractères _1", () => {
  expect(() => algo_brutForce('azm23').toThrow(Error));
});

test("mauvais caractères _2", () => {
  expect(() => algo_brutForce('%z25za').toThrow(Error));
});

test("mauvais caractères _3", () => {
  expect(() => algo_brutForce('>a!6').toThrow(Error));
});

test("mauvais caractères _4", () => {
  expect(() => algo_brutForce('PC').toThrow(Error));
});