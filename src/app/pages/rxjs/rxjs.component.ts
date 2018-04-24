import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'map-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()


    // .retry(2) // para q lo intente de nuevo
      .subscribe(
        numero => console.log( 'Subs ', numero ),
        error => console.error('Error en el obs', error),
        () => console.log('El observador terminó!')
      );
  }

  ngOnInit() {
    this.subscription.unsubscribe();
  }

  ngOnDestroy() {
    console.log( 'La pagina se va a cerrar' );
  }

  regresaObservable(): Observable<any> {

    return new Observable( observer => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        // if ( contador === 2 ) {
        //   observer.error('Auxilio!');
        // }

      }, 500 );


    })

    .retry(2)
    .map( (resp: any) => {

      return resp.valor;

    })
    .filter( (valor, index) => {

      if ( (valor % 2) === 1 ) {
        // impar
        return true;
      } else {
        // par
        return false;
      }

    });
  }

}
