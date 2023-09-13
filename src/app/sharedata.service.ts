import { Injectable } from '@angular/core';
import { Dog } from './dogs.model';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  private dogs:Dog[] =[];

  constructor() { 
    this.dogs.push(new Dog("James","White",'https://a-z-animals.com/media/2023/06/shutterstock-1929372332-huge-licensed-scaled-1024x683.jpg',"Labrador Retriever"));
    this.dogs.push(new Dog("Tommy","Black",'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRoTnd80s9q0wF7nb_dPH_XwK4DR9wAVPmjkMkIp3eEldR4Uz4cfiFD-FWiQGXjPPZ57lQ5KKWrtPTHsZw',"Bulldog"));
    this.dogs.push(new Dog("Bond","Brown",'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSgU4nPfMA2Ss-LB1u-cfjkd3JCEsyeyaLqufqktH0cl4DfeyvjoGMubCIvYW5OwwpB9iMBWMNAvl3qiwA',"German Shepherd"));
    this.dogs.push(new Dog("Jacky","Gray",'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQJlwSiVSYPSDq3WyLiDm8KUZyUwX8z8DskuvOC9u3ENsxbGPRa_Ah3odil3LKaZOU8Ev-ZYZ9fBcqqrfA',"Pug"));
    this.dogs.push(new Dog("Remie","Yellow",'',"Chihuahua"));
  }

  public getDog() : Dog[] {
     return this.dogs;
  }
}
