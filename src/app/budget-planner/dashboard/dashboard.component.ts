import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSackDollar, faReceipt, faSackXmark, faPiggyBank, faMoneyBillTransfer, faWallet } from '@fortawesome/free-solid-svg-icons';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(public router: Router) { }

  //Icons cards
  iconMoney = faSackDollar;
  iconTrans = faReceipt;
  iconExpense = faSackXmark;
  iconSavings = faPiggyBank;
  iconMoneyTrans = faMoneyBillTransfer;
  iconTotal = faWallet;

  //Card Income
  lastMonthsIncome = ['Janeiro: R$ 1.000,00', 'Fevereiro: R$ 1.500,00', 'Março: R$ 1.200,00'];
  currentMonthIconme = 'R$ 2.000,00'

  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }

  //Card Expense
  lastMonthsExpense = ['Janeiro: R$ 800,00', 'Fevereiro: R$ 1.000,00', 'Março: R$ 1.200,00'];
  currentMonthExpense = 'R$ 1.500,00';

  onExpense() {
    this.router.navigate(['budget-planner/expense']);
  }

  //Transactions
  todoTransactions = [
    { description: 'Conta de luz' },
    { description: 'Laboratório Raio-X' },
    { description: 'Mercado' },
    { description: 'Seguro de vida' }
  ];

  onTodo() {
    this.router.navigate(['/budget-planner/todo']);
  }

  //Total
  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;

  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
}
