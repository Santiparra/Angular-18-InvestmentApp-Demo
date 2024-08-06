import { Component } from '@angular/core';

import { HeaderComponent } from './presentation/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular-18-InvestmentApp-Demo';
}
