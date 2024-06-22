import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoService } from '../services/consumo.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  mlAgua: any=0;
  totalAgua: number=0; 
  nuevoValor: any=0;
  tope: number=0;

  consumos: any[] = [];
  
  constructor(private alertController:AlertController, private router:Router, private consumoService: ConsumoService) { 
  }
    
  ngOnInit() {
    const agua: any = localStorage.getItem('totalAgua');
    if (agua !== null){
      this.totalAgua = +agua;
    }
  }

  ingresar(): void{
    if(this.mlAgua > 0){
      this.agregarConsumo();
      this.nuevoValor = this.totalAgua + this.mlAgua;
      localStorage.setItem('totalAgua',this.nuevoValor.toString());
      this.tope = this.nuevoValor;
      if (this.tope < 2000){
        this.router.navigate(['meta'])
      }
      else{
        this.router.navigate(['meta-alcanzada'])
      }
    }
    else{
      this.presentAlert('Ingrese una cantidad valida')
    }
  }

  agregarConsumo(){
    this.consumoService.agregaConsumo(this.mlAgua); 
    this.router.navigate(['meta'])
      .then(() =>{
        //this.presentAlert('agregado el consumo');
      })
    
  }

  today: Date = new Date();
  
  async presentAlert(message: string){
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
