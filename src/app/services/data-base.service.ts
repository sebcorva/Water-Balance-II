import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  public database!: SQLiteObject;

  sesion: string = "CREATE TABLE IF NOT EXISTS sesion_data(user_name VARCHAR(8) PRIMARY KEY, password INTEGER NOT NULL);"
  registro: string = "INSERT or IGNORE INTO sesion_data(user_name, password) VALUES ('seba', 1234);"
  listaSesion = new BehaviorSubject<Usuario[]>([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, public toasController: ToastController) { 
    this.crearBD();
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  crearBD(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'database.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //this.presentToast('Base de datos creada');
        this.crearTablas();
      }).catch(e => this.presentToast(e));
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.sesion, []);
      await this.database.executeSql(this.registro, []);
      //this.presentToast('Tablas creadas');
      this.buscarUsuario();
      this.isDbReady.next(true);
    }catch(e) {
      this.presentToast('error crear tabla' + e);
    }
  }

  fetchUsuario(): Observable<Usuario[]> {
    return this.listaSesion.asObservable();
  }

  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res =>{
      let items: Usuario[] = [];
      if (res.rows.length > 0){
        for (let i = 0; i < res.rows.length; i ++) {
          items.push({
            user_name: res.rows.item(i).user_name,
            password: res.rows.item(i).password
          });
        }
      }
      this.listaSesion.next(items);
      return items;
    }).catch(e => {
      //this.presentToast('error al ejecutar sql' + e);
    })
  } 

  agregarUsuario(user_name: any, password: any){
    let data=[user_name, password];
    return this.database.executeSql('INSERT INTO sesion_data(user_name, password) VALUES (?,?)', data)
    .then(res =>{
      this.buscarUsuario();
    })
  }

  editarUsuario(user_name: any, password: any){
    let data=[password, user_name];
    return this.database.executeSql('UPDATE sesion_data SET password = ? WHERE user_name = ?', data)
    .then(res =>{
      this.buscarUsuario();
    })
  }

  eliminarUsuario(user_name: any){
    return this.database.executeSql('DELETE FROM sesion_data WHERE user_name = ?', [user_name])
    .then(res =>{
      this.buscarUsuario();
    })
  }

  async validarUsuario(user_name: any, password: any): Promise<boolean> {
    const sql = 'SELECT * FROM sesion_data WHERE user_name = ? AND password = ?';
    const data = [user_name, password];
    try {
      const res = await this.database.executeSql(sql, data);
      //this.presentToast('Usuario validado')
      return res.rows.length >0;
    }catch (error) {
      console.error('Error de validacion usuario:', error);
      return false;
    }
  }

  async presentToast(mensaje: string) {
    const toast = await this.toasController.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
