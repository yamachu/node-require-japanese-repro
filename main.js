const path = require('path');
const Module = require('module')
const createRequire = Module.createRequire;

// あ.js is fail, but ああ.js is success
const resolved = path.resolve('あ.js');
console.log(resolved);
const req = createRequire(resolved);
// some package...
const result = req.resolve('uuid');
console.log(result);
