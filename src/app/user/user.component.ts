import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: any;
  constructor(public apiService: ApiService, public route: Router) {
    this.getUsers();
  }

  ngOnInit() {
  }


  getUsers() {
    this.apiService.getUsers()
      .subscribe(users => {
        this.userList = users;
      });
  }

  userDetail(user) {
    localStorage.setItem('seletedUser', JSON.stringify(user));
    this.route.navigate(['userdetail']);
  }
}
