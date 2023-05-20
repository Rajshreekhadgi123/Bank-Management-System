import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomersComponent } from './customers/customers.component';
import { StaffComponent } from './staff/staff.component';
import { StatementsComponent } from './statements/statements.component';

const routes: Routes = [
  {
    path:'' , component:LoginComponent , pathMatch:'full',
  },
  {
    path:'employee' , component:EmployeeComponent ,
  },
  {
    path:'customers' , component:CustomersComponent,
  },
  {
    path:'staff' , component:StaffComponent,
  },
  {
    path:'statements' , component:StatementsComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
