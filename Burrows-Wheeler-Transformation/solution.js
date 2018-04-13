'use strict';

module.exports = {
    encode: function encode(s) {

        var asArray = s.split("");

        console.log(asArray[asArray.length - 1]);

        return ["", -1];
    },
    decode: function decode(s, i) {
        return "";
    }
};