import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { OrdersService } from '../../../services/orders.service';
import { User } from "../../../models/user";
import { Order } from "../../../models/order";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  orders: Order[];
  userId: number;

  constructor(private userService: UsersService,
              private ordersService: OrdersService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.user = this.userService.show(this.userId);
      this.orders = this.ordersService.listByClient(this.userId);
    })
  }

}
