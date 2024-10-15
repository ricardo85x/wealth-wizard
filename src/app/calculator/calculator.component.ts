import { Component, inject } from '@angular/core';
import { CalculatorFields } from './calculator.model';
import { FormsModule } from '@angular/forms';
import { InvestmentResultService } from '../investment-result/investment-result.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  investmentService = inject(InvestmentResultService);

  fields: CalculatorFields = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  onSubmit() {
    this.investmentService.calculateInvestmentResult(this.fields);
  }

}
