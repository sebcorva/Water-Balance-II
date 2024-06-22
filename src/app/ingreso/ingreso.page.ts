import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  mlAgua: number=0;
  totalAgua: number=0;
  
  constructor(private alertController:AlertController, private router:Router, private activateroute:ActivatedRoute) { 
    this.activateroute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.totalAgua = this.router.getCurrentNavigation()?.extras?.state?.['totalAgua'];
        
        console.log();
      }
    })
  }
    
  ngOnInit() {
  }


  ingresar(){
    if(this.mlAgua > 0){
      this.totalAgua += this.mlAgua
      let navigationExtras: NavigationExtras = {
        state:{
          AguaEnviada: this.totalAgua
        }
      }
      if (this.mlAgua < 2000 && this.totalAgua < 2000){
        this.router.navigate(['meta'], navigationExtras)
      }
      else{
        this.router.navigate(['meta-alcanzada'], navigationExtras)
      }
    }
    else{
      this.presentAlert('Ingrese una cantidad valida')
    }
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
