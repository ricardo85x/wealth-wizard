import { Injectable } from "@angular/core";
import { Investment } from "./investment-result.model";
import { CalculatorFields } from "../calculator/calculator.model";

@Injectable({
    providedIn: 'root'
})
export class InvestmentResultService {

    result : Investment[] = []; 

    calculateInvestmentResult(input: CalculatorFields)  {
        this.result = []; 
        const { initialInvestment, annualInvestment, expectedReturn, duration } = input;
        let totalInvestment = initialInvestment;
        let totalInterest = 0;

        for (let year = 1; year <= duration; year++) {
            const interest = (totalInvestment * (expectedReturn / 100));
            totalInvestment += interest + annualInvestment; 

            totalInterest += interest;

            this.result.push({
                year: year,
                investmentValue: totalInvestment,
                interest: interest,
                totalInterest: totalInterest,
                investedCapital: initialInvestment + (annualInvestment * year) // Capital investido total
            });
        }
    }
}