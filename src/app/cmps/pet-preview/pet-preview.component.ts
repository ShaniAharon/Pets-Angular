import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'pet-preview',
  templateUrl: './pet-preview.component.html',
  styleUrls: ['./pet-preview.component.scss']
})
export class PetPreviewComponent implements OnInit {
  @Input() pet!: Pet
  @Output() onSelect = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onSelectPet() {
    console.log('select pet');
    this.onSelect.emit(this.pet._id)
  }

}
