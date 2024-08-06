import { Component, signal } from '@angular/core';

import {
  HeaderComponent,
  InvestmentResultsComponent,
  UserInputComponent,
} from './presentation/components';
import { Investment, InvestmentResult } from './domain/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular-18-InvestmentApp-Demo';


}
