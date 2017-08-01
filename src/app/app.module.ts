import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {
  ContactDetailsContainerComponent
} from './components/contact-details/contact-details-container.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import {HttpModule} from '@angular/http';
import {ContactsService} from './services/contacts.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactNewComponent } from './views/contact-new/contact-new.component';
import { ContactsIndexComponent } from './views/contacts-index/contacts-index.component';
import {StoreModule} from '@ngrx/store';

import { reducer } from './store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ContactEffects} from './store/contacts-effects';
import {ContactDetailsComponent} from './views/contact-details/contact-details.component';
import { UsersComponent } from './views/users/users.component';
import { UserNewComponent } from './views/users/user-new/user-new.component';
import { UserIndexComponent } from './views/users/user-index/user-index.component';
import { UserOrderComponent } from './views/users/user-order/user-order.component';
import { UserDetailsComponent } from './views/users/user-details/user-details.component';
import { UsersNavbarComponent } from './components/users-navbar/users-navbar.component';
import { UsersService } from './services/users.service';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    ContactDetailsContainerComponent,
    ContactEditComponent,
    ContactNewComponent,
    ContactsIndexComponent,
    UsersComponent,
    UserNewComponent,
    UserIndexComponent,
    UserOrderComponent,
    UserDetailsComponent,,
    UsersNavbarComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer), /* Initialise the Central Store with Application's main reducer*/
    EffectsModule.run(ContactEffects), /* Start monitoring contacts side effects */
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    ContactsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
