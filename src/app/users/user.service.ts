import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersListener = new Subject<User[]>();
  users: User[];

  constructor(private http: HttpClient) { }

  fechtUsers() {
    this.http.get<User[]>(`${environment.SERVER_URL}/users`)
      .subscribe(response => {
        this.users = response;
        this.usersListener.next(this.users);
      }
      );
  }

  saveUser(user:User) {
    this.http.post<User>(`${environment.SERVER_URL}/users`,user)
      .subscribe();
  }

}
