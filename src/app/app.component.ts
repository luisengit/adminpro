import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';


@Component({
  selector: 'map-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _ajustes: SettingsService ) {}

}
