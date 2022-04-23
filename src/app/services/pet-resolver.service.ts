import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Pet } from '../models/pet.model';
import { PetService } from './pet.service';

@Injectable({
  providedIn: 'root'
})
export class PetResolverService implements Resolve<Promise<Pet>> {

  constructor(private petService: PetService) { }

  async resolve(route: ActivatedRouteSnapshot){
    const id = route.params['id']
    const pet = await firstValueFrom(this.petService.getById(id), {defaultValue: undefined})
    return pet
  }
}
