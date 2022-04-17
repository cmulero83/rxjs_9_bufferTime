// https://www.youtube.com/watch?v=M1Aw6GnUDH8&list=PLHgpVrCyLWAoSkzNPYt9nhmtSlpXjtnju&index=9
// Uso de bufferTime

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_9_bufferTime';

  public ngOnInit(): void{

    // Crear un observable que ser va a ejecutar cada 0.5 segundos ...
    const timer = interval(500)

    // El bufferTime, va a generar un buffer, va almacenar todos los datos hasta que se de una condicion
    // y entonces va a lanzar todos los datos como un array...
    // Con pipe, le añado a un observable otro observable
    // Lo que va hacer, es almacenar lo que ocurra en timer por 2 segundos

    const buffer = timer.pipe(bufferTime(2000))

    const subs = buffer.subscribe( val => console.log('Buffer: ' + val))



  }
}
