import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {

  pet:Pet
  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //no resolver way
    this.route.params.subscribe(async({id})=> {
      this.pet = id ? await firstValueFrom(this.petService.getById(id), {defaultValue: undefined}) : this.petService.getEmptyPet() as Pet
    })
  }

  async onSavePet() {
    this.pet.birthDate = new Date(this.pet.birthDate)
    await firstValueFrom(this.petService.save(this.pet), {defaultValue: undefined})
    this.router.navigateByUrl('')
  }
}
