import { Component, OnInit } from '@angular/core';

// вероятнее всего это будет страница, т.е. app-artist-page
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
