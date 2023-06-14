import { Component } from '@angular/core';
import {ChangeAvatar} from "../../model/ChangeAvatar";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css']
})
export class ChangeAvatarComponent {
  changeAvatar?: ChangeAvatar;
  form: any = {};
  constructor(private authService: AuthService) {
  }
  updateAvatar() {
    this.changeAvatar = new ChangeAvatar(
      this.form.avatar
    )
    this.authService.updateAvatar(this.changeAvatar).subscribe(data =>{
      console.log('data --->', data)
    })
  }

  getAvatar($event: string) {
    this.form.avatar = $event;
  }
}
