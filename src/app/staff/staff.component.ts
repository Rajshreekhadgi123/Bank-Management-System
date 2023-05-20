import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {

  fname = "";
  lname = "";
  email = "";
  phone = "";
  apply = "";
  gender : any = ['male','female'];
  city = "";
  state = "";
  address = "";

  constructor(){
    let data = localStorage.getItem('staff_data')
    if(data)
    this.staffregister = JSON.parse(data);
  }

  searchstaff:any;

  hideregister = true;
  // for model buttons
  hidestaff = true ; 
  editstaffshow = false; 
  hideupdate = false ;

  toholdinex  :any;
  toholdobj : any;


  staffregister :any = [];

  register()
  {
    let obj = {
      fname : this.fname,
      lname : this.lname,
      email : this.email,
      phone : this.phone,
      apply : this.apply,
      gender : this.gender,
      city : this.city,
      state : this.state,
      address : this.address

    }

    this.staffregister.push(obj);
    this.clearfield();
     // using local storage to store the data on table
     localStorage.setItem('staff_data' , JSON.stringify(this.staffregister));

  }

  clearfield()
  {
    this.fname = "";
    this.lname = "";
    this.email = "";
    this.phone = "";
    this.apply = "";
    this.gender = "";
    this.city = "";
    this.state = "";
    this.address = "";

  }

  delete(index : any)
  {
    this.staffregister.splice(index , 1)
  }

  edit(index:any , editinput:any)
  {

    this.toholdinex = index;
    this.toholdobj = editinput;


    this.fname = editinput.fname,
    this.lname = editinput.lname,
    this.email = editinput.email,
    this.phone = editinput.phone,
    this.apply = editinput.apply,
    this.gender = editinput.gender,
    this.city = editinput.city,
    this.state = editinput.state,
    this.address = editinput.address

    this.hideregister = false
    this.hidestaff = false
    this.editstaffshow = true
    this.hideupdate = true;
  }

  update()
  {
    this.staffregister[this.toholdinex].fname = this.fname,
    this.staffregister[this.toholdinex].lname = this.lname,
    this.staffregister[this.toholdinex].email = this.email,
    this.staffregister[this.toholdinex].phone = this.phone,
    this.staffregister[this.toholdinex].apply = this.apply,
    this.staffregister[this.toholdinex].gender = this.gender,
    this.staffregister[this.toholdinex].city = this.city,
    this.staffregister[this.toholdinex].state = this.state,
    this.staffregister[this.toholdinex].address = this.address

    this.hideregister = true;
    this.hidestaff = true;
    this.hideupdate = false;
    this.editstaffshow = false

    this.clearfield();




  }
}
