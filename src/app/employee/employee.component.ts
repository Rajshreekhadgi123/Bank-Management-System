import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  

  fname = "";
  lname = "";
  email = "";
  password = "";
  married :any;
  gender : any =['male','female'];
  phone = "";
  city = "";
  state = "";
  address = "";

  constructor(){
    let data = localStorage.getItem('emp_data')
    if(data)
    this.empregister = JSON.parse(data)
  }

  searchemp:any;

  hideregister = true;
  hideupdate = false;
  // for model buttons
  hideaddemp = true ; 
  editempshow = false; 


  toholdinex  :any;
  toholdobj : any;


  empregister :any = [];

  register()
  {
    let obj = {
      fname : this.fname,
      lname : this.lname,
      email : this.email,
      password : this.password,
      married : this.married,
      gender : this.gender,
      phone : this.phone,
      city : this.city,
      state : this.state,
      address : this.address

    }

    this.empregister.push(obj);
    this.clearfield();
     // using local storage to store the data on table
     localStorage.setItem('emp_data' , JSON.stringify(this.empregister));


  }

  clearfield()
  {
    this.fname = "";
    this.lname = "";
    this.email = "";
    this.password = "";
    this.married = "";
    this.gender = "";
    this.phone = "";
    this.city = "";
    this.state = "";
    this.address = "";

  }

  delete(index : any)
  {
    this.empregister.splice(index , 1)
    localStorage.setItem('emp_data' , JSON.stringify(this.empregister));

  }

  edit(index:any , editinput:any)
  {

    this.toholdinex = index;
    this.toholdobj = editinput;


    this.fname = editinput.fname,
    this.lname = editinput.lname,
    this.email = editinput.email,
    this.password = editinput.password,
    this.married = editinput.married,
    this.gender = editinput.gender,
    this.phone = editinput.phone,
    this.city = editinput.city,
    this.state = editinput.state,
    this.address = editinput.address

    this.hideregister = false
    this.hideaddemp = false
    this.editempshow = true
    this.hideupdate = true;
    localStorage.setItem('emp_data' , JSON.stringify(this.empregister));

  }

  update()
  {
    this.empregister[this.toholdinex].fname = this.fname,
    this.empregister[this.toholdinex].lname = this.lname,
    this.empregister[this.toholdinex].email = this.email,
    this.empregister[this.toholdinex].password = this.password,
    this.empregister[this.toholdinex].married = this.married,
    this.empregister[this.toholdinex].gender = this.gender,
    this.empregister[this.toholdinex].phone = this.phone,
    this.empregister[this.toholdinex].city = this.city,
    this.empregister[this.toholdinex].state = this.state,
    this.empregister[this.toholdinex].address = this.address

    this.clearfield()
    this.hideregister = true;
    this.hideupdate = false;
    this.hideaddemp = true;
    this.editempshow = false;
    localStorage.setItem('emp_data' , JSON.stringify(this.empregister));


  }
}
