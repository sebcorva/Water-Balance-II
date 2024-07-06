import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/data-base.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user_name: string="";
  password: string="";

  constructor(private alertController:AlertController, private router:Router, private db: DataBaseService) { }

  ngOnInit() {
  }

  registro(){
    this.db.agregarUsuario(this.user_name, this.password)
    this.router.navigate(['login'])
    this.presentAlert('Usuario creado')
  }

  async presentAlert(message: string){
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
