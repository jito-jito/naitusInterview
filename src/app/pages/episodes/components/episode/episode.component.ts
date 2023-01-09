import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/models/api.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {

  @Input() episode: Episode = {
    id: 0,
    name: '',
    episode: '',
    air_date: ''
  }
}
