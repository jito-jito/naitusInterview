import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characters: {}[] = []
  selectedCharacter: {
    name: string,
    img: string
  } | null = null
  isLoading: Boolean = false
}
