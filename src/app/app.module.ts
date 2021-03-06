import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './UI/message/message.component';
import { SpinnerComponent } from './UI/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserListComponent,
    MessageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
