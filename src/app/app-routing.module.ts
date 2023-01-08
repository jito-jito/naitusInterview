import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personajes',
    title: 'Rick&Morty',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    title: 'Rick&Morty',
    component: CharactersComponent
  },
  {
    path: 'episodios',
    title: 'Rick&Morty',
    component: EpisodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
