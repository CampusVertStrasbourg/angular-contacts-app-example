import { Component, OnInit, Input } from '@angular/core';
import { Order } from "../../models/order";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  @Input() orders: Order[];

  constructor() { }

  ngOnInit() {

  }

}
