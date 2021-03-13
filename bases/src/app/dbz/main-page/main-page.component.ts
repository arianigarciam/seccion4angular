import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  personajes: Personaje[] = [
    {
      nombre: "Primero",
      poder: 111
    },
    {
      nombre: "Segunda",
      poder: 222
    }
  ];

  nuevo: Personaje = {
    nombre : "desde main-component",
    poder: 555,
  }
  agregarNuevoPersonaje( argumento: Personaje){
  
    this.personajes.push(argumento)
  }

  // agregar(){

  //   if(this.nuevo.nombre.trim().length === 0){
  //     return;
  //   }
  //   console.log( this.nuevo );
  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   };
  // }
  
  cambiarNombre(event : any){
    console.log(event.target.value);
  }

}
