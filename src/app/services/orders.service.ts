import { Injectable } from '@angular/core';
import { Order } from "../models/order";

@Injectable()
export class OrdersService {

  ordersStub : Order[] = [
    {
      id: 1,
      clientId: 1,
      status: 'completed'
    },
    {
      id: 2,
      clientId: 1,
      status: 'ordered'
    },
    {
      id: 3,
      clientId: 2,
      status: 'paid'
    }
  ];

  constructor() { }

  index(): Order[] {
    return this.ordersStub
  }

  show(id: number): Order {
    return this.ordersStub.filter((order) => {
      return order.id === id;
    })[0];
  }

  listByClient(clientId: number): Order[] {
    console.log('Filter by '+clientId);
    return this.ordersStub.filter((order) => {
      return order.clientId == clientId;
    });
  }

}
