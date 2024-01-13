import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { FormsModule } from '@angular/forms';
import { UserServices } from './services/userservices';
import { LogServices } from './services/logservices';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUsersComponent,
    UpdateUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserServices,LogServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
