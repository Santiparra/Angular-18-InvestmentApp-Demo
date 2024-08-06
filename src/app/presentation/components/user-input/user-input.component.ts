import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../../../data/services';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private readonly investmentService: InvestmentService) {}

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('4');
  enteredDuration = signal('10');

  onSubmit(): void {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.enteredInitialInvestment()),
      annualInvestment: Number(this.enteredAnnualInvestment()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      duration: Number(this.enteredDuration()),
    });
    this.resetForm();
  }

  resetForm(): void {
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('4');
    this.enteredDuration.set('10');
  }
}
