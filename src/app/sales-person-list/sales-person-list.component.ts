import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Junior', 'Dos', 'JD@mail.com', 50000),
    new SalesPerson('Mario', 'sir', 'Ms@mail.com', 40000),
    new SalesPerson('herve', 'renard', 'herve@mail.com', 90000),
    new SalesPerson('tbrbira', 'hassan', 'Joe@mail.com', 60000),
  ];
}
