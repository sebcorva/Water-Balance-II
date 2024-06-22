import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {
  
  user_name: any='';
  constructor() { }

  ngOnInit() {
    localStorage.setItem('user_name',this.user_name);
  }

  ionViewWillEnter(){
    this.user_name = localStorage.getItem('user_name');
  }

}
