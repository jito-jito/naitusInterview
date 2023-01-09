import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() search = new EventEmitter<{
    searchName: string,
    status: string
  }>()
  searchName = ''

  searchData() {
    const selectInput = document.getElementById('selectInput') as HTMLInputElement

    this.search.emit({
      searchName: this.searchName,
      status: selectInput.value
    })
  }
}
