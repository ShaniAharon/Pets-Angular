import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PetFilter } from 'src/app/models/pet-filter.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.scss']
})
export class PetFilterComponent implements OnInit {

  filterBy: PetFilter
  subscription: Subscription
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.subscription = this.petService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  onSetFilter() {
    this.petService.setFilter({...this.filterBy})
  }

}
