import { Component, inject, WritableSignal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../../../data/services';

import { InvestmentResult } from '../../../domain/models';


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private readonly investmentService = inject(InvestmentService);

  get results():WritableSignal<InvestmentResult[] | undefined> {
    return this.investmentService.resultData;
  }
}
