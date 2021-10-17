import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class SpotifyService {
  private searchUrl!: string;
  private artistUrl!: string;
  private albumsUrl!: string;
  private albumUrl!: string;

  constructor(private _http: HttpClient) {}

  auth: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer BQCMKNKwW7SZBvmpje-Nw3gG9YaWy5JhtcTyAUWl2eA97_nlGAMLGj_79WLjz4u2roinXRXsnewfEdOjq_Zo2WwdTl6SDgFqvGHC3h-NqryegcAp9A_Hx4AQK1cKvxS3qVPXd7k-UJhIewaQ8t5XvxjhCfx0cSmqlnDcEL3OQMiKhDo',
  });

  searchMusic(str: string, type = 'artist') {
    this.searchUrl =
      'https://api.spotify.com/v1/search?query=' +
      str +
      '&offset=0&limit=20&type=' +
      type;
    return this._http.get(this.searchUrl, { headers: this.auth });
  }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl, { headers: this.auth });
  }

  getAlbums(artistId: string) {
    this.albumsUrl =
      'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    return this._http.get(this.albumsUrl, { headers: this.auth });
  }

  getAlbum(id: string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
    return this._http.get(this.albumUrl, { headers: this.auth });
  }
}
