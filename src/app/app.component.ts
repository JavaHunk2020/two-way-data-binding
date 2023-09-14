import { Component, OnInit } from '@angular/core';
import { SharedataService } from './sharedata.service';
import { Dog } from './dogs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

  title = 'two-bindings';
  psignup:any;
 

 

 
  passDataToParent(data:any){
      this.psignup=data;
  }
  
}
