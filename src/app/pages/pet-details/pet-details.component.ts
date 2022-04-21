import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
  
  @Input() petId: string
  @Output() onBack = new EventEmitter()
  pet: Pet
  answer: string
  answer$: Observable<string> | Promise<string>
  
  constructor(private petService: PetService) { }

 async  ngOnInit(): Promise<void> {
   const pet = await this.petService.getById(this.petId).toPromise()
   this.pet = pet 
  }

  onShouldAdopt() {
    this.answer$ = this.petService.shouldAdoptPet()
    // this.petService.shouldAdoptPet().subscribe(answer=>{
    //   this.answer = answer
    // })
  }

}
