import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meta-alcanzada',
  templateUrl: './meta-alcanzada.page.html',
  styleUrls: ['./meta-alcanzada.page.scss'],
})
export class MetaAlcanzadaPage implements OnInit {

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

}
