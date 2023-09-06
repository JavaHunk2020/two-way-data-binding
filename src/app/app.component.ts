import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'two-bindings';
  username:string="";
  password:string="";
  email:string="";
  mobile:string="";
  address:string="";

  psignup:any;

  signup() {
     
   let signup={"jungle":this.username,'password':this.password,email:this.email,mobile:this.mobile,address:this.address};
   console.log(signup);     
   this.psignup=signup;
  }
  
}
