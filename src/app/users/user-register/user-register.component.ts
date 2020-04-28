import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';

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

  constructor(private service : UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  save() {
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
      this.message = ex && ex.error && ex.error.message ? ex.error.message : "Erro interno";
      this.isError = true;
      this.tagMessage.first.open();
      }  
    );
  }
}
