import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { PaginationService } from '../../shared/services/pagination.service';
import { transition, trigger, style, animate, query } from '@angular/animations';
import { Episode } from 'src/app/models/api.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        query(':self', style({ opacity: 0 })),
        query(':self', animate('200ms', style({ opacity: 1 })) )
        
      ]),
      transition(':leave', [
        query(':self', style({ opacity: 1 }) ),
        query(':self', animate('200ms', style({ opacity: 0 })) )
      ])
    ])
  ]
})
export class EpisodesComponent implements OnInit {

  totalEpisodes: Episode[] = []
  episodes: Episode[] = []
  limit: number = 8
  offset: number = 0
  nextPage: '' | string | null = ''
  
  loading: boolean = false
  error: boolean | string = false

  constructor(
    private apiService: ApiService,
    private paginationService: PaginationService
  ) {  }

  ngOnInit(): void {
    this.getEpisodes()
  }

  getEpisodes() { 
    if(this.nextPage !== null) {
      this.loading = true
      this.apiService.getEpisodes(this.nextPage)
      .subscribe({
        next: (data) => {
          this.totalEpisodes = [...this.totalEpisodes, ...data.results]
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
    const nextPage = this.paginationService.nextPage(this.totalEpisodes, this.episodes, this.limit)

    if(nextPage === null) {
      this.getEpisodes()
    } else {
      setTimeout(() => {
        this.loading = false
        this.episodes = [...this.episodes, ...nextPage.data] as Episode[]
        this.offset = nextPage.dataAdded
      }, 200)
    
    }
  }

}
