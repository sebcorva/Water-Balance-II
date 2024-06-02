import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string="";
  password: string="";

  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }

  login(){
    if (this.usuario.trim() == 'seba' && this.password.trim() == '1234'){
      let navigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }
      }
      this.router.navigate(['/home'], navigationExtras);
    }
    else{
      this.presentAlert('Incorrecto')
    }
  }

  async presentAlert(message: string){
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
