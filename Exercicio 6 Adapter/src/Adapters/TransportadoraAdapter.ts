import ICorreiosOrders from "../Correios/ICorreiosOrders";
import Transportadora from "../Transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreiosOrders{

    constructor(private transportadora : Transportadora){
        console.log("Adaptando encomenda Transportadora para Correios")
    }

    sendCorreios(): void {
        return this.transportadora.send();
    }
    recieveCorreios(): void {
        return this.transportadora.recieve();
    }

}