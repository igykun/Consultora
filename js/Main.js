const Cliente = require('./Cliente.js');
const Impuestos = require('./impuestos.js');

const impuesto1 = new Impuestos(500, 20);
const impuesto2 = new Impuestos(1000, 60);
const impuesto3 = new Impuestos(100, 24);

const Ignacio = new Cliente('Ignacio', impuesto1);
const Carlos = new Cliente('Carlos', impuesto2);
const Alex = new Cliente('Alex', impuesto3);


console.log(`El impuesto de ${Ignacio.nombreCliente} es de ${Ignacio.calculoImpuestos()}`);
console.log(`El impuesto de ${Carlos.nombreCliente} es de ${Carlos.calculoImpuestos()}`)
console.log(`El impuesto de ${Alex.nombreCliente} es de ${Alex.calculoImpuestos()}`)