import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username: any;
  password: any;
  message:any;

constructor(private router: Router) { }


signup() {
    if("jack"===this.username && "jill"===this.password) {
         this.router.navigate(['/dogs']);
    }else{
      this.message="Hmmm username and password are not correct!";
    }
}


  ngOnInit(): void {
  }

}
