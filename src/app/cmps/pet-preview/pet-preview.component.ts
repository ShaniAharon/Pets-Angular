import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'pet-preview',
  templateUrl: './pet-preview.component.html',
  styleUrls: ['./pet-preview.component.scss']
})
export class PetPreviewComponent implements OnInit {
  @Input() pet!: Pet
  @Output() onRemove = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  

}
