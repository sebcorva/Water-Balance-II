import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.page.html',
  styleUrls: ['./consejos.page.scss'],
})
export class ConsejosPage implements OnInit {

  post: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.obtenerDatos(1).subscribe(data => {
      console.log('se obtubo contenido de api')
      this.post = data;
    });

    const nuevoPost = {
      title: '¡Lleva una botella de agua contigo a todas partes!',
      body: 'Tener agua a mano te ayudará a beber con más frecuencia y mantenerte hidratado durante todo el día. Opta por una botella reutilizable para cuidar del medio ambiente.',
      userId: 1
    };

    this.dataService.crearDatos(nuevoPost).subscribe(post => {
      console.log('post creado', post);
    });

  }

}
