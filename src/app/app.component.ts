import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './app.component.less']
})
export class AppComponent {
  title = 'taiga';

  open = false;

  readonly webApis = ['Common', 'Audio', 'Canvas', 'Geolocation', 'MIDI', 'Workers'];

  readonly tinkoff = [
    'Taiga-UI',
    'ng-event-plugins',
    'ng-polymorpheus',
    'ng-dompurify',
  ];

  toggle(open: boolean): void {
    this.open = open;
  }
}
