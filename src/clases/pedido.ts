
import { Prenda } from './prenda';

export class Pedido {
    protected _id: number;
    protected _precioBase: number;
    protected _diasAprox: number;
    private _compania: string;
    protected _fechaEnvio: Date;
    private _paisSalida: string;
    protected _estado: boolean
    private _arrayPrendas: Array<Prenda>

    constructor(
        id: number,
        precioBase: number,
        diasAprox: number,
        compania: string,
        fechaEnvio: Date,
        paisSalida: string,
        estado: boolean) {

        this._id = id;
        this._precioBase = precioBase;
        this._diasAprox = diasAprox;
        this._compania = compania;
        this._fechaEnvio = fechaEnvio;
        this._paisSalida = paisSalida;
        this._estado = estado;
        this._arrayPrendas = new Array<Prenda>()
    }

    // Metodos GET
    get id() {
        return this._id;
    }
    get precioBase() {
        return this._precioBase;
    }
    get diasAprox() {
        return this._diasAprox;
    }
    get compania() {
        return this._compania;
    }
    get fechaEnvio() {
        return this._fechaEnvio;
    }
    get paisSalida() {
        return this._paisSalida
    }
    get estado() {
        return this._estado
    }
    get arrayPrendas() {
        return this._arrayPrendas
    }


    set precioBase(precioBase: number) {
        this._precioBase = precioBase
    }
    set diasAprox(diasAprox: number) {
        this._diasAprox = diasAprox
    }
    set compania(compania: string) {
        this._compania = compania
    }
    set fechaEnvio(fechaEnvio: Date) {
        this._fechaEnvio = fechaEnvio
    }
    set paisSalida(paisSalida: string) {
        this._paisSalida = paisSalida
    }
    set estado(estado: boolean) {
        this._estado = estado
    }

    public addPrenda(arrayPrendas: Prenda) {
        this._arrayPrendas.push(arrayPrendas);
    }
      //METODOS SOBREESCRITOS EN CADA UNA DE LAS SUBCLASES
    costoPedido(): number {
        let costo: number
        costo = this._precioBase
        costo = costo*1.21
        return costo
    }

}