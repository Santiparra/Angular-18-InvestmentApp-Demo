import { Component } from '@angular/core';

import { HeaderComponent, UserInputComponent } from './presentation/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular-18-InvestmentApp-Demo';
}
