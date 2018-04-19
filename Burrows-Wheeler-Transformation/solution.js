"use strict";

function encodeWithTempArray(s) {
  if (s === null || s === undefined) return "";

  let tmp = s;
  let cache = [];

  for (let index = 0; index < s.length; index++) {
    tmp = tmp.charAt(tmp.length - 1) + tmp.slice(0, tmp.length - 1);
    cache.push(tmp);
  }
  cache.sort();

  var lastColumn = cache.reduce(selectLastChar, "");
  var rowIndex = cache.findIndex(el => el === s);

  function selectLastChar(acc, cValue) {
    return acc + cValue[cValue.length - 1];
  }

  return [lastColumn, rowIndex];
}

function decodeWithTempArray(s, i) {
  if (!s) return "";

  let cache = [];

  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i < s.length; i++) {
      cache[i] = s[i] + (cache[i] || "");
    }
    cache.sort();
  }
  return cache[i];
}

module.exports = {
  encode: encodeWithTempArray,
  decode: decodeWithTempArray
};
