import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


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
    loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'episodios',
    title: 'Rick&Morty',
    loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
