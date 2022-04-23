import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Observable, Subscription } from 'rxjs';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
  
  // @Input() petId: string
  // @Output() onBack = new EventEmitter()
  subscription: Subscription
  pet: Pet
  answer: string
  answer$: Observable<string> | Promise<string>
  
  constructor(private petService: PetService, private route: ActivatedRoute, private router:Router) { }

 async  ngOnInit(): Promise<void> {
   this.subscription = this.route.params.subscribe(async params => {
     //test firstValueFrom instead of toPromise
     const pet = await firstValueFrom(this.petService.getById(params['id']), {defaultValue: undefined})
     this.pet = pet;
   })
  }

  onShouldAdopt() {
    this.answer$ = this.petService.shouldAdoptPet()
    // this.petService.shouldAdoptPet().subscribe(answer=>{
    //   this.answer = answer
    // })
  }

  onBack() {
    this.router.navigateByUrl('')
  }
}
