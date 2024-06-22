import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../services/consumo.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  consumos: any[] = [];

  constructor(private consumoService: ConsumoService) { }

  ngOnInit(): void {
    this.cargarConsumos();
  }

  cargarConsumos(): void {
    this.consumos = this.consumoService.obtenerconsumo();
  }
  

 

}
