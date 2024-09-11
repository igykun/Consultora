const Impuestos = require('./impuestos.js');
class Cliente{
    constructor(nombreCliente, impuesto){
        this.nombreCliente = nombreCliente;
        this.impuesto = impuesto;
    }
    get nombreCliente(){
        return this._nombreCliente;
    }
    set nombreCliente(nuevoNombreCliente){
        this._nombreCliente = nuevoNombreCliente;
    }

    calculoImpuestos(){
        const {montoBrutoAnual, deducciones} = this.impuesto;
        return (montoBrutoAnual - deducciones) * 0.21;
    }
}

module.exports = Cliente;