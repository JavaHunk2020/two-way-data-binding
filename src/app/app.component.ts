import { Component, OnInit } from '@angular/core';
import { SharedataService } from './sharedata.service';
import { Dog } from './dogs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 

  title = 'two-bindings';
  psignup:any;
  dogs : Dog[] =[];

  //Constrcutor injection similar to the spring
  constructor(private sharedataService:SharedataService) {
  }


  //This is used to load data while component is initialized 
  ngOnInit(): void {
    this.dogs=this.sharedataService.getDog();
  }

  deleteDog(dog: Dog) {
      this.dogs = this.dogs.filter(kuchbhi=>kuchbhi.name!==dog.name);
  }

 
  passDataToParent(data:any){
      this.psignup=data;
  }
  
}
