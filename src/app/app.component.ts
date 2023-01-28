import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './app.component.scss',
    './app.component.less'],
  providers: [
    {
      provide: TUI_IS_IOS,
      useValue: false,
    },
    {
      provide: TUI_IS_ANDROID,
      useValue: true,
    },
  ],
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

  readonly items = [
    {
      text: 'Maps',
      icon: 'tuiIconCard',
    },
    {
      text: 'Calls',
      icon: 'tuiIconCall',
    },
    {
      text: 'Settings',
      icon: 'tuiIconSettings',
    },
  ];

  activeItemIndex = 0;

  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

  onClick(item: string): void {
    this.alerts.open(item).subscribe();
  }
}
