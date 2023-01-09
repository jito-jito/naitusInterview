import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/api.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() character: Character = {
    id: 0,
    name: '',
    status: '',
    gender: '',
    origin: {
      name: '',
      url: ''
    },
    image: ''
  }



}
