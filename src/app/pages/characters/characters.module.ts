import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CharactersComponent } from './characters.component';
import { SearchComponent } from './components/search/search.component';
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [
    CharactersComponent,
    SearchComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CharactersModule { }
