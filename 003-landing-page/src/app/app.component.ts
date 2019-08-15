import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome to AshKeys!';

  images: string[] = [];

  private readonly MIN_DELAY_FOR_NEW_RANDOM_IMAGE = 1000;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    [1, 2, 3, 4].forEach((value) => this.getRandom(value));
  }

  getRandom(value) {
    // return this.unsplash.photos.getRandomPhoto();
    fetch(`https://source.unsplash.com/random?t=${new Date().getTime()}`).then(
      (res) => {
        this.images.push(res.url);
      }
    );
    // return new Date();
  }
}
