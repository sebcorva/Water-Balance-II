import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataBaseService } from '../services/data-base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user_name: string="";
  password: string="";

  constructor(private db: DataBaseService, private alertController:AlertController, private router:Router) { }

  ngOnInit() {
    this.db.crearBD();
  }

  async login(){
    const isValidUser = await this.db.validarUsuario(this.user_name, this.password);
    if (isValidUser) {
      localStorage.setItem('user_name',this.user_name);
      localStorage.setItem('password',this.password);
      localStorage.setItem('authToken', 'token');
      this.router.navigate(['/home']);
    }
    else{
      this.presentAlert('Usuario incorrecto')
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
