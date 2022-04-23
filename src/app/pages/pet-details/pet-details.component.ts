import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Observable, Subscription } from 'rxjs';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit, OnDestroy {
  
  // @Input() petId: string
  // @Output() onBack = new EventEmitter()
  subscription: Subscription
  pet: Pet
  answer: string
  answer$: Observable<string> | Promise<string>
  
  constructor(private petService: PetService, private route: ActivatedRoute, private router:Router) { }

 async  ngOnInit(): Promise<void> {
 //using the resolver data on the route , use the resolver service we created
  this.subscription = this.route.data.subscribe(data=> {
    this.pet = data['pet']
  })

   //without the resolver
  //  this.subscription = this.route.params.subscribe(async params => {
  //    //test firstValueFrom instead of toPromise
  //    const pet = await firstValueFrom(this.petService.getById(params['id']), {defaultValue: undefined})
  //    this.pet = pet;
  //  })

  // merge Pipes exmp or Divert it
  // this.route.params.pipe(mergeMap((params) => this.petService.getById(params.id)))
    //   .subscribe(pet => {
    //     this.pet = pet
    //   })
}
  

  onShouldAdopt() {
    this.answer$ = this.petService.shouldAdoptPet()
    // this.petService.shouldAdoptPet().subscribe(answer=>{
    //   this.answer = answer
    //   }
    // })
  }

  onBack() {
    this.router.navigateByUrl('')
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
