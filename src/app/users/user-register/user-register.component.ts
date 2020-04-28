import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user = new User();

  constructor(private service : UserService) { }

  ngOnInit(): void {
  }

  save() {
    this.service.saveUser(this.user);
    this.user = new User();
    alert("usuario cadastrado");
  }
}
