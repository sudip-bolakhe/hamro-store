import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user-model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userModels: Array<UserModel>;
  temp=[];
  rows:Array<UserModel>=[];
  columns=[
    
     {prop: 'firstName'},
     {prop: 'lastName'},
     {prop: 'address'},
     {prop: 'phone'},
    
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private userService: UserService,private router:Router) {
    
   }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUser().subscribe(
      data => {
        this.userModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      this.rows=this.userModels;
      this.temp=[...this.userModels];
      },
      error => {

      }
    );
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
}
deleteUser(id){
  this.userService.deleteUser(id).subscribe(
    data=>{
      this. getAllUsers();
    }
  );
}
}
