import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.page.html',
  styleUrls: ['./meta.page.scss'],
})
export class MetaPage implements OnInit {
  
  AguaRecibida: number=0;

  constructor(private router: Router, private activateroute:ActivatedRoute) {
    this.activateroute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.AguaRecibida = this.router.getCurrentNavigation()?.extras?.state?.['AguaEnviada'];
        
        console.log();
      }
    })
   }

  ngOnInit() {
  }
  
  ingresar(){
    let navigationExtras: NavigationExtras = {
      state:{
        totalAgua: this.AguaRecibida
      }
    }
    this.router.navigate(['ingreso'], navigationExtras)
  }

  today: Date = new Date();

}
