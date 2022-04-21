import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  @Input() pets: Pet[] = [] // prop
  @Output() onSelect = new EventEmitter<string>() // emit
  constructor() { }

  ngOnInit(): void {
  }

}
