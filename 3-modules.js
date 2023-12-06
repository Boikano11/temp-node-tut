// CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHii = require('./5-utils')
const data = require('./6-alternative-flow')
require('./7-mind-grenade')
console.log(data)


sayHii('Susan')
sayHii(names.john)
sayHii(names.peter)