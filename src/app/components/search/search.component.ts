import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.sass'],
  providers: [SpotifyService],
})
export class SearchComponent {
  searchStr!: string;
  searchRes!: Artist[] | any;

  constructor(private _spotifyService: SpotifyService) {}

  searchMusic() {
    if (this.searchStr != '')
      this._spotifyService.searchMusic(this.searchStr).subscribe((res: any) => {
        this.searchRes = res.artists.items;
      });
    else {
      this.searchRes = [];
    }
  }
}
