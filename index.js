const Calc = require('calc-js').Calc;

const [,,a,b] = process.argv

console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish())