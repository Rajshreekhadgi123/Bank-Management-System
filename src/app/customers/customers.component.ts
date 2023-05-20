import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  fname = "";
  lname = "";
  email = "";
  password = "";
  mobile = "";
  dob:any;
  city = "";
  country= "";
  address = "";

  constructor(){
    let data = localStorage.getItem('cust_data')
    if(data)
    this.custregister = JSON.parse(data)
  }

  searchcust:any;

  hideregister = true;
  // for model buttons
  hidecust = true ; 
  editcustshow = false; 

  toholdinex  :any;
  toholdobj : any;


  custregister :any = [];

  register()
  {
    let obj = {
      fname : this.fname,
      lname : this.lname,
      email : this.email,
      password : this.password,
      mobile : this.mobile,
      dob:this.dob,
      city : this.city,
      country : this.country,
      address : this.address

    }

    this.custregister.push(obj);
    this.clearfield();

     // using local storage to store the data on table
     localStorage.setItem('cust_data' , JSON.stringify(this.custregister));

  }

  clearfield()
  {
    this.fname = "";
    this.lname = "";
    this.email = "";
    this.password = "";
    this.mobile = "";
    this.dob = "";
    this.city = "";
    this.country = "";
    this.address = "";

  }

  delete(index : any)
  {
    this.custregister.splice(index , 1)
  }

  edit(index:any , editinput:any)
  {

    this.toholdinex = index;
    this.toholdobj = editinput;


    this.fname = editinput.fname,
    this.lname = editinput.lname,
    this.email = editinput.email,
    this.password = editinput.password,
    this.mobile = editinput.phone,
    this.dob = editinput.dob,
    this.city = editinput.city,
    this.country = editinput.country,
    this.address = editinput.address

    this.hideregister = false
    this.hidecust = false
    this.editcustshow = true
  }

  update()
  {
    this.custregister[this.toholdinex].fname = this.fname,
    this.custregister[this.toholdinex].lname = this.lname,
    this.custregister[this.toholdinex].email = this.email,
    this.custregister[this.toholdinex].password = this.password,
    this.custregister[this.toholdinex].mobile = this.mobile,
    this.custregister[this.toholdinex].dob = this.dob,
    this.custregister[this.toholdinex].city = this.city,
    this.custregister[this.toholdinex].state = this.country,
    this.custregister[this.toholdinex].address = this.address

    this.clearfield();

    this.hidecust = true;
    this.editcustshow = false;
    this.hideregister = true

  }
}
