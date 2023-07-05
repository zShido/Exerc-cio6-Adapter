import ITransportadoraOrders from "./ITransportadoraOrders";

export default class Transportadora implements ITransportadoraOrders{
    send(): void {
        console.log("Enviando encomenda via Transportadora...");
    }
    recieve(): void {
        console.log("Encomenda recebida via Transportadora...");
    }

}