import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  seletedUser
  constructor() {
    this.seletedUser = JSON.parse(localStorage.getItem('seletedUser'));

  }

  ngOnInit() {
  }

}