"use strict";
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, base, conv) {
    const baseIndex = units.indexOf(base);
    const convIndex = units.indexOf(conv);
    return value * Math.pow(10, (convIndex - baseIndex));
}
console.log(convert(1, 'm', 'km'));
