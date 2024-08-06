import { Injectable, signal } from '@angular/core';

import { InvestmentResult, Investment } from '../../domain/models';
import { IInvestmentService } from '../../domain/services';

@Injectable({ providedIn: 'root' })
export class InvestmentService implements IInvestmentService {
  constructor() {}

  resultData = signal<InvestmentResult[] | undefined>(undefined);

  calculateInvestmentResults(investmentData: Investment) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      investmentData;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData.set(annualData);
  }
}
