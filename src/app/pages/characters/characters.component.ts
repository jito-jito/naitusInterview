import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { Character } from 'src/app/models/api.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  totalResults: Character[] = []
  characters: Character[] = []
  selectedCharacter: Character | null = null
 
  limit: number = 8
  offset: number = 0
  nextPage: '' | string | null = ''
  
  loading: boolean = false
  error: boolean | string = false

  constructor( 
    private apiService: ApiService,
    private paginationService: PaginationService 
  ) {  }

  ngOnInit() {
    this.loading = true
    this.getCharacters()
  }

  searchResults(event: {searchName: string, status: string}) {
    this.offset = 0
    this.characters = []
    this.selectedCharacter = null
    this.error = false
    this.loading = true
    this.apiService.getCharactersByStatus(event)
      .subscribe({
        next: (data) => {
          this.totalResults = [...data.results]
          this.nextPage = data.info.next as string

          this.loadMore()
          this.loading = false
        },
        error: (error) => { 
          this.loading = false
          this.error = error.message  
        }
    })
  }

  getCharacters() {
    if(this.nextPage !== null) {
      this.loading = true
      this.apiService.getCharacters(this.nextPage)
      .subscribe({
        next: (data) => {
          this.totalResults = [...this.totalResults, ...data.results]
          this.nextPage = data.info.next as string

          this.loadMore()
          this.loading = false
        },
        error: (error) => { 
          this.loading = false
          this.error = error.message 
        }
      })
    }  else {
      this.error = 'no more results'
    }   
  }

  loadMore() {
    const nextPage = this.paginationService.nextPage(this.totalResults, this.characters, this.limit)

    if(nextPage === null) {
      this.getCharacters()
    } else {
      this.characters = [...this.characters, ...nextPage.data] as Character[]
      this.offset = nextPage.dataAdded
    }
  }

  selectCharacter(characterData: Character) {
    this.selectedCharacter = characterData
  }

}
