import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './views/contacts/contacts.component';
import {UsersComponent} from './views/users/users.component';
import {ContactNewComponent} from './views/contact-new/contact-new.component';
import {UserNewComponent} from './views/users/user-new/user-new.component';
import {ContactsIndexComponent} from './views/contacts-index/contacts-index.component';
import {ContactDetailsComponent} from './views/contact-details/contact-details.component';
import {ContactEditComponent} from './views/contact-edit/contact-edit.component';
import { UserIndexComponent } from './views/users/user-index/user-index.component';
import { UserOrderComponent } from './views/users/user-order/user-order.component';
import { UserDetailsComponent } from './views/users/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users'
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      {path: '', component: ContactsIndexComponent},
      {path: 'new', component: ContactNewComponent},
      {path: ':contactId', component: ContactDetailsComponent},
      {path: ':contactId/edit', component: ContactEditComponent}
    ]

  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {path: '', component: UserIndexComponent},
      {path: 'new', component: UserNewComponent},
      {path: ':userId', component: UserDetailsComponent},
      {path: ':userId/order', component: UserOrderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
