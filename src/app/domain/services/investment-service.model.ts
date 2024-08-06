import { Investment } from "../models/investment.model";

export interface IInvestmentService {
  calculateInvestmentResults(investmentData: Investment): void;
}