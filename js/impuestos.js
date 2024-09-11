
class Impuestos {
    constructor(montoBrutoAnual, deducciones){
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    get deducciones(){
        return this._deducciones;
    }
    set montoBrutoAnual(newMontoBrutoAnual){
        this._montoBrutoAnual = newMontoBrutoAnual;
    }
    set deducciones(newDeducciones){
        this._deducciones = newDeducciones;
    }
}

module.exports = Impuestos;
