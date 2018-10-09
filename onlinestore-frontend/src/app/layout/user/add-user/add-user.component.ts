import { Component, OnInit } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { UserModel } from '../user-model';
import{Observable} from 'rxjs/Observable';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userModel: UserModel = new UserModel();
  constructor(private userService:UserService,private router :Router) { }

  ngOnInit() {
  }
  addUser(){
    this.userService.saveUser(this.userModel).subscribe(
      data=>{
        this.router.navigate(['/user/viewuser']);
      }
    )
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userModel.profilePhoto= reader.result.split(',')[1]
       
      };
    }
}

}
