import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../../../data/services';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private readonly investmentService = inject(InvestmentService);

  investmentResults = computed(() => this.investmentService.resultData());
}
