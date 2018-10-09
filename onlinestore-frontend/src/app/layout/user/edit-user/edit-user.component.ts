import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { UserModel } from '../user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
 
  userModel: UserModel = new UserModel();
  private imageUrl:String;
  constructor(private route: ActivatedRoute, private userService: UserService,
  private router:Router) {

    this.route.params.subscribe(
      params => {
        this.userService.getUserById(params.id).subscribe(
          data => {
            this.userModel = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            this.imageUrl="data:image/jpeg;base64,"+ this.userModel.profilePhoto;
          }
        );
      }
    );
  }

  ngOnInit() {
  }
 
  
  updateUser() {
    this.userService.saveUser(this.userModel).subscribe(
      data => {
          this.router.navigate(['/user/viewuser']);
      }
    );

  }

}
