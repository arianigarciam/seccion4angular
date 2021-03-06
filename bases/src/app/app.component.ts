import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'bases';
  numero:number = 10 ;

  acumular(valor : number ){
    this.numero += valor;
  }
}
