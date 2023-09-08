import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  username:string="";
  password:string="";
  email:string="";
  mobile:string="";
  address:string="";

  
  @Output()
  nejar:EventEmitter<any>=new EventEmitter<any>();

  signup() {
     
   let signup={"jungle":this.username,'password':this.password,email:this.email,mobile:this.mobile,address:this.address};
   console.log(signup);     
   this.nejar.emit(signup);
  }

}
