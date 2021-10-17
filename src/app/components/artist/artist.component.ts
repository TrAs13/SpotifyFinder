import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.sass'],
})
export class ArtistComponent implements OnInit {
  id!: string;
  artist!: Artist[] | any;
  albums!: Album[] | any;

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params
      .pipe(map((params: any) => params['id']))
      .subscribe((id: any) => {
        this._spotifyService.getArtist(id).subscribe((artist: any) => {
          this.artist = artist;
        });

        this._spotifyService.getAlbums(id).subscribe((albums: any) => {
          this.albums = albums.items;
        });
      });
  }
}
