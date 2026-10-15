import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile {
  constructor(public userSercie: UserService){}
}