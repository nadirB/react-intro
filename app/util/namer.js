const Chance = require("chance");
const myChance = new Chance();

module.exports.first = () => {
    return myChance.first();
}

module.exports.last = () => {
    return myChance.last();
}
