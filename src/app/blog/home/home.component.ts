import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BlogService } from './blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  allData: any = [];
  bookSubscription: Subscription;
  characterSubscription: Subscription;
  houseSubscription: Subscription;
  isLoaded: boolean = false;
  categories: string[] = ['books', 'characters', 'houses'];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBooks();
    this.getCharacters();
    this.getHouses();
  }

  getBooks = () => {
    this.isLoaded = true;
    this.bookSubscription = this.blogService.getAllBooks().subscribe((next) => {
      this.allData = this.allData.concat(next);
      // console.log(`TCL: HomeComponent -> getBooks -> this.allData`, this.allData);
      this.isLoaded = false;
    }, (error) => {
      // console.log(`TCL: HomeComponent -> getBooks -> error`, error);
      this.isLoaded = false;
    })
  }

  getCharacters = () => {
    this.isLoaded = true;
    this.characterSubscription = this.blogService.getAllCharacters().subscribe((next) => {
      this.allData = this.allData.concat(next);
      // console.log(`TCL: HomeComponent -> getCharacters -> this.allData`, this.allData);
      this.isLoaded = false;
    }, (error) => {
      // console.log(`TCL: HomeComponent -> getCharacters -> error`, error);
      this.isLoaded = false;
    })
  }

  getHouses = () => {
    this.isLoaded = true;
    this.houseSubscription = this.blogService.getAllHouses().subscribe((next) => {
      this.allData = this.allData.concat(next);
      // console.log(`TCL: HomeComponent -> getHouses -> this.allData`, this.allData);
      this.isLoaded = false;
    }, (error) => {
      console.log(`TCL: HomeComponent -> getHouses -> error`, error);
      this.isLoaded = false;
    })
  }

  ngOnDestroy() {
    // console.log(`home destroyed`);
    this.bookSubscription.unsubscribe();
    this.houseSubscription.unsubscribe();
    this.characterSubscription.unsubscribe();
  }


}
