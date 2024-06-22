import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  
  user_name: any='';
  password: any='';
  nombre: any='';
  apellido: any='';
  edad: any='';
  peso: any='';
  totalAgua: any='';
  
  constructor(private router:Router, private alertController: AlertController, private menuCtrl: MenuController) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.user_name = localStorage.getItem('user_name');
    this.password = localStorage.getItem('password');
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
    this.edad = localStorage.getItem('edad');
    this.peso = localStorage.getItem('peso');
  }

  async presentAlert(message: string){
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: message,
      buttons: ['ok']
    });
    await alert.present();
  }

  guardar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === ''){
      this.presentAlert('Error: Nombre y apellido vacios');
    } else {
      localStorage.setItem('nombre',this.nombre);
      localStorage.setItem('apellido', this.apellido);
      localStorage.setItem('edad',this.edad);
      localStorage.setItem('peso', this.peso);
      localStorage.setItem('totalAgua',this.totalAgua);
      this.presentAlert(this.nombre+' tus datos han sido guardados');
    }
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.edad = '';
    this.peso = '';
  }

  onClick()
  {
    this.menuCtrl.toggle();
  }

}
