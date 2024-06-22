import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  private storageKey = 'consumos';

  constructor() { }

  obtenerconsumo(): string[] {
    const consumos = localStorage.getItem(this.storageKey);
    return consumos ? JSON.parse(consumos) : [];
  }

  agregaConsumo(consumo: string): void {
    const consumos = this.obtenerconsumo();
    consumos.push(consumo);
    localStorage.setItem(this.storageKey, JSON.stringify(consumos));
  }

}
