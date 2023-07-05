import ICorreiosOrders from "./ICorreiosOrders";

export default class Correios implements ICorreiosOrders{
    sendCorreios(): void {
        console.log("Enviando encomenda via Correios...");
    }
    recieveCorreios(): void {
        console.log("Encomenda recebida via Correios...");
    }

}