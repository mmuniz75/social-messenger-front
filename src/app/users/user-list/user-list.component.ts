import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subject, Subscription } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit , OnDestroy{

  users : User[];
  private userListener:Subscription;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.userListener = this.service.usersListener.subscribe( 
        usersList => this.users = usersList
    );

    this.service.fechtUsers();
  }

  ngOnDestroy(): void {
    this.userListener.unsubscribe();
  }
 
}
