import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  languages = ['en', 'ru'];
  index = 0; // свойство лишнее, эта инфа есть уже в translate внутри какой сейчас язык
  // translate.currentLang
  constructor(public translate: TranslateService) {}

  changeLanguage() {
    this.index = (this.index + 1) % this.languages.length;
    this.translate.use(this.languages[this.index]);
  }
}
