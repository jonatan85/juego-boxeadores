import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Boxeadores', url: '/boxeadores', },
    { title: 'Crear Boxeador', url: '/formulario-crear', },
  ];
  constructor() {}
}
