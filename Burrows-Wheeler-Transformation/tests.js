const { describe, before, it } = require("mocha");
const assert = require("assert");
const { encode, decode } = require("./solution");

describe("Example Tests", () => {
  it("encode", () => {
    assert.deepEqual(encode("bananabar"), ["nnbbraaaa", 4]);
    assert.deepEqual(encode("Humble Bundle"), ["e emnllbduuHB", 2]);
    assert.deepEqual(encode("Mellow Yellow"), ["ww MYeelllloo", 1]);
    assert.deepEqual(encode(""), ["", -1]);
  });
  it("decode", () => {
    assert.equal(decode("nnbbraaaa", 4), "bananabar");
    assert.equal(decode("e emnllbduuHB", 2), "Humble Bundle");
    assert.equal(decode("ww MYeelllloo", 1), "Mellow Yellow");
  });
});
