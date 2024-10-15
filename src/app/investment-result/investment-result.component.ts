import { Component, inject } from '@angular/core';
import { Investment } from './investment-result.model';
import { InvestmentResultService } from './investment-result.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  investmentService = inject(InvestmentResultService);

  getResult() {
    return this.investmentService.result;
  }




}
