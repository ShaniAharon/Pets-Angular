import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-app',
  templateUrl: './pet-app.component.html',
  styleUrls: ['./pet-app.component.scss']
})
export class PetAppComponent implements OnInit {
 
  pets: Pet[]
  pets$: Observable<Pet[]>
  subscription: Subscription
  selectedPetId: string

  
  msg = new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved!')
    }, 1000)
  })
  
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.query() // get the balls rolling
    this.pets$ = this.petService.pets$ // gets the pets
    // this.subscription = this.petService.pets$.subscribe(pets => {
    //   this.pets = pets
    // })

    // setInterval(()=>{
    //   this.petService.save({ name: 'Momo', age: 2, birthDate: new Date('2020-11-12') } as Pet)
    //   // this.petService.save(<Pet>{ name: 'Momo', age: 2, birthDate: new Date('2020-11-12') } )
    // } ,1000)
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }

}
