import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.page.html',
  styleUrls: ['./meta.page.scss'],
})
export class MetaPage implements OnInit {
  
  totalAgua: any=''; 

  constructor(private router: Router) {
   }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.totalAgua = localStorage.getItem('totalAgua');
  }

  ingresar(){
    this.router.navigate(['ingreso'])
  }

  today: Date = new Date();

}
