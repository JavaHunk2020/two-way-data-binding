import { Component, OnInit } from '@angular/core';
import { Dog } from '../dogs.model';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {

  dog: Dog = new Dog('','','','');
   buttonLabel:string = "Add Dog"; 
  dogs : Dog[] =[];
  

     //Constrcutor injection similar to the spring
    constructor(private sharedataService:SharedataService) {
    }
  
    //This is used to load data while component is initialized 
    ngOnInit(): void {
      this.dogs=this.sharedataService.getDog();
    }


    addDog(dogDialog:any) {
      //Creating clone  
      let clonedDog = Object.assign({}, this.dog);
      this.dogs.push(clonedDog);
      dogDialog.close();
      
      //Making this object blank - >>>
      //form will become blank!
      this.dog.name='';
      this.dog.color='';
      this.dog.image='';
      this.dog.breed='';
      this.buttonLabel="Add Dog";
    }

  
    deleteDog(dog: Dog) {
        this.dogs = this.dogs.filter(kuchbhi=>kuchbhi.name!==dog.name);
    }

    editDog(dog: Dog , dogDialog:any) {
      this.dog=dog;
      this.buttonLabel="Update";
      dogDialog.show();
  }

}
