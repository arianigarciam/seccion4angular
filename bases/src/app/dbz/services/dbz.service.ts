import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

 @Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: "Primero",
          poder: 111
        },
        {
          nombre: "Segunda",
          poder: 222
        }
      ];

      get personajes() {
          return [...this._personajes];
      }
      
    constructor(){ }

    agregarPersonaje( personaje:Personaje ){
        this._personajes.push(personaje);
    }
}
