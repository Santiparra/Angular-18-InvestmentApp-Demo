import { Component } from '@angular/core';

import { HeaderComponent, UserInputComponent } from './presentation/components';
import { Investment } from './domain/models/investment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular-18-InvestmentApp-Demo';
  calculateInvestmentResults(investmentData: Investment) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentData;
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
  
    return annualData;
  }
}
