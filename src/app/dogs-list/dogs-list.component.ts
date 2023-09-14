import { Component, OnInit } from '@angular/core';
import { Dog } from '../dogs.model';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {

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

}
