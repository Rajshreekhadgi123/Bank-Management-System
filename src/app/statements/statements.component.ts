import { Component } from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent {

  fname = "";
  lname = "";
  actype = "";
  acnumber = "";
  branch = "";
  mobile = "";
  ifsc= "";
  totalbal = "";

  constructor()
  {
    let data = localStorage.getItem('stat_data')
    if(data)
    this.statregister = JSON.parse(data)
  }

  searchstat:any;

  hideregister = true;
  hideupdate = false;
  // for model buttons
  hidestat = true ; 
  editstatshow = false; 

  toholdinex  :any;
  toholdobj : any;


  statregister :any = [];

  register()
  {
    let obj = {
      fname : this.fname,
      lname : this.lname,
      actype : this.actype,
      acnumber:this.acnumber,
      branch:this.branch,
      mobile : this.mobile,
      ifsc : this.ifsc,
      totalbal : this.totalbal

    }

    this.statregister.push(obj);
    this.clearfield();
     // using local storage to store the data on table

     localStorage.setItem('stat_data', JSON.stringify(this.statregister));

  }

  clearfield()
  {
    this.fname = "";
    this.lname = "";
    this.actype = "";
    this.acnumber = "";
    this.branch = "";
    this.mobile = "";
    this.ifsc = "";
    this.totalbal = "";

  }

  delete(index : any)
  {
    this.statregister.splice(index , 1)
  }

  edit(index:any , editinput:any)
  {

    this.toholdinex = index;
    this.toholdobj = editinput;


    this.fname = editinput.fname,
    this.lname = editinput.lname,
    this.actype = editinput.actype,
    this.acnumber = editinput.acnumber,
    this.branch = editinput.branch,
    this.mobile = editinput.phone,
    this.ifsc = editinput.ifsc,
    this.totalbal = editinput.totalbal

    this.hideregister = false
    this.hidestat = false
    this.editstatshow = true
    this.hideupdate = true
  }

  update()
  {
    this.statregister[this.toholdinex].fname = this.fname,
    this.statregister[this.toholdinex].lname = this.lname,
    this.statregister[this.toholdinex].actype = this.actype,
    this.statregister[this.toholdinex].acnumber = this.acnumber,
    this.statregister[this.toholdinex].branch = this.branch,
    this.statregister[this.toholdinex].mobile = this.mobile,
    this.statregister[this.toholdinex].ifsc = this.ifsc,
    this.statregister[this.toholdinex].totalbal = this.totalbal

    this.hideregister = true;
    this.hideupdate = false;
    this.hidestat = true; 
    this.editstatshow = false;

    this.clearfield();

  }
}
