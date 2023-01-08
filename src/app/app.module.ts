import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterComponent } from './components/character/character.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterComponent,
    EpisodeComponent,
    CharactersComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
