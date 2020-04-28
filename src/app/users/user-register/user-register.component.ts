import { Component, OnInit, ViewChildren } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  loading = false;
  user = new User();
  
  message = '';
  isError = false;

  @ViewChildren('tagMessage') tagMessage:any;

  constructor(private service : UserService) { }

  ngOnInit(): void {
  }

  save(form:NgForm) {

    if(!form.valid) {
      this.showError("Complete os dados do formulario");
      return;
    }  

    this.loading = true;
    this.service.saveUser(this.user).subscribe(
      response => {
        this.loading = false;
        this.user = new User();
        this.message = "Usuário cadastrado";
        this.isError = false;
        this.tagMessage.first.open();
      }
    ,ex => {
      this.loading = false;
      console.log(ex)
      let message = ex && ex.error && ex.error.message ? ex.error.message : "Erro interno";
      this.showError(message);
      }  
    );
  }

  showError(message : string) {
    this.message = message;
    this.isError = true;
    this.tagMessage.first.open();
  }
}
