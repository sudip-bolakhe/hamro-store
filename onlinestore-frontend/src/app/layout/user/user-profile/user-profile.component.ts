import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { ActivatedRoute,Router  } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

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
 
 

}
