import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman","SEGUNDO","TER","cuarto"];
  heroeBorrado: string = "";
  BorrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
