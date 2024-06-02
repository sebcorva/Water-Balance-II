import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  AguaRecibida: number = 0;
  
  Historial: { numero: number, consumo: number}[] = [
    {numero: 1, consumo: 250},
    {numero: 2, consumo: 500},
    {numero: 3, consumo: 1000},
  ]

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
