import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http/';
import { UserRoutingModule } from './user-routing.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserService } from './user.service';
import { AppComponent } from '../../app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,FormsModule,HttpModule,UserRoutingModule,NgxDatatableModule,NgSelectModule
  ],
  declarations: [AddUserComponent, ViewUserComponent, EditUserComponent, UserProfileComponent],
  providers: [UserService]
})
export class UserModule { }
