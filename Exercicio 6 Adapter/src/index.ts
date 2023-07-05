import TransportadoraAdapter from "./Adapters/TransportadoraAdapter";
import Correios from "./Correios/Correios";
import ICorreiosOrders from "./Correios/ICorreiosOrders";
import ITransportadoraOrders from "./Transportadora/ITransportadoraOrders";
import Transportadora from "./Transportadora/Transportadora";

const encomenda : ICorreiosOrders = new Correios();
encomenda.recieveCorreios();
encomenda.sendCorreios();

const encomenda2 : ITransportadoraOrders = new Transportadora();
encomenda2.recieve();
encomenda2.send();

const encomenda3 : ICorreiosOrders = new TransportadoraAdapter(new Transportadora());
encomenda3.recieveCorreios();
encomenda3.sendCorreios();